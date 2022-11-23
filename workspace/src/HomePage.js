import React from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

export default function HomePage() {
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
