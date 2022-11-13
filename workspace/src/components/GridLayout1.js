import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "./GridStyle.css";

export default function GridLayout1(props) {
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

  function addNewItem() {
    console.log(idCounter.count, "1");
    const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };
    console.log(layout, idCounter.count, "2");
    setLayout((oldArray) => [...oldArray, newItem]);
    console.log(layout, "3");
  }

  GridLayout1.defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 5,
    rowHeight: 30,
    preventCollision: false,
    cols: 12,
  };

  return (
    <>
      <button onClick={() => addNewItem()}>Add item</button>
      <ReactGridLayout
        {...props}
        // onLayoutChange={(layout) => setLayout({ layout })}
      >
        {layout !== []
          ? layout?.map((item) => (
              <div key={item.i} data-grid={item}>
                <span>{item.i}</span>
              </div>
            ))
          : null}
      </ReactGridLayout>
    </>
  );
}
