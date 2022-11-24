import React from "react";
import Dashboard from "./Dashboard";
import SideBar from "./SideBar";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Downloaded from "./pages/Downloaded";
import Recent from "./pages/Recent";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import ShowMore from "./pages/ShowMore2";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      {location.pathname === "/Login" ||
      location.pathname === "/SignUp" ? null : (
        <Dashboard />
      )}
      {location.pathname === "/Login" ||
      location.pathname === "/SignUp" ? null : (
        <SideBar />
      )}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/device1" element={<Home />} />
          <Route path="/Home/device2" element={<Home deviceName="bb02" />} />
          <Route path="/Home/showMore" element={<ShowMore />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Downloaded" element={<Downloaded />} />
          <Route path="/Recent" element={<Recent />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
