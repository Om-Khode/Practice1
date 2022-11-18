import React from "react";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target.name, event.target.value, inputs);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // alert(
    //   //   "FirstName : ",
    //   inputs.firstname,
    //   //   "LastName : ",
    //   inputs.lastname,
    //   //   "Email : ",
    //   inputs.email,
    //   //   "Password : ",
    //   inputs.password,
    //   //   "Company : ",
    //   inputs.company
    // );
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
              type="text"
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
              type="text"
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
              type="text"
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
          {/* <label>
            <p className="labelText">First Name</p>
            <input
              type="text"
              name="firstname"
              value={inputs.firstname || ""}
              autoComplete="off"
              onChange={handleChange}
              placeholder="First Name"
            />
          </label>
          <label>
            <p className="labelText">Last Name</p>
            <input
              type="text"
              name="lastname"
              value={inputs.lastname || ""}
              autoComplete="off"
              onChange={handleChange}
              placeholder="Last Name"
            />
          </label>
          <label>
            <p className="labelText">Email</p>
            <input
              type="email"
              name="email"
              autoComplete="off"
              className="bigInput"
              value={inputs.email || ""}
              onChange={handleChange}
              placeholder="Email"
            />
          </label>
          <label>
            <p className="labelText">Password</p>
            <input
              type="text"
              name="password"
              autoComplete="off"
              value={inputs.password || ""}
              onChange={handleChange}
              placeholder="Password"
            />
          </label>
          <label>
            <p className="labelText">Confirm Password</p>
            <input
              type="text"
              autoComplete="off"
              name="confpassword"
              value={inputs.confpassword || ""}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </label>
          <label>
            <p className="labelText">Company / Organisation</p>
            <input
              type="text"
              autoComplete="off"
              name="company"
              className="bigInput"
              value={inputs.company || ""}
              onChange={handleChange}
              placeholder="Company / Organisation"
            />
          </label> */}
          <div>
            <div className="member">
              Already a member <p className="blue">Login</p>
            </div>
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
