import React, { useEffect, useState } from 'react'
import './Login.css';

function Registration() {

  

  return (
  <>
    <div class="container-login">
      <form action="/action_page.php">
        <div class="row-login">
          <h2 style="text-align:center">Login with Social Media or Manually</h2>
          <div class="vl">
            <span class="vl-innertext">or</span>
          </div>

          <div class="col">
            <a href="#" class="fb btn">
              <i class="fa fa-facebook fa-fw"></i> Login with Facebook
            </a>
            <a href="#" class="twitter btn">
              <i class="fa fa-twitter fa-fw"></i> Login with Twitter
            </a>
            <a href="#" class="google btn">
              <i class="fa fa-google fa-fw"></i> Login with Google+
            </a>
          </div>

          <div class="col">
            <div class="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>

            <input className="input-login" type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>

    <div class="bottom-container-login">
      <div class="row">
        <div class="col">
          <a href="#" style="color:white" class="btn">Sign up</a>
        </div>
        <div class="col">
          <a href="#" style="color:white" class="btn">Forgot password?</a>
        </div>
      </div>
    </div>
  </>
  );
}

export default Registration;
