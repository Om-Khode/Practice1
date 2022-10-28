import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {
  return (
    <>
      {/* {label}{" "} */}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className={`checkbox ${props.val === true ? "checked" : ""} `}
          disabled
          name={props}
          id={props}
        />
        <label className="label" htmlFor={props}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;
