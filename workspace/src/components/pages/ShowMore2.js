import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./ShowMore.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const ReactGridLayout = () => {
  const [layout, setlayout] = useState(null);
  const [widgetArray, setWidgetArray] = useState([
    { i: "widget1", x: 0, y: 0, w: 1, h: 1 },
    { i: "widget2", x: 1, y: 2, w: 1, h: 1 },
    { i: "widget3", x: 2, y: 4, w: 1, h: 1 },
  ]);

  const handleModify = (layout, layouts) => {
    const tempArray = widgetArray;
    setlayout(layouts);
    // eslint-disable-next-line
    layout?.map((position) => {
      tempArray[Number(position.i)].x = position.x;
      tempArray[Number(position.i)].y = position.y;
      tempArray[Number(position.i)].width = position.w;
      tempArray[Number(position.i)].height = position.h;
    });
    setWidgetArray(tempArray);
  };

  const handleAdd = () => {
    setWidgetArray([
      ...widgetArray,
      { i: "widget" + (widgetArray.length + 1), x: 0, y: 0, w: 2, h: 2 },
    ]);
  };

  const handleDelete = (key) => {
    const tempArray = widgetArray.slice();
    const index = tempArray.indexOf(tempArray.find((data) => data.i === key));
    tempArray.splice(index, 1);
    setWidgetArray(tempArray);
  };

  return (
    <div className="container">
      <button onClick={() => handleAdd()}>Add Widget</button>

      <ResponsiveReactGridLayout
        onLayoutChange={handleModify}
        verticalCompact={true}
        layout={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        preventCollision={false}
        cols={{ lg: 8, md: 8, sm: 4, xs: 2, xxs: 2 }}
        autoSize={true}
        margin={{
          lg: [20, 20],
          md: [20, 20],
          sm: [20, 20],
          xs: [20, 20],
          xxs: [20, 20],
        }}
      >
        {widgetArray?.map((widget, index) => {
          return (
            <div
              className="reactGridItem"
              key={index}
              data-grid={{
                x: widget?.x,
                y: widget?.y,
                w: widget?.w,
                h: widget?.h,
                i: widget.i,
                minW: 1,
                maxW: Infinity,
                minH: 1,
                maxH: Infinity,
                isDraggable: true,
                isResizable: true,
              }}
            >
              <button
                className="deleteButton"
                onClick={() => handleDelete(widget.i)}
              >
                x
              </button>
              <div>{widget.i}</div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default ReactGridLayout;
