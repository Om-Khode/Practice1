import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
