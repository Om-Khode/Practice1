import React from "react";
import Dashboard from "./components/Dashboard";
import Home from "./components/pages/Home";
import SideBar from "./components/SideBar";

export default function HomePage() {
  return (
    <>
      <Dashboard />
      <SideBar />
      <Home />
    </>
  );
}
