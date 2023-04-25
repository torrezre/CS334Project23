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
  document.getElementById("checkout-form").style.display = "block";
}

function order() {
  $.ajax({
    url: "/check_out/",
    method: "POST",
    data : {
      nameInput : $('#nameInput').val(),
      emailInput : $('#emailInput').val(),
      addressInput : $('#addressInput').val(),
      cityInput : $('#cityInput').val(),
      stateInput : $('#stateInput').val(),
      zipInput : $('#zipInput').val()
    },
  success: function(response) {
    console.log(response);
    alert("Order Received!");
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log('Error completing order ' + errorThrown);
  }
});
}