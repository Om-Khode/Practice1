import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";

import Cards from "./components/Cards";

const titles_aa01 = [
  "S.no",
  "DTS",
  "UID",
  "ID",
  "VT1",
  "VT2",
  "CRT",
  "TP1",
  "TP2",
  "CAP",
  "TRM",
  "SOC",
  "TQ1",
  "TQ2",
  "UV",
  "OV",
  "OCC",
  "OCD",
  "OTC",
  "OTD",
];

const titles_bb02 = [
  "S.no",
  "DTS",
  "UID",
  "ID",
  "VT1",
  "CRT",
  "TP1",
  "SOC",
  "UV",
  "OV",
  "OCC",
  "OCD",
  "OTC",
  "OTD",
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Cards titles={titles_aa01} type="aa01" />} />
            <Route
              exact
              path="device2"
              element={<Cards titles={titles_bb02} type="bb02" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
