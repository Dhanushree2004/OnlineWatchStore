function searchProducts() {
    var input = document.getElementById("search-input");
    var filter = input.value.toUpperCase();
    var cards = document.getElementsByClassName("card");
  
    // Loop through all product cards, and hide those that don't match the search query
    for (var i = 0; i < cards.length; i++) {
      var title = cards[i].getElementsByClassName("card-title")[0];
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  
  // Function to add a product to the cart
  function addToCart(id) {
    var cart = JSON.parse(localStorage.getItem("cart")) || {};
    cart[id] = (cart[id] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  function updateCartCount() {
    var cart = JSON.parse(localStorage.getItem("cart")) || {};
    var count = Object.values(cart).reduce((a, b) => a + b, 0);
    document.getElementById("cart-count").innerText = count;
  }
  
  // Function to load the products from the server
  function loadProducts() {
    fetch("https://api.example.com/products")
      .then(response => response.json())
      .then(data => {
        var products = data.products;
        var productCardsHtml = "";
  
        // Loop through all products and generate product cards
        for (var i = 0; i < products.length; i++) {
          var product = products[i];
          productCardsHtml += `
            <div class="col-md-4">
              <div class="card">
              <img class="card-img-top" src="${product.image}" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">$${product.price}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id}); updateCartCount();">Add to Cart</button>
              </div>
            </div>
          </div>
        `;
      }

      // Set the HTML for the product cards container
      document.getElementById("product-cards").innerHTML = productCardsHtml;
    })
    .catch(error => console.error(error));
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slideshow-container');

function nextSlide() {
  slides[currentSlide].style.transform = 'translateX(-100%)';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.transform = 'translateX(0)';
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds



// Load the products and update the cart count
loadProducts();
updateCartCount();