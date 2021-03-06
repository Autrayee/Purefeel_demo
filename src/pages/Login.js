import React from "react";
import './Login.css'

function Login(){
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
                <a href="sign.html" class=""
                  ><span class="glyphicon glyphicon-user">SignUp</span></a
                >
              </li>
              <li>
                <a href="login.html"
                  ><span class="glyphicon glyphicon-log-in"> Login</span></a
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
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h2>LOGIN</h2>
              </div>
              <div class="panel-body">
                <p class="text-warning">Login to make a purchase</p>
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="E-mail"
                      class="form-control"
                      name="E-mail"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Password"
                      class="form-control"
                      name="Password"
                    />
                  </div>
                  <button class="btn btn-primary">Login</button>
                  <div class="signIn">
                    Don't have an account?<a href="sign.html">Register</a
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
        </div>
    )
}

export default Login