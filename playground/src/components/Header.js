import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <>
      <div className="header">
        <p>Count : {props.count}</p>
        <p>Device name : {props.title === "aa01" ? "Device 1" : "Device 2"}</p>
      </div>
    </>
  );
}

export default Header;
