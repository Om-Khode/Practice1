import React from "react";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Downloaded from "./pages/Downloaded";
import Recent from "./pages/Recent";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import ShowMore from "./pages/ShowMore";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
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
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
