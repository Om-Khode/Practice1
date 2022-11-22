import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target.name, event.target.value, inputs);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "FirstName : " +
        inputs.firstname +
        "\nLastName : " +
        inputs.lastname +
        "\nEmail : " +
        inputs.email +
        "\nPassword : " +
        inputs.password +
        "\nCompany : " +
        inputs.company
    );
    setInputs({});
  };

  return (
    <div className="container">
      <div className="sideScreen">
        <div className="company">
          <div className="comLogo"></div>
          <div className="comName">Company Logo</div>
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
        <div className="signUp">Sign Up</div>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-container">
            <input
              type="text"
              name="firstname"
              value={inputs.firstname || ""}
              autoComplete="off"
              onChange={handleChange}
              className="signUpInput"
            />
            <label className={inputs.firstname && "filled"} htmlFor="firstname">
              First Name
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="lastname"
              value={inputs.lastname || ""}
              autoComplete="off"
              onChange={handleChange}
              className="signUpInput"
            />
            <label className={inputs.lastname && "filled"} htmlFor="lastname">
              Last Name
            </label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
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
              autoComplete="off"
              onChange={handleChange}
              className="signUpInput"
            />
            <label className={inputs.password && "filled"} htmlFor="password">
              Password
            </label>
          </div>
          <div className="input-container">
            <input
              type="password"
              name="confpassword"
              value={inputs.confpassword || ""}
              autoComplete="off"
              onChange={handleChange}
              className="signUpInput"
            />
            <label
              className={inputs.confpassword && "filled"}
              htmlFor="confpassword"
            >
              Confirm Password
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="company"
              value={inputs.company || ""}
              autoComplete="off"
              onChange={handleChange}
              className="signUpInput Bg"
            />
            <label className={inputs.company && "filled"} htmlFor="company">
              Company / Organisation
            </label>
          </div>
          <div>
            <div className="member">
              Already a member{" "}
              <Link to="/Login" className="blue">
                Login
              </Link>
            </div>
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
