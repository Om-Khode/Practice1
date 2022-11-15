import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import React from "react";
import "./components/pages/Home.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <div className="dash">
        <Dashboard />
      </div>
      <SideBar />
      <div className="container">
        <AnimatedRoutes />
      </div>
    </>
  );
}

export default App;
