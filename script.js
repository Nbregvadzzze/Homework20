// Add event listeners to all "Add to Cart" buttons
var addToCartButtons = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Function to handle the "Add to Cart" button click event
function addToCart(event) {
  var product = event.target.parentNode; // Get the product container
  var productName = product.querySelector('h2').innerText;
  
  // Create a new cart item
  var cartItem = document.createElement('li');
  cartItem.innerText = productName;

  // Add the cart item to the cart
  var cartItems = document.getElementById('cart-items');
  cartItems.appendChild(cartItem);
}
