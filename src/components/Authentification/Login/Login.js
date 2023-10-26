import React, { useEffect, useState } from 'react'
import { rest } from "../../../api";
import './Login.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    rest('/login', {
      method: "post",
      data: { email, password },
    })
      .then((result) => {console.log(result);})
      .catch((error) => {console.log(error);})
  }

  return (
  <>
    <div class="container-login" onSubmit={(e)=>handleSubmit(e)}>
      <form>
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

            <input
              className="input-login"
              type="text"
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="submit"
              value="Login"
              onClick={(e) => handleSubmit(e)}
            />
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

export default Login;
