import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import React from "react";
import "./components/pages/Home.css";
// eslint-disable-next-line
import AnimatedRoutes from "./components/AnimatedRoutes";
// import GridLayout1 from "./components/GridLayout1";
import GridLayout2 from "./components/GridLayout2";

function App() {
  return (
    <>
      {/* <div className="dash">
        <Dashboard />
      </div>
      <SideBar />
      <div className="container">
        <AnimatedRoutes />
      </div> */}
      {/* <GridLayout1 /> */}
      <GridLayout2 />
    </>
  );
}

export default App;
