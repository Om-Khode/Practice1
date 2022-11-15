import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "./GridStyle.css";
import Select from "react-select";
import LineChartBg from "./LineChartBg";
import { motion } from "framer-motion";

export default function GridLayout2() {
  const [idCounter, setIdCounter] = useState({ count: 1 });

  function getId() {
    setIdCounter((prevIdCount) => {
      return {
        ...prevIdCount,
        count: prevIdCount.count + 1,
      };
    });
    return idCounter.count;
  }

  let [layout1, setLayout] = useState([]);

  const ReactGridLayout = WidthProvider(RGL);

  // const addNewItem = () => {
  //   const layout = layout1;
  //   const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };
  //   console.log("1");
  //   if (layout.layout.some((item) => item.x === 0 && item.y === 0)) {
  //     setLayout({
  //       layout: layout.layout
  //         .map((item) => {
  //           if (item.x === 0) {
  //             console.log("2");
  //             return { ...item, y: item.y++ };
  //           }
  //           console.log("3");

  //           return item;
  //         })
  //         .concat([newItem]),
  //     });
  //   } else {
  //     console.log("4");

  //     setLayout({ layout: layout.layout.concat([newItem]) });
  //   }
  //   console.log("5");
  // };

  // const addNewItem = (n) => {
  //   const newItem = { x: 0, y: 0, w: 3, h: 3, i: n };
  //   console.log("1", layout1, n);
  //   if (layout1.some((item) => item.x === 0 && item.y === 0)) {
  //     setLayout([
  //       ...layout1,
  //       layout1
  //         .map((item) => {
  //           if (item.x === 0) {
  //             console.log("2", layout1);
  //             return { ...item, y: item.y++ };
  //           }
  //           console.log("3", layout1);

  //           return item;
  //         })
  //         .concat([newItem]),
  //     ]);
  //   } else {
  //     console.log("4", layout1);

  //     setLayout([...layout1, newItem]);
  //   }
  //   console.log("5", layout1);
  // };

  // const removeSecond = () => {
  //   setFruits((current) => current.filter((fruit) => fruit.id !== 2));
  // };

  useEffect(() => {
    let lay = layout1;
    const interval = setInterval(() => {
      // console.log(lay);
      // addNewItem();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
        w: 2,
        h: 2,
      },
    ]);
    return layout1;
    // }
  };

  // console.log(layout1);

  const defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 5,
    rowHeight: 60,
    preventCollision: false,
    breakpoints: { lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 },
    // cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    cols: 12,
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

  function getIndex(num) {
    return layout1.findIndex((obj) => obj.i === num);
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
          <ReactGridLayout
            {...defaultProps}
            // onLayoutChange={(layout1) => setLayout(layout1)}
          >
            {/* {layout1?.layout?.map((item) => ( */}
            {/* {layout1?.map((item) => (
              <div key={item.i} className="trail" data-grid={item}>
                {console.log(item.i)}
                <span>{item.i}</span>
              </div>
            ))} */}
            {selectedValue.some((x) => x === 1) && (
              <div key={1} data-grid={layout1[0]}>
                {/* {console.log(getIndex(1))} */}
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
