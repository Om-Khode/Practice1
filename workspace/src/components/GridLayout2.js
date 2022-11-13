import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "./GridStyle.css";
import Select from "react-select";
import LineChartBg from "./LineChartBg";
import { motion } from "framer-motion";

export default function GridLayout2(props) {
  const [idCounter, setIdCounter] = useState({ count: 0 });

  function getId() {
    setIdCounter((prevIdCount) => {
      return {
        ...prevIdCount,
        count: prevIdCount.count + 1,
      };
    });
    return idCounter.count;
  }

  let [layout, setLayout] = useState([]);

  const ReactGridLayout = WidthProvider(RGL);

  //   function addNewItem() {
  //     console.log(idCounter.count, "1");
  //     const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };
  //     console.log(layout, idCounter.count, "2");
  //     setLayout((oldArray) => [...oldArray, newItem]);
  //     console.log(layout, "3");
  //   }

  GridLayout2.defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 5,
    rowHeight: 10,
    preventCollision: false,
    cols: 5,
  };

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
    console.log(e);
    const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };
    console.log(layout, idCounter.count, "2");
    setLayout((oldArray) => [...oldArray, newItem]);
    console.log(layout, "3");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
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
          <ReactGridLayout
            {...props}
            // onLayoutChange={(layout) => setLayout( layout )}
          >
            {selectedValue.some((x) => x === 1) && (
              <div key={1}>
                <LineChartBg val="vt1" />
                Voltage 1
              </div>
            )}
            {selectedValue.some((x) => x === 2) && (
              <div key={2}>
                <LineChartBg val="vt2" />
                Voltage 2
              </div>
            )}
            {selectedValue.some((x) => x === 3) && (
              <div key={3}>
                <LineChartBg val="cap" />
                Capacity
              </div>
            )}
            {selectedValue.some((x) => x === 4) && (
              <div key={4}>
                <LineChartBg val="trm" />
                Power
              </div>
            )}
            {selectedValue.some((x) => x === 5) && (
              <div key={5}>
                <LineChartBg val="tp1" />
                Temperature 1
              </div>
            )}
            {selectedValue.some((x) => x === 6) && (
              <div key={6}>
                <LineChartBg val="tp2" />
                Temperature 2
              </div>
            )}
            {selectedValue.some((x) => x === 7) && (
              <div key={7}>
                <LineChartBg val="soc" />
                SOC
              </div>
            )}
          </ReactGridLayout>
        </div>
      </motion.div>
    </>
  );
}
