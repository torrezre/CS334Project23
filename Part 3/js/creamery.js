if (typeof window.openDatabase === 'undefined') {
  // I guess you don't get ice cream
  alert('Web SQL Database is not supported in this browser. Please try a Chrome based browser, Microsoft Edge, Vivaldi, or any other browser suitable for your OS.');
} else {
// open a database
var db = openDatabase('mydb', '1.0', 'creamdb', 2 * 1024 * 1024);

// creating category table
db.transaction(function(tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS cat (id INTEGER PRIMARY KEY, name, img)');
});

// inserting data into category
db.transaction(function(tx) {
  tx.executeSql('INSERT INTO cat (id, name, img) VALUES (?, ?, ?)', [1, 'Paletas', 'cream paletas mango.png']);
  tx.executeSql('INSERT INTO cat (id, name, img) VALUES (?, ?, ?)', [2, 'Mochi', 'box of mochi green tea.png']);
  tx.executeSql('INSERT INTO cat (id, name, img) VALUES (?, ?, ?)', [3, 'Ice Cream Sandwiches', 'ice cream sandwich2.png']);
  tx.executeSql('INSERT INTO cat (id, name, img) VALUES (?, ?, ?)', [4, 'Ice Cream Bars', 'mainchocolate ice cream bar.png']);
  tx.executeSql('INSERT INTO cat (id, name, img) VALUES (?, ?, ?)', [5, 'Gallons', 'assortmentgall.png']);
});

// creating products table
db.transaction(function(tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name, cat_ID, price, quantity, img)');
});

