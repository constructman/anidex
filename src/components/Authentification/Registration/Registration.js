import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Registration.css';

function Registration() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const isAuth = () => {
    
  }

  const handleSubmit = (e) => {
    const configuration = {
      method: "post",
      url: "https://localhost:5000/register",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {console.log(result);})
      .catch((error) => {console.log(error);})
  }

  // const onSubmit = async (event) => {
  //   await function fetch() {

  //   }
  // }

  return (
    <form action="action_page.php" onSubmit={(e)=>handleSubmit(e)}>
      <div class="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label for="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        />
        <hr />

        <p>By creating an account you agree to our <a className="authLink" href="#">Terms & Privacy</a>.</p>
        <button
          type="submit"
          class="registerbtn"
          onClick={(e) => handleSubmit(e)}
        >
          register
        </button>
      </div>

      <div class="container signin">
        <p>Already have an account?
          <a className="authLink" href="#">Sign in</a>.
        </p>
      </div>
    </form>
  );
}

export default Registration;
