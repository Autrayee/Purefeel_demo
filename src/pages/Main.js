function Main(){
    return(
        <div>
             <header>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#mynavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="index.html" class="navbar-brand">Pure Feel</a>
          </div>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="index.html"><span class="about-us">Home</span></a>
              </li>
              <li>
                <a href="contact.html"><span class="contact-us">Contact Us</span></a>
              </li>
              <li>
                <a href="index.html"><span class="about-us">Feedback</span></a>
              </li>
              <li>
                <a href="index.html"><span class="about-us">About Us</span></a>
              </li>
              <li>
                <a href="sign.html"><span class="">SignUp</span></a>
              </li>
              <li>
                <a href="login.html" id="button-link"
                  ><span class="toggle-button"> Login</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section class="banner-image">
        <div class="container">
          <div class="banner-content">
            <h1>We sell Pure natural products</h1>
            <p>Flat 40% OFF on all products</p>
            <a href="products.html" class="btn btn-danger btn-lg active"
              >Shop Now</a
            >
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="padding-20"></div>
          <div class="row">
            <div class="col-xs-4 text-center">
              <div class="thumbnail">
                <a href="Bath&Beauty.html"
                  ><img src="img/Beauty/Bath.jpg" alt="Beauty"
                /></a>
                <div class="caption">
                  <h2>Bath & Beauty</h2>
                  <p>Original Beauty products from the best brands.</p>
                </div>
              </div>
            </div>
            <div class="col-xs-4 text-center">
              <div class="thumbnail">
                <a href="Beverages.html"
                  ><img src="img/Beverages/Beverage.jpg" alt="Beverages"
                /></a>
                <div class="caption">
                  <h2>Beverages</h2>
                  <p>Choose among the best available.</p>
                </div>
              </div>
            </div>
            <div class="col-xs-4 text-center">
              <div class="thumbnail">
                <a href="Food.html"
                  ><img src="img/Food/Food.jpg" alt="Shirt"
                /></a>
                <div class="caption">
                  <h2>Food</h2>
                  <p>Pure and healthy Food.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="padding-20"></div>
        </div>
      </section>
    </main>
    <footer>
      <div class="container">
        <center>Copyright © Pure Feel Store. All Rights Reserved</center>
      </div>
    </footer>
        </div>
    )
}

export default Main