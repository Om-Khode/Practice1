import React, { useState } from "react";
import "./ShowMore.css";
import Select from "react-select";
import backArrow from "../images/back-arrow.png";
import LineChartBg from "../LineChartBg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShowMore = () => {
  const customStyles = {
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#999999" : null,
        fontWeight: isFocused ? "500" : null,
        color: "black",
      };
    },
  };

  const data = [
    {
      value: 1,
      label: "Voltage 1",
    },
    {
      value: 2,
      label: "Voltage 2",
    },
    {
      value: 3,
      label: "Capacity",
    },
    {
      value: 4,
      label: "Power",
    },
    {
      value: 5,
      label: "Temperature 1",
    },
    {
      value: 6,
      label: "Temperature",
    },
    {
      value: 7,
      label: "SOC",
    },
  ];

  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div className="smLabel">
          <Link to="/Home">
            <img className="backarrow" src={backArrow} alt="" />
          </Link>
          <b>Device 1</b>
        </div>
      </div>

      <Select
        className="dropdown"
        styles={customStyles}
        width="100%"
        menuColor="red"
        placeholder="Select Option"
        value={data.filter((obj) => selectedValue.includes(obj.value))}
        options={data}
        onChange={handleChange}
        isMulti
        isClearable
      />

      <div>
        <div>
          {selectedValue.some((x) => x === 1) && (
            <div>
              <LineChartBg val="vt1" />
              Voltage 1
            </div>
          )}
        </div>
        <div>
          {selectedValue.some((x) => x === 2) && (
            <div>
              <LineChartBg val="vt2" />
              Voltage 2
            </div>
          )}
        </div>
        <div>
          {selectedValue.some((x) => x === 3) && (
            <div>
              <LineChartBg val="cap" />
              Capacity
            </div>
          )}
        </div>
        <div>
          {selectedValue.some((x) => x === 4) && (
            <div>
              <LineChartBg val="trm" />
              Power
            </div>
          )}
        </div>
        <div>
          {selectedValue.some((x) => x === 5) && (
            <div>
              <LineChartBg val="tp1" />
              Temperature 1
            </div>
          )}
        </div>
        <div>
          {selectedValue.some((x) => x === 6) && (
            <div>
              <LineChartBg val="tp2" />
              Temperature 2
            </div>
          )}
        </div>
        <div>
          {selectedValue.some((x) => x === 7) && (
            <div>
              <LineChartBg val="soc" />
              SOC
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ShowMore;
