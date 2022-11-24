import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import "./Login.css";

export default function Login() {
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target.name, event.target.value, inputs);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.email && inputs.password) {
      alert("\nEmail : " + inputs.email + "\nPassword : " + inputs.password);
      setInputs({});
      navigate("/SignUp");
    } else {
      alert("Input all Fields!!!");
    }
  };

  return (
    <div className="Signcontainer">
      <div className="sideScreen">
        <div className="Signcompany">
          <div className="SigncomLogo"></div>
          <div className="SigncomName">Company Logo</div>
        </div>
        <div className="mainText">
          <p className="journey">Start your journey with us.</p>
          <p className="discover">
            Discover the world’s best community of freelancers and business
            owners.
          </p>
        </div>
        <div className="lastText">Lorem ipsum</div>
      </div>
      <div className="mainScreen">
        <div className="signUp">Log In</div>
        <form onSubmit={handleSubmit} className="form Login">
          <div className="input-container">
            <input
              type="email"
              name="email"
              required
              value={inputs.email || ""}
              autoComplete="off"
              onChange={handleChange}
              className="signUpInput Bg"
            />
            <label className={inputs.email && "filled"} htmlFor="email">
              Email
            </label>
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              value={inputs.password || ""}
              required="on"
              autoComplete="off"
              onChange={handleChange}
              className="signUpInput Bg"
            />
            <label className={inputs.password && "filled"} htmlFor="password">
              Password
            </label>
          </div>
          <div className="input-container fp">
            <small>Forgot Password?</small>
          </div>
          <div className="bottomPart">
            <div className="member Bg">
              Don’t have an account yet?{" "}
              <Link to="/SignUp" className="blue">
                Sign Up
              </Link>
            </div>
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
