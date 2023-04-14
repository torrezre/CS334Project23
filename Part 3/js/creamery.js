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

//web order db
  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS WebOrders (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, products TEXT, order_total TEXT, address TEXT)');
});

//function for building index.html menu
function makeIndex(){
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM cat', [], function(tx, results) {

      var len = results.rows.length;
      for (var i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);

        // creates "menu" class div
        var div = document.createElement('div');
        div.className = 'menu';

        //using innerHTML to fill divs
        div.innerHTML = '<a href="./'+ row.name +'.html' +'">'+'<h3>' + row.name + '</h3>' + '<img src="./images/' + row.img +'">' + '</a>';

        //adding div
        document.getElementById('wrapper').appendChild(div);

      }

    });

  });

}

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

        //add the elements into the other elements
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

//making cart table
db.transaction(function(tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY AUTOINCREMENT, name, price, quantity)');
});

//Adding things to the cart.
function addToCart(name,price) {
  const quantity = 1;

  // check if the product already exists in the cart, updating quantity if so. 
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM cart WHERE name = ?', [name], function(tx, result) {
      if (result.rows.length > 0) {
        // product already exists in cart
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

//Building cart page
function makeCart(){
  // Retrieve cart data and populate the HTML table
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM cart', [], function(tx, results) {
      if (results.rows.length > 0) {
        var table = document.createElement('table');
        var thead = table.createTHead();
        var row = thead.insertRow();
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var th4 = document.createElement('th');

        th1.innerHTML = '<h3>Product</h3>';
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
          var cell4 = row.insertCell();
          cell1.innerHTML = results.rows.item(i).name;
          cell2.innerHTML = '$' + results.rows.item(i).price;
          cell3.innerHTML = results.rows.item(i).quantity;
          var deleteButton = document.createElement('button');
          deleteButton.innerHTML = 'X';
          deleteButton.onclick = (function(id) {
           return function() {deleteCartItem(id);};
          })(results.rows.item(i).id);
          cell4.appendChild(deleteButton);
          total += parseFloat(results.rows.item(i).price) * parseFloat(results.rows.item(i).quantity);
        }
        var totalRow = table.insertRow();
        var totalLabelCell = totalRow.insertCell();
        var totalValueCell = totalRow.insertCell();
        totalLabelCell.innerHTML = "<h3>Total:</h3>";
        totalValueCell.innerHTML = "$" + total.toFixed(2);
        document.getElementById('cart').innerHTML = ''; // clear existing table
        document.getElementById('cart').appendChild(table);

        //making the button for checking out
        var checkoutButton = document.createElement('button');
        checkoutButton.innerHTML = 'Checkout';
        checkoutButton.onclick = makeCheckout;
        
        //making the button for clearing the cart
        var clearCartButton = document.createElement('button');
        clearCartButton.innerHTML = 'Clear Cart';
        clearCartButton.onclick = deleteCartAll;

        //adding buttons to cartTop
        var cartTop = document.getElementById('cartTop');
        cartTop.appendChild(checkoutButton);
        cartTop.appendChild(clearCartButton);
        //now the buttons won't exist if there's nothing in the cart table.

      } else {
        // If there are no rows in the cart
        document.getElementById('cart').innerHTML = 'Cart is empty!';
      }
    });
  });
}

//delete one item from cart
function deleteCartItem(id) {
  db.transaction(function(tx) {
    tx.executeSql('DELETE FROM cart WHERE id = ?', [id], function(tx, result) {
      console.log('Item deleted from cart.');
      alert("Item deleted from cart!");
        // check if cart has any remaining items
    tx.executeSql('SELECT * FROM cart', [], function(tx, result) {
      var rows = result.rows;
      if (rows.length == 0) {
      // if no more items in cart, reload page to reflect changes
      window.location.reload();
      //this reloads the checkout div as well, so there's no loophole where someone can make an order with empty items.
    } else {
      makeCart(); // redraw cart table
    }
  });  
 }, function(tx, error) {
  console.log('Error deleting item from cart: ' + error.message);
 });
 });
}

//Delete all items from cart
function deleteCartAll() {
  db.transaction(function(tx) {
    tx.executeSql('DELETE FROM cart', [], function(tx, result) {
      console.log('All items deleted from cart.');
      alert("All items deleted from cart!");
      // Reload the cart page to reflect the changes
      window.location.reload();
    }, function(tx, error) {
      console.log('Error deleting items from cart: ' + error.message);
    });
  });
}


