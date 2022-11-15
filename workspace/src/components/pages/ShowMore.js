import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "../GridStyle.css";
import "./ShowMore.css";
import Select from "react-select";
import LineChartBg from "../LineChartBg";
import { motion } from "framer-motion";

export default function ShowMore() {
  let [layout1, setLayout] = useState([]);

  const [defaultProps, setDefaultProps] = useState({
    isDraggable: false,
    isResizable: false,
    items: 5,
    rowHeight: 60,
    preventCollision: false,
    disabled: true,
    breakpoints: { lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 },
    // cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    cols: 12,
  });

  const [lock, setLock] = useState(false);

  const ReactGridLayout = WidthProvider(RGL);

  const addNewItem = (n) => {
    // if (layout1.some((item) => item.i === n)) {
    //   setLayout((current) => current.filter((item) => item.i !== n));
    //   return layout1;
    // } else {
    setLayout([
      ...layout1,
      {
        i: n,
        x: 0,
        y: 0,
        w: 5,
        h: 3,
      },
    ]);
    return layout1;
    // }
  };

  // const defaultProps = {
  //   isDraggable: false,
  //   isResizable: false,
  //   items: 5,
  //   rowHeight: 60,
  //   preventCollision: false,
  //   breakpoints: { lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 },
  //   // cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  //   cols: 12,
  // };

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
      label: "Temperature 2",
    },
    {
      value: 7,
      label: "SOC",
    },
  ];

  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
    addNewItem(selectedValue);
  };

  function LockTheGrid() {
    if (defaultProps.isDraggable === false) {
      console.log("12");
      setDefaultProps({
        ...defaultProps,
        isDraggable: true,
        isResizable: true,
      });
    } else {
      console.log("13");
      setDefaultProps({
        ...defaultProps,
        isDraggable: false,
        isResizable: false,
      });
    }
    console.log(defaultProps);
    return defaultProps;
  }

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
          <button onClick={() => LockTheGrid()}>Lock</button>
          <ReactGridLayout
            {...defaultProps}
            onDragStart={lock ? null : ""}
            onLayoutChange={() => setLayout(layout1)}
          >
            {console.log(defaultProps)}
            {selectedValue.some((x) => x === 1) && (
              <div key={1} data-grid={layout1[0]}>
                <LineChartBg val="vt1" />
                Voltage 1
              </div>
            )}
            {selectedValue.some((x) => x === 2) && (
              <div key={2} data-grid={layout1[0]}>
                <LineChartBg val="vt2" />
                Voltage 2
              </div>
            )}
            {selectedValue.some((x) => x === 3) && (
              <div key={3} data-grid={layout1[0]}>
                <LineChartBg val="cap" />
                Capacity
              </div>
            )}
            {selectedValue.some((x) => x === 4) && (
              <div key={4} data-grid={layout1[0]}>
                <LineChartBg val="trm" />
                Power
              </div>
            )}
            {selectedValue.some((x) => x === 5) && (
              <div key={5} data-grid={layout1[0]}>
                <LineChartBg val="tp1" />
                Temperature 1
              </div>
            )}
            {selectedValue.some((x) => x === 6) && (
              <div key={6} data-grid={layout1[0]}>
                <LineChartBg val="tp2" />
                Temperature 2
              </div>
            )}
            {selectedValue.some((x) => x === 7) && (
              <div key={7} data-grid={layout1[0]}>
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
