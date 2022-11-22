// import Dashboard from "./components/Dashboard";
// import SideBar from "./components/SideBar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
// import "./components/pages/Home.css";
// import AnimatedRoutes from "./components/AnimatedRoutes";

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
      <Routes>
        <Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
