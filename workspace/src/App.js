import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import Home from "./components/pages/Home";
import Bookmark from "./components/pages/Bookmark";
import Downloaded from "./components/pages/Downloaded";
import Recent from "./components/pages/Recent";
import Setting from "./components/pages/Setting";
import Support from "./components/pages/Support";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./components/pages/Home.css";
import TotalCount from "./components/TotalCount";

function App() {
  return (
    <>
      {/* <div className="dash">
        <Dashboard />
      </div>
      <SideBar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/device1" element={<Home />} />
          <Route path="/Home/device2" element={<Home deviceName="bb02" />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Downloaded" element={<Downloaded />} />
          <Route path="/Recent" element={<Recent />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </div> */}
      <TotalCount />
    </>
  );
}

export default App;