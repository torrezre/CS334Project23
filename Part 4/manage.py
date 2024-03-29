from flask import Flask, session, render_template, redirect, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///myapp.db'
app.secret_key = b'5#x2L"F4Q8z\n\yec]/'

db = SQLAlchemy(app)

# Create the database with Users, Products, and WebOrder Tables
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(50))

class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100))
    cat_id = db.Column(db.Integer)
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

# Initialize the database
db.create_all()

# Add default user to Users database if it doesn't exist
default_user = Users.query.first()
if not default_user:
    user = Users(name='Admin', password='Admin123')
    db.session.add(user)
    db.session.commit()

# Add default products to Products database if the database is empty
default_product = Products.query.first()
if not default_product:
    product1 = Products(name='Strawberry Paleta (9 Pack)', cat_id=1, price=7.95, quantity=30, img='product-paleta-strawberry.png')
    product2 = Products(name='Pineapple Paleta (9 Pack)', cat_id=1, price=7.95, quantity=30, img='product-paleta-pineapple.png')
    product3 = Products(name='Mango Paleta (9 Pack)', cat_id=1, price=7.95, quantity=30, img='product-paleta-mango.png')
    product4 = Products(name='Lime Paleta (9 Pack)', cat_id=1, price=7.95, quantity=30, img='product-paleta-lime.png')
    product5 = Products(name='Green Tea Mochi (8 Pack)', cat_id=2, price=5.29, quantity=20, img='product-mochi-greentea.png')
    product6 = Products(name='Chocolate Mochi (8 Pack)', cat_id=2, price=5.29, quantity=20, img='product-mochi-chocolate.png')
    product7 = Products(name='Mango Mochi (8 Pack)', cat_id=2, price=5.29, quantity=20, img='product-mochi-mango.png')
    product8 = Products(name='Strawberry Mochi (8 Pack)', cat_id=2, price=5.29, quantity=20, img='product-mochi-strawberry.png')
    product9 = Products(name='Vanilla Mochi (8 Pack)', cat_id=2, price=5.29, quantity=20, img='product-mochi-vanilla.png')
    product10 = Products(name='Dulce de Leche Mochi (8 Pack)', cat_id=2, price=5.29, quantity=20, img='product-mochi-dulce.png')
    product11 = Products(name='6 Variety Pack Mochi (48 Pack)', cat_id=2, price=29.95, quantity=20, img='product-mochi-variety.png')
    product12 = Products(name='Vanilla Ice Cream Sandwich (12 Pack)', cat_id=3, price=3.95, quantity=20, img='product-sandwich-vanilla.png')
    product13 = Products(name='Chocolate Ice Cream Sandwich (12 Pack)', cat_id=3, price=3.95, quantity=20, img='product-sandwich-chocolate.png')
    product14 = Products(name='Double Chocolate Ice Cream Sandwich (12 Pack)', cat_id=3, price=3.95, quantity=20, img='product-sandwich-dblchocolate.png')
    product15 = Products(name='Chocolate Ice Cream Bar (4 Pack)', cat_id=4, price=7.00, quantity=20, img='product-bar-chocolate plain.png')
    product16 = Products(name='Chocolate with Peanuts Ice Cream Bar (4 Pack)', cat_id=4, price=7.00, quantity=20, img='product-bar-chocolate nuts.png')
    product17 = Products(name='Caramel Ice Cream Bar (4 Pack)', cat_id=4, price=7.00, quantity=20, img='product-bar-caramel plain.png')
    product18 = Products(name='Caramel with Peanuts Ice Cream Bar (4 Pack)', cat_id=4, price=7.00, quantity=20, img='product-bar-caramel nuts.png')
    product19 = Products(name='Chocolate (1 Gallon)', cat_id=5, price=7.75, quantity=20, img='product-gallon-chocolate.png')
    product20 = Products(name='Vanilla (1 Gallon)', cat_id=5, price=7.75, quantity=20, img='product-gallon-vanilla.png')
    product21 = Products(name='Mint Chocolate Chip (1 Gallon)', cat_id=5, price=7.75, quantity=20, img='product-gallon-mint.png')
    product22 = Products(name='Cookies and Cream (1 Gallon)', cat_id=5, price=7.75, quantity=20, img='product-gallon-cookies.png')
    product23 = Products(name='Mango (1 Gallon)', cat_id=5, price=7.75, quantity=20, img='product-gallon-mango.png')
    product24 = Products(name='Pecan Pralines (1 Gallon)', cat_id=5, price=7.75, quantity=20, img='product-gallon-pecan.png')
    product25 = Products(name='Rocky Road (1 Gallon)', cat_id=5, price=7.75, quantity=20, img='product-gallon-rockyroad.png')
    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)
    db.session.add(product15)
    db.session.add(product16)
    db.session.add(product17)
    db.session.add(product18)
    db.session.add(product19)
    db.session.add(product20)
    db.session.add(product21)
    db.session.add(product22)
    db.session.add(product23)
    db.session.add(product24)
    db.session.add(product25)
    db.session.commit()

# Add default orders to the WebOrder table if it is empty
default_order = WebOrder.query.first()
if not default_order:
    order1 = WebOrder(name='Buck Cherry', products='Strawberry Paleta (9 Pack)', order_total='7.95', address='111 this place', email='this@email.com')
    order2 = WebOrder(name='Clive Berry', products='Strawberry Paleta (9 Pack)', order_total='7.95', address='123 this place', email='that@email.com')
    db.session.add(order1)
    db.session.add(order2)
    db.session.commit()

