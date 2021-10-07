import React from "react";

function Register(){
    return (
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
                <a href="sign.php" class=""
                  ><span class="glyphicon glyphicon-user">SignUp</span></a
                >
              </li>
              <li>
                <a href="login.php"
                  ><span class="glyphicon glyphicon-log-in">Login</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container">
        <div class="row row_style">
          <div class="col-xs-5 col-lg-offset-2">
            <form>
              <h2>SIGN UP</h2>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  name="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="e-mail"
                  class="form-control"
                  placeholder="E-mail"
                  name="E-mail"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="Password"
                />
              </div>
              <div class="form-group">
                <input
                  type="contact"
                  class="form-control"
                  placeholder="Contact"
                  name="Contact"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="City"
                  name="City"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  name="Address"
                />
              </div>
              <button class="btn btn-primary">Submit</button>
              <div class="hint-text">
                Already have an account? <a href="login.html">Login here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
        </div>
    )
}

export default Register