//Building checkout form
var checkoutClicked = false; //I only want this div built once, on the first click not make infinite divs.

//Making the div
function makeCheckout() {
  if (!checkoutClicked) {
    //check if the cart table has any rows
    db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM cart', [], function (tx, result) {
        var rows = result.rows;
        if (rows.length > 0) {
          //cart has rows, build the checkout form
          var div = document.createElement("div");
          div.setAttribute("id", "cartBottom");
          var form = document.createElement("form");
          var nameLabel = document.createElement("label");
          nameLabel.innerHTML = "Name:";
          var nameInput = document.createElement("input");
          nameInput.setAttribute("type", "text");
          nameInput.setAttribute("name", "name");

          var mailingAddressLabel = document.createElement("label");
          mailingAddressLabel.innerHTML = "Mailing Address:";
          var mailingAddressInput = document.createElement("input");
          mailingAddressInput.setAttribute("type", "text");
          mailingAddressInput.setAttribute("name", "mailingAddress");

          var cityLabel = document.createElement("label");
          cityLabel.innerHTML = "City:";
          var cityInput = document.createElement("input");
          cityInput.setAttribute("type", "text");
          cityInput.setAttribute("name", "city");

          var stateLabel = document.createElement("label");
          stateLabel.innerHTML = "State:";

          // create select element
          var select = document.createElement("select");
          select.setAttribute("name", "state");

          // create options and append to select element
          var states = [  ["AL", "Alabama"],
          ["AK", "Alaska"],
          ["AZ", "Arizona"],
          ["AR", "Arkansas"],
          ["CA", "California"],
          ["CO", "Colorado"],
          ["CT", "Connecticut"],
          ["DE", "Delaware"],
          ["FL", "Florida"],
          ["GA", "Georgia"],
          ["HI", "Hawaii"],
          ["ID", "Idaho"],
          ["IL", "Illinois"],
          ["IN", "Indiana"],
          ["IA", "Iowa"],
          ["KS", "Kansas"],
          ["KY", "Kentucky"],
          ["LA", "Louisiana"],
          ["ME", "Maine"],
          ["MD", "Maryland"],
          ["MA", "Massachusetts"],
          ["MI", "Michigan"],
          ["MN", "Minnesota"],
          ["MS", "Mississippi"],
          ["MO", "Missouri"],
          ["MT", "Montana"],
          ["NE", "Nebraska"],
          ["NV", "Nevada"],
          ["NH", "New Hampshire"],
          ["NJ", "New Jersey"],
          ["NM", "New Mexico"],
          ["NY", "New York"],
          ["NC", "North Carolina"],
          ["ND", "North Dakota"],
          ["OH", "Ohio"],
          ["OK", "Oklahoma"],
          ["OR", "Oregon"],
          ["PA", "Pennsylvania"],
          ["RI", "Rhode Island"],
          ["SC", "South Carolina"],
          ["SD", "South Dakota"],
          ["TN", "Tennessee"],
          ["TX", "Texas"],
          ["UT", "Utah"],
          ["VT", "Vermont"],
          ["VA", "Virginia"],
          ["WA", "Washington"],
          ["WV", "West Virginia"],
          ["WI", "Wisconsin"],
          ["WY", "Wyoming"]
        ];

        for (var i = 0; i < states.length; i++) {
          var option = document.createElement("option");
          option.setAttribute("value", states[i][0]);
          option.appendChild(document.createTextNode(states[i][1]));
          select.appendChild(option);
        }

          var zipLabel = document.createElement("label");
          zipLabel.innerHTML = "Zip:";
          var zipInput = document.createElement("input");
          zipInput.setAttribute("type", "text");
          zipInput.setAttribute("name", "zip");
          zipInput.setAttribute("maxlength", "5");
          //making sure only numbers are entered into zip
          zipInput.addEventListener("input", function() {
            this.value = this.value.replace(/\D/g,'');
          });

          // add form elements to the div
          form.appendChild(nameLabel);
          form.appendChild(nameInput);
          form.appendChild(document.createElement("br"));
          form.appendChild(mailingAddressLabel);
          form.appendChild(mailingAddressInput);
          form.appendChild(document.createElement("br"));
          form.appendChild(cityLabel);
          form.appendChild(cityInput);
          form.appendChild(document.createElement("br"));
          form.appendChild(stateLabel);
          form.appendChild(select);
          form.appendChild(document.createElement("br"));
          form.appendChild(zipLabel);
          form.appendChild(zipInput);
          div.appendChild(form);

      // add "order" button to the page
      var orderButton = document.createElement("button");
      orderButton.innerHTML = "Order";
      orderButton.addEventListener("click", function() {makeOrder()});
      div.appendChild(orderButton);

      // add div to the page
      document.getElementById("wrapper").appendChild(div);

      //set flag to true to prevent subsequent clicks
      checkoutClicked = true;
    } else {
      // cart has no rows, do nothing
      alert("Please add items to your cart to check out.");
    }
  });
 });
 }
 }

 //Sending order information to the table
 function makeOrder() {
  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM cart', [], function(tx, result) {
      var rows = result.rows;
      if (rows.length > 0) {
        var name = document.getElementsByName("name")[0].value;
        var mailingAddress = document.getElementsByName("mailingAddress")[0].value;
        var city = document.getElementsByName("city")[0].value;
        var state = document.getElementsByName("state")[0].value;
        var zip = document.getElementsByName("zip")[0].value;
        
        // Concatenate mailing address, city, state, and zip into one string
        var address = mailingAddress + "<br>" + city + ", " + state + " " + zip;
        
        var products = "";
        var orderTotal = 0;
        for (var i = 0; i < rows.length; i++) {
          var row = rows.item(i);
          var productName = row.name;
          var price = row.price;
          var quantity = row.quantity;
          
          // Add product to the list of products
          if(quantity > 1){
            products += quantity + " " + productName + "<br>";
          }else{
            products += productName + "<br>";
          }
          
          
          // Update order total
          orderTotal += price * quantity;
        }
        var orderTotalToString ="$" + orderTotal.toFixed(2);
        
        // Insert order into WebOrders table
        tx.executeSql('INSERT INTO WebOrders (name, products, order_total, address) VALUES (?, ?, ?, ?)',
          [name, products, orderTotalToString, address],
          function(tx, result) {
          console.log("Order successfully inserted into WebOrders table");
          // Clear cart table after purchase
          tx.executeSql('DELETE FROM cart', [], function(tx, result) {
            console.log("Cart table successfully cleared");
            alert("Order Submitted!")
            window.location.reload();
            }, function(tx, error) {
              console.log("Error clearing cart table: " + error.message);
            });
          },
          function(tx, error) {
            console.log("Error inserting order into WebOrders table: " + error.message);
          });
      } else {
        console.log("Cart is empty");//just in case
      }
    }, function(tx, error) {
      console.log("Error selecting from cart table: " + error.message);
    });
  });
}

