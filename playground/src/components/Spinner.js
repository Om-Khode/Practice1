import React from "react";
import loading from "./loading.gif";
import "./Card.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <img className="my-3" src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
