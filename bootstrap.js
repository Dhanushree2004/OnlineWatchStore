<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">MyStore</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cart <span id="cart-count" class="badge badge-light"></span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input id="search-input" class="form-control mr-sm-2" type="text" placeholder="Search Products" onkeyup="searchProducts()">
      <button class="btn btn-outline-success my-2 my-sm-0" type="button" onclick="searchProducts()">Search</button>
    </form>
  </div>
</nav>

<div class="jumbotron">
  <h1 class="display-4">Welcome to MyStore</h1>
  <p class="lead">We offer a wide selection of products at great prices. Shop with us today!</p>
  <hr class="my-4">
  <p>Looking for something specific? Use our search bar to find what you need.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn More</a>
</div>

<div class="container">
  <div class="row" id="product-cards">
</div>






