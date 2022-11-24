import React from "react";
import searchIcon from "./images/search.png";
import helpIcon from "./images/help-web-button(1).png";
import notiIcon from "./images/notification.png";
import accountIcon from "./images/account.png";
import downIcon from "./images/down-arrow.png";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dash">
      <div className="Dashboard">
        <div className="one">
          <h1 className="text">Dashboard</h1>
          <div className="searchbar">
            <input
              type="text"
              className="bar"
              name="searchbar"
              placeholder="Search type of keywords"
            />
            <button className="btn searchIcon">
              <img className="icon" src={searchIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="two">
          <div className="flex">
            <button className="btn helpIcon">
              <img className="icon" src={helpIcon} alt="" />
            </button>
            <button className="btn notiIcon">
              <img className="icon" src={notiIcon} alt="" />
            </button>
          </div>
          <div className="acc">
            <img className="accountIcon" src={accountIcon} alt="" />
            <p>Your Account</p>
            <button className="downbutton">
              <img className="downIcon" src={downIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
