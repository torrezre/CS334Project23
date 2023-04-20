from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///myapp.db'
db = SQLAlchemy(app)

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

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    price = db.Column(db.Float)
    quantity = db.Column(db.Integer)

#populating tables
with app.app_context():
    db.create_all()

    #Add to cat table
    db.session.add(Cat(name='Paletas', img='cream paletas mango.png', desc='Paletas are a type of frozen treat that originated in Mexico. They are similar to popsicles or ice pops, but are typically made with fresh fruit and other natural ingredients, and often have a creamier texture.\rPaletas are a popular dessert or snack in many Latin American countries, and can be found in specialty shops or street vendors in the United States as well.</p>'))
    db.session.add(Cat(name='Mochi', img='box of mochi green tea.png', desc='Mochi ice cream is a modern variation of traditional Japanese mochi, which consists of small balls of ice cream wrapped in a layer of sweet, chewy mochi dough. The mochi dough is made from glutinous rice flour, sugar, and water, which is kneaded into a smooth, pliable dough and then wrapped around a small ball of ice cream.\rMochi ice cream comes in a variety of flavors, such as green tea, strawberry, chocolate, and mango. It is often served as a dessert or snack, and can be found in many Asian grocery stores and Japanese restaurants around the world. The combination of the cold ice cream and the soft, chewy mochi dough makes for a unique and satisfying texture and taste experience.</p>'))
    db.session.add(Cat(name='Ice Cream Sandwiches', img='ice cream sandwich2.png', desc='An ice cream sandwich is a dessert that consists of a layer of ice cream sandwiched between two cookies, wafers, or other sweet baked goods. The cookies or wafers are typically soft and chewy, and can be flavored with a variety of ingredients such as chocolate chips, oatmeal, or peanut butter.\rThe ice cream layer is often made from vanilla or chocolate ice cream, but can also be flavored with different ingredients such as fruit or caramel.</p>'))
    db.session.add(Cat(name='Ice Cream Bars', img='mainchocolate ice cream bar.png', desc='Ice cream bars can come in a variety of flavors, such as vanilla, chocolate, strawberry, and mint chocolate chip. They can also have different types of coatings, such as hard chocolate shell or a soft caramel layer. Some ice cream bars also have additional toppings or fillings, such as nuts, sprinkles, or fudge.\rIce cream bars are a popular frozen treat, often sold in grocery stores, ice cream trucks, and at fast food restaurants. They are typically eaten during the summer months or as a dessert after a meal.</p>'))
    db.session.add(Cat(name='Gallons', img='assortmentgall.png', desc='Ice cream is a frozen dessert that is made from a mixture of milk, cream, sugar, and flavorings. The mixture is churned in an ice cream machine to incorporate air and create a smooth and creamy texture. Ice cream can be made in many different flavors, such as vanilla, chocolate, strawberry, and mint chocolate chip, and can also include a variety of mix-ins, such as fruit, nuts, and candy.</p>'))
    
    #add to products table
    db.session.add(Products(name='Strawberry Paleta (9 Pack)', cat_ID=1, price=7.95, quantity=30, img='paletadefresca.png'))
    db.session.add(Products(name='Pineapple Paleta (9 Pack)', cat_ID=1, price=7.95, quantity=30, img='Paletasdepineapple.png'))
    db.session.add(Products(name='Mango Paleta (9 Pack)', cat_ID=1, price=7.95, quantity=30, img='Paletasdemango.png'))
    db.session.add(Products(name='Lime Paleta (9 Pack)', cat_ID=1, price=7.95, quantity=30, img='Paletasdelime.png'))
    db.session.add(Products(name='Green Tea Mochi (8 Pack)', cat_ID=2, price=5.29, quantity=20, img='mochi ice cream green tea.png'))
    db.session.add(Products(name='Chocolate Mochi (8 Pack)', cat_ID=2, price=5.29, quantity=20, img='chocolate mochi ice cream.png'))
    db.session.add(Products(name='Mango Mochi (8 Pack)', cat_ID=2, price=5.29, quantity=20, img='Mochi Ice Cream Mango.png'))
    db.session.add(Products(name='Strawberry Mochi (8 Pack)', cat_ID=2, price=5.29, quantity=20, img='Mochi Ice Cream Strawberry.png'))
    db.session.add(Products(name='Vanilla Mochi (8 Pack)', cat_ID=2, price=5.29, quantity=20, img='Mochi Ice Cream Vanilla.png'))
    db.session.add(Products(name='Dulce de Leche Mochi (8 Pack)', cat_ID=2, price=5.29, quantity=20, img='mochi ice cream dulce de leche.png'))
    db.session.add(Products(name='6 Variety Pack Mochi (48 Pack)', cat_ID=2, price=29.95, quantity=20, img='box of mochi green tea.png'))
    db.session.add(Products(name='Vanilla Ice Cream Sandwich (12 Pack)', cat_ID=3, price=3.95, quantity=20, img='ice cream sandwich.png'))
    db.session.add(Products(name='Chocolate Ice Cream Sandwich (12 Pack)', cat_ID=3, price=3.95, quantity=20, img='chocolate ice cream sandwich.png'))
    db.session.add(Products(name='Double Chocolate Ice Cream Sandwich (12 Pack)', cat_ID=3, price=3.95, quantity=20, img='dblchocolate ice cream sandwich.png'))
    db.session.add(Products(name='Chocolate Ice Cream Bar (4 Pack)', cat_ID=4, price=7.15, quantity=20, img='chocolate ice cream bar.png'))
    db.session.add(Products(name='Chocolate with Peanuts Ice Cream Bar (4 Pack)', cat_ID=4, price=7.15, quantity=20, img='chocolate ice cream bar nuts.png'))
    db.session.add(Products(name='Caramel Ice Cream Bar (4 Pack)', cat_ID=4, price=7.15, quantity=20, img='caramel ice cream barplain.png'))
    db.session.add(Products(name='Caramel with Peanuts Ice Cream Bar (4 Pack)', cat_ID=4, price=7.15, quantity=20, img='caramel ice cream bar.png'))
    db.session.add(Products(name='Chocolate (1 Gallon)', cat_ID=5, price=7.75, quantity=30, img='chocolate ice cream scoop.png'))
    db.session.add(Products(name='Vanilla (1 Gallon)', cat_ID=5, price=7.75, quantity=20, img='vanilla ice cream scoop.png'))
    db.session.add(Products(name='Mint Chocolate Chip (1 Gallon)', cat_ID=5, price=7.75, quantity=20, img='mint chocolate chip ice cream scoop.png'))
    db.session.add(Products(name='Cookies and Cream (1 Gallon)', cat_ID=5, price=7.75, quantity=20, img='cookies and cream ice cream scoop.png'))
    db.session.add(Products(name='Mango (1 Gallon)', cat_ID=5, price=7.75, quantity=20, img='mango ice cream scoop.png'))
    db.session.add(Products(name='Pecan Pralines (1 Gallon)', cat_ID=5, price=7.75, quantity=20, img='pecan pralines ice cream scoop.png'))
    db.session.add(Products(name='Rocky Road (1 Gallon)', cat_ID=5, price=7.75, quantity=20, img='ice cream reeses cup scoop.png'))

    db.session.commit()

@app.route('/')
def home():
    categories = Cat.query.all()
    return render_template('home.html', categories=categories)

@app.route('/category/<int:id>')
def category(id):
    category = Cat.query.filter_by(id=id).first()
    products = Products.query.filter_by(cat_ID=id).all()
    return render_template('category.html', category=category, products=products)

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')