// inserting data into products
db.transaction(function(tx) {
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [1, 'Strawberry Paleta (9 Pack)', 1, 7.95, 30, 'paletadefresca.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [2, 'Pineapple Paleta (9 Pack)', 1, 7.95, 30, 'Paletasdepineapple.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [3, 'Mango Paleta (9 Pack)', 1, 7.95, 30, 'Paletasdemango.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [4, 'Lime Paleta (9 Pack)', 1, 7.95, 30, 'Paletasdelime.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [5, 'Green Tea Mochi (8 Pack)', 2, 5.29, 20, 'mochi ice cream green tea.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [6, 'Chocolate Mochi (8 Pack)', 2, 5.29, 20, 'chocolate mochi ice cream.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [7, 'Mango Mochi (8 Pack)', 2, 5.29, 20, 'Mochi Ice Cream Mango.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [8, 'Strawberry Mochi (8 Pack)', 2, 5.29, 20, 'Mochi Ice Cream Strawberry.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [9, 'Vanilla Mochi (8 Pack)', 2, 5.29, 20, 'Mochi Ice Cream Vanilla.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [10, 'Dulce de Leche Mochi (8 Pack)', 2, 5.29, 20, 'mochi ice cream dulce de leche.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [11, '6 Variety Pack Mochi (48 Pack)', 2, 29.95, 20, 'box of mochi green tea.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [12, 'Vanilla Ice Cream Sandwich (12 Pack)', 3, 3.95, 20, 'ice cream sandwich.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [13, 'Chocolate Ice Cream Sandwich (12 Pack)', 3, 3.95, 20, 'chocolate ice cream sandwich.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [14, 'Double Chocolate Ice Cream Sandwich (12 Pack)', 3, 3.95, 20, 'dblchocolate ice cream sandwich.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [15, 'Chocolate Ice Cream Bar (4 Pack)', 4, 7.00, 20, 'chocolate ice cream bar.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [16, 'Chocolate with Peanuts Ice Cream Bar (4 Pack)', 4, 7.00, 20, 'chocolate ice cream bar nuts.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [17, 'Caramel Ice Cream Bar (4 Pack)', 4, 7.00, 20, 'caramel ice cream barplain.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [18, 'Caramel with Peanuts Ice Cream Bar (4 Pack)', 4, 7.00, 20, 'caramel ice cream bar.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [19, 'Chocolate (1 Gallon)', 5, 7.75, 30, 'chocolate ice cream scoop.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [20, 'Vanilla (1 Gallon)', 5, 7.75, 20, 'vanilla ice cream scoop.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [21, 'Mint Chocolate Chip (1 Gallon)', 5, 7.75, 20, 'mint chocolate chip ice cream scoop.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [22, 'Cookies and Cream (1 Gallon)', 5, 7.75, 20, 'cookies and cream ice cream scoop.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [23, 'Mango (1 Gallon)', 5, 7.75, 20, 'mango ice cream scoop.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [24, 'Pecan Pralines (1 Gallon)', 5, 7.75, 20, 'pecan pralines ice cream scoop.png']);
  tx.executeSql('INSERT INTO products (id, name, cat_ID, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)', [25, 'Rocky Road (1 Gallon)', 5, 7.75, 20, 'ice cream reeses cup scoop.png']);
});

//making cart table
db.transaction(function(tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY AUTOINCREMENT, name, price, quantity)');
});

//function for building product pages
function makeProducts(a){
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM products WHERE cat_ID = ?', [a], function(tx, result) {
      //console log to check if i broke things
      console.log('Query returned ' + result.rows.length + ' rows.');
      for (var i = 0; i < result.rows.length; i++) {
        var product = result.rows.item(i);
        // create the elements
        const div = document.createElement("div");
        const img = document.createElement("img");
        const br = document.createElement("br");
        const h3 = document.createElement("h3");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const button = document.createElement("button");

        // add the stuff in the elements
        div.classList.add('image');
        img.setAttribute('src', './images/' + product.img);
        h3.textContent = product.name;
        p1.textContent = "$" + product.price;
        button.classList.add('add-to-cart');
        button.textContent = 'Add to Cart';
        button.dataset.name = product.name;
        button.dataset.price = product.price;
        //making sure every add to cart button does actually add to cart
        
        button.onclick = function(){addToCart(button.dataset.name,button.dataset.price);};  

        // add the elements into the other elements
        div.appendChild(img);
        div.appendChild(br);
        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        p2.appendChild(button);

        //another console.log to make sure the numbers match up
        console.log('Appending div to wrapper...');
        //publish it
        document.querySelector('#wrapper').appendChild(div);
      }
    });
  });
}

//Adding things to the cart.
function addToCart(name,price) {
  const quantity = 1;

  // check if the product already exists in the cart, updating quantity if so. 
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM cart WHERE name = ?', [name], function(tx, result) {
      if (result.rows.length > 0) {
        // product already exists in cart,
        var existingProduct = result.rows.item(0);
        var newQuantity = existingProduct.quantity + quantity;
        tx.executeSql('UPDATE cart SET quantity = ? WHERE id = ?', [newQuantity, existingProduct.id], function(tx, result) {
          console.log('Quantity updated in cart.');
          alert("Quantity updated in cart!");
        }, function(tx, error) {
          console.log('Error updating quantity in cart: ' + error.message);
        });
      } else {
        // product does not exist in cart
        tx.executeSql('INSERT INTO cart (name, price, quantity) VALUES (?, ?, ?)', [name, price, quantity], function(tx, result) {
          console.log('Product added to cart.');
          alert("Added to cart!");
        }, function(tx, error) {
          console.log('Error adding product to cart: ' + error.message);
        });
      }
    });
  });
}

}

//Building cart page
function makeCart(){
    // Retrieve cart data and populate the HTML table
    db.transaction(function(tx) {
      tx.executeSql('SELECT * FROM cart', [], function(tx, results) {
        var table = document.createElement('table');
        var thead = table.createTHead();
        var row = thead.insertRow();
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var th4 = document.createElement('th');

        th1.innerHTML = '<h3>Product Name</h3>';
        th2.innerHTML = '<h3>Price</h3>';
        th3.innerHTML = '<h3>Quantity</h3>';
        th4.innerHTML = '<h3>Delete</h3>';
        row.appendChild(th1);
        row.appendChild(th2);
        row.appendChild(th3);
        row.appendChild(th4);
        var tbody = table.createTBody();
        var total = 0; // initialize total to zero
        for (var i = 0; i < results.rows.length; i++) {
          var row = tbody.insertRow();
          var cell1 = row.insertCell();
          var cell2 = row.insertCell();
          var cell3 = row.insertCell();
          cell1.innerHTML = results.rows.item(i).name;
          cell2.innerHTML = '$' + results.rows.item(i).price;
          cell3.innerHTML = results.rows.item(i).quantity;
          total += parseFloat(results.rows.item(i).price) * parseFloat(results.rows.item(i).quantity);
        }
        var totalRow = table.insertRow();
        var totalLabelCell = totalRow.insertCell();
        var totalValueCell = totalRow.insertCell();
        totalLabelCell.innerHTML = "<h3>Total:</h3>";
        totalValueCell.innerHTML = "$" + total.toFixed(2);
        document.getElementById('wrapper').appendChild(table);
      });
    });
}

//building header
function header(){
  //just have one file that does all this instead of repeating this element each time
const header = document.createElement("header");
const nav = document.createElement("div");
nav.setAttribute("class", "nav");
const ul = document.createElement("ul");
ul.setAttribute("class", "row");

const li1 = document.createElement("li");
const a1 = document.createElement("a");
a1.setAttribute("href", "./index.html");
const img = document.createElement("img");
img.setAttribute("src", "./images/creamery.png");
a1.appendChild(img);
li1.appendChild(a1);

const li2 = document.createElement("li");
const a2 = document.createElement("a");
a2.setAttribute("href", "./index.html");
const h1_1 = document.createElement("h1");
h1_1.textContent = "Home";
a2.appendChild(h1_1);
li2.appendChild(a2);

const li3 = document.createElement("li");
const h1_2 = document.createElement("h1");
const a3 = document.createElement("a");
a3.setAttribute("href", "./about.html");
a3.textContent = "About";
h1_2.appendChild(a3);
li3.appendChild(h1_2);

const li4 = document.createElement("li");
const h1_3 = document.createElement("h1");
const a4 = document.createElement("a");
a4.setAttribute("href", "./contact.html");
a4.textContent = "Contact";
h1_3.appendChild(a4);
li4.appendChild(h1_3);

const li5 = document.createElement("li");
const h1_4 = document.createElement("h1");
const a5 = document.createElement("a");
a5.setAttribute("href", "./login.html");
a5.textContent = "Log In";
h1_4.appendChild(a5);
li5.appendChild(h1_4);

const li6 = document.createElement("li");
const h1_5 = document.createElement("h1");
const a6 = document.createElement("a");
a6.setAttribute("href", "./cart.html");
a6.textContent = "Cart";
h1_5.appendChild(a6);
li6.appendChild(h1_5);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);

nav.appendChild(ul);
header.appendChild(nav);

// Add the header
document.body.appendChild(header);
}

//building footer
function footer(){
  //just have one file that does all this instead of repeating this element each time
const footer = document.createElement('footer');
const h4 = document.createElement('h4');
h4.textContent = 'Thanks for visiting!';
const span = document.createElement('span');
const a = document.createElement('a');
a.href = './management-login.html';
a.textContent = 'Employee Login';
span.appendChild(a);
h4.appendChild(span);
footer.appendChild(h4);
document.body.appendChild(footer);
}