//building header
function header(){
// Create the div element
const div = document.createElement('div');
div.classList.add('nav');

// Create the ul element
const ul = document.createElement('ul');
ul.classList.add('row');

// Create the list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

// Create the anchor elements and their children
const a1 = document.createElement('a');
a1.setAttribute('href', './index.html');

const img = document.createElement('img');
img.setAttribute('src', './images/creamery.png');

a1.appendChild(img);
li1.appendChild(a1);

const a2 = document.createElement('a');
a2.setAttribute('href', './index.html');

const h1_1 = document.createElement('h1');
h1_1.textContent = 'Home';

a2.appendChild(h1_1);
li2.appendChild(a2);

const a3 = document.createElement('a');
a3.setAttribute('href', './about.html');

const h1_2 = document.createElement('h1');
h1_2.textContent = 'About';

a3.appendChild(h1_2);
li3.appendChild(a3);

const a4 = document.createElement('a');
a4.setAttribute('href', './contact.html');

const h1_3 = document.createElement('h1');
h1_3.textContent = 'Contact';

a4.appendChild(h1_3);
li4.appendChild(a4);

const a5 = document.createElement('a');
a5.setAttribute('href', './cart.html');

const h1_4 = document.createElement('h1');
h1_4.textContent = 'Cart';

a5.appendChild(h1_4);
li5.appendChild(a5);

// Append the list items to the ul element
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

// Append the ul element to the div element
div.appendChild(ul);

// Append the div element to the header
const header = document.getElementsByTagName('header')[0];
header.appendChild(div);
}

//building footer
function footer(){
  //just have one file that does all this instead of repeating this element each time
const h4 = document.createElement('h4');
h4.textContent = 'Thanks for visiting!';

const span = document.createElement('span');
const a = document.createElement('a');
a.setAttribute('href', './management-login.html');
a.textContent = 'Employee Login';
span.appendChild(a);
h4.appendChild(span);

//Append to the footer element
const footer = document.getElementsByTagName('footer')[0];
footer.appendChild(h4);
 }
}