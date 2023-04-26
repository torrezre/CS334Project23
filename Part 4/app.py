from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message

app = Flask(__name__, static_folder='static')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///myapp.db'
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'g3n3r1c.stud3n7@gmail.com'
app.config['MAIL_PASSWORD'] = 'jysaeirrhhkhihvs'
app.config['MAIL_DEFAULT_SENDER'] = 'g3n3r1c.stud3n7@gmail.com'
mail = Mail(app)
db = SQLAlchemy(app)

#Start table management
# Define the database models
class Cat(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    img = db.Column(db.Text, nullable=False)
    desc = db.Column(db.String(5000))

class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100))
    cat_ID = db.Column(db.Integer)
    price = db.Column(db.Float)
    quantity = db.Column(db.Integer)
    img = db.Column(db.String(100))

class WebOrder(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text, nullable=False)
    products = db.Column(db.Text, nullable=False)
    order_total = db.Column(db.Text)
    address = db.Column(db.Text)
    email = db.Column(db.Text)

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    price = db.Column(db.Float)
    quantity = db.Column(db.Integer)

    def to_dict(self):
        return {
            'name': self.name,
            'price': self.price,
            'quantity': self.quantity
        }

#building pages
#index
@app.route('/')
@app.route('/home')
@app.route('/index.html')
def home():
    categories = Cat.query.all()
    return render_template('home.html', categories=categories)

#building all product pages
@app.route('/category/<int:id>')
def category(id):
    category = Cat.query.filter_by(id=id).first()
    products = Products.query.filter_by(cat_ID=id).all()
    return render_template('category.html', category=category, products=products)

#building about
@app.route('/about')
def about():
    return render_template('about.html')

#building contact
@app.route('/contact')
def contact():
    return render_template('contact.html')

#building cart
@app.route('/cart')
def cart():
    cart_items = Cart.query.all()
    total = 0
    for item in cart_items:
        total += item.price * item.quantity
    return render_template('cart.html', cart_items=cart_items, total=total)
#Done with pages

#Site functionality
#making add to cart button functionality
@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    name = request.json.get('name')
    price = request.json.get('price')
    cart_item = Cart.query.filter_by(name=name).first()
    if cart_item is None:
        # Add new item to cart
        cart_item = Cart(name=name, price=price, quantity=1)
        db.session.add(cart_item)
    else:
        # Increment the quantity of the existing item in the cart
        cart_item.quantity += 1
    db.session.commit()
    return jsonify({'message': 'Item added to cart successfully'})

#adding delete button functionality
@app.route('/delete_cart_item', methods=['POST'])
def delete_cart_item():
    item_id = request.form.get('id')
    item = Cart.query.get(item_id)
    db.session.delete(item)
    db.session.commit()

    response = {'cart_empty': False}
    cart_items = Cart.query.all()
    if not cart_items:
        response['cart_empty'] = True

    return jsonify(response)

#adding clear cart button functionality
@app.route("/delete_cart_all", methods=["POST"])
def delete_cart_all():
    try:
        # Delete all items from the cart
        db.session.query(Cart).delete()
        db.session.commit()
        return "All items deleted from cart.", 200
    except Exception as e:
        db.session.rollback()
        return "Error deleting items from cart: " + str(e), 500
    
def send_email(email, name, products, order_total):
    try:
        email_sender = 'contact@creamery.com'
        email_receiver = email
        products = products.replace("<br>", "\n")

        subject = 'Thank you for your order!'
        body = f'Dear {name},\n\nThank you for your order. Your order has been received and is being processed. Here are the details of your order:\n\n{products}Order Total: ${order_total:.2f}\n\nWe will notify you once your order is shipped.\n\nBest regards,\nThe Creamery Team'

        msg = Message(subject, sender=email_sender, recipients=[email_receiver], body=body)
        mail.send(msg)

        return True
    except Exception as e:
        print(e)
        # Return error response
        return False

@app.route('/check_out/', methods=['POST'])
def checkout():
    name = request.form.get('name')
    email = request.form.get('email')
    address = request.form.get('address')
    city = request.form.get('city')
    state = request.form.get('state')
    zip_code = request.form.get('zip')

    # concatenate mailing address, city, state, and zip into one string
    mailing_address = f"{address}, {city}, {state} {zip_code}"

    # retrieve contents of Cart table and calculate order total
    cart_items = Cart.query.all()
    products = ""
    order_total = 0
    for item in cart_items:
        product_name = item.name
        price = item.price
        quantity = item.quantity

        # Add product to the list of products
        if quantity > 1:
            products += f"{quantity} {product_name} - ${item.price} ea. <br>"
        else:
            products += f"{product_name} - ${item.price}<br>"
        
        # Add item total to order total
        item_total = price * quantity
        order_total += item_total

    # create new WebOrder record with customer information and order details
    web_order = WebOrder(name=name, address=mailing_address, email=email, products=products, order_total=order_total)
    db.session.add(web_order)
    db.session.commit()
    send_email(email,name,products,order_total)
    delete_cart_all()
    return render_template('cart.html', success_message='Order placed successfully.')

@app.route('/api/products', methods=['GET'])
def get_products():
    products = Products.query.all()
    products_list = []
    for product in products:
        product_dict = {}
        product_dict['name'] = product.name
        product_dict['price'] = product.price
        products_list.append(product_dict)
    return jsonify({'products': products_list})
