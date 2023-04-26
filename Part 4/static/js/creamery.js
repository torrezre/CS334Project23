//Add to cart button
function addToCart(name, price) {
  $.ajax({
    url: '/api/cart',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({name: name, price: price}),
    success: function(response) {
      console.log(response.message);
      alert("Added to cart!");
    },
    error: function(xhr, status, error) {
      console.log('Error adding item to cart:', error);
      alert("Error adding item to cart!");
    }
  });
}

//Delete one item from cart
function deleteCartItem(id) {
  $.ajax({
    url: "/delete_cart_item",
    method: "POST",
    data: {id: id},
    success: function(response) {
      console.log(response);
      alert("Item deleted from cart!");
      window.location.reload();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('Error deleting item from cart: ' + errorThrown);
    }
  });
}

//Delete all items from cart
function deleteCartAll() {
  $.ajax({
    url: "/delete_cart_all",
    method: "POST",
    success: function(response) {
      console.log(response);
      alert("All items deleted from cart!");
      window.location.reload();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('Error deleting items from cart: ' + errorThrown);
    }
  });
}

function makeCheckout() {
  document.getElementById("cartBottom").style.display = "block";
}

function order() {
  alert("Order received!");
}