# Login Page Loads
@app.route('/management-login.html', methods=['GET'])
def loadLogin():
    if not 'username' in session:
        return render_template('login.html')
    else:
        return render_template('logout.html')

# Login Page Form Requests
@app.route('/management-login.html', methods=['POST'])
def index():
    #Login
    if request.form['action'] == 'Sign in':
        if not request.form['email'] or not request.form['pw']:
            return redirect('/management-inventory.html')
        else:
            name = request.form['email']
            password = request.form['pw']
            user = Users.query.filter_by(name=name, password=password).first()
            if user:
                session['username'] = user.name
                return redirect('/management-inventory.html')
        return redirect('/management-login.html')
    #Logout
    elif request.form['action'] == 'Sign out':
        session.pop('username', None)
        return redirect('/management-login.html')

# Inventory Page Loads
@app.route('/management-inventory.html', methods=['GET'])
def loadInventory():
    if not 'username' in session:
        return redirect('/management-login.html')
    else:
        if not 'category' in session:
            session['category'] = 'All'
            # Get orders and populate table from template
            products = Products.query.all()
            return render_template('inventory.html', rows=products)
        else:
            if session['category'] == "Paletas":
                products = Products.query.filter_by(cat_id=1)
                return render_template('inventory.html', rows=products)
            elif session['category'] == "Mochi":
                products = Products.query.filter_by(cat_id=2)
                return render_template('inventory.html', rows=products)
            elif session['category'] == "Sandwiches":
                products = Products.query.filter_by(cat_id=3)
                return render_template('inventory.html', rows=products)
            elif session['category'] == "Bars":
                products = Products.query.filter_by(cat_id=4)
                return render_template('inventory.html', rows=products)
            elif session['category'] == "Gallons and Pints":
                products = Products.query.filter_by(cat_id=5)
                return render_template('inventory.html', rows=products)
            elif session['category'] == "All":
                products = Products.query.all()
                return render_template('inventory.html', rows=products)

# Inventory Page Form Requests
@app.route('/management-inventory.html', methods=['POST'])
def updateProduct():
    # Add Product to SQL database from inventory form
    if request.form['action'] == 'Add Flavor':
        name = request.form['flavor']
        category = request.form['category']
        price = request.form['price']
        quantity = request.form['stock']
        image = request.form['image']

        flavor = Products(name=name, cat_id=category, price=price, quantity=quantity, img=image)
        db.session.add(flavor)
        db.session.commit()

        return redirect('/management-inventory.html')
    # Modify existing Product in SQL database
    elif request.form['action'] == 'Save':
        id = request.form['id']
        name = request.form['name']
        category = request.form['category']
        price = request.form['price']
        quantity = request.form['quantity']
        image = request.form['image']
        product = Products.query.filter_by(id=id).first()

        product.name = name
        product.cat_id = category
        product.price = price
        product.quantity = quantity
        product.img = image
        db.session.commit()
    # Delete product from SQL database
    elif request.form['action'] == 'Delete':
        id = request.form['id']
        product = Products.query.filter_by(id=id).first()
        if product:
            db.session.delete(product)
            db.session.commit()

    # Change the selected category based on user input
    elif request.form['action'] == 'All':
        session['category'] = 'All'

    elif request.form['action'] == 'Paletas':
        session['category'] = 'Paletas'

    elif request.form['action'] == 'Mochi':
        session['category'] = 'Mochi'

    elif request.form['action'] == 'Sandwiches':
        session['category'] = 'Sandwiches'

    elif request.form['action'] == 'Bars':
        session['category'] = 'Bars'

    elif request.form['action'] == 'Gallons and Pints':
        session['category'] = 'Gallons and Pints'

    return redirect('/management-inventory.html')

# Orders Page Loads
@app.route('/management-orders.html', methods=['GET'])
def loadOrders():
    # Check login status and redirect if logged out
    if not 'username' in session:
        return redirect('/management-login.html')
    else:
        # Get orders and populate table from template
        orders = WebOrder.query.all()
        return render_template('orders.html', rows=orders)

# Orders Page Form Requests
@app.route('/management-orders.html', methods=['POST'])
def updateOrder():
    id = request.form['id']
    name = request.form['name']
    order = WebOrder.query.filter_by(id=id).first()

    #Edit Order in the SQL database from the order manager
    if request.form['action'] == 'Save':
        order.name = name
        order.products = request.form['products']
        order.order_total = request.form['total']
        order.address = request.form['address']
        order.email = request.form['email']
        db.session.commit()

        return(redirect('/management-orders.html'))
    #Delete Order in the SQL database from the order manager
    elif request.form['action'] == 'Delete':
        if order:
            db.session.delete(order)
            db.session.commit()
        return(redirect('/management-orders.html'))

# API to return JSON list of all creamery products and prices
@app.route('/products')
def jsonProducts():
    products = Products.query.all()
    productList = []
    for row in products:
        product = {
            'name': row.name,
            'price': row.price
        }
        productList.append(product)
    return jsonify(productList)

# Service worker routing
@app.route('/service-worker.js')
def sw():
    return app.send_static_file('service-worker.js')

# Run Flask
if __name__ == '__main__':
    app.run(debug=True)