import React from "react";
import axios from "axios";
import "./Home.css";
import BigCard from "./BigCard";
import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Battery from "../Battery";
import { motion } from "framer-motion";

const bigTitles1 = [
  "Voltage 1",
  "Power",
  "Voltage 2",
  "Temperature 1",
  "Current",
  "Temperature 2",
  "Capacity",
  "SOC",
];

const bigTitles2 = ["Voltage", "Temperature", "Current", "SOC"];

const smallTitles = ["UV", "OV", "OCC", "OCD"];

export default function Home(props) {
  const [data, setData] = useState({ count: 0, data: [] });

  async function fetchData() {
    let response = await axios(
      `http://172.104.207.9:8000/device/type/${props.deviceName}/1`
    );
    // if (data.count !== response.data.count) {
    setData(response.data);
    // }
    return response.data;
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [props.deviceName]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [props.deviceName]);

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div>
        <div className="allDevice">
          <div className="exiDevice">
            <ul>
              <CustomLink to="/Home">Device 1</CustomLink>
              <CustomLink to="/Home/device2">Device 2</CustomLink>
            </ul>
          </div>
          <div className="addDevice">
            <button className="add homeBtn">➕ Add Device</button>
          </div>
        </div>
        <div className="grid-container-bg">
          {(() => {
            switch (props.deviceName) {
              case "aa01":
                return (
                  <>
                    {bigTitles1.map((element1, index) => {
                      return (
                        <div key={index} className="child-bg">
                          {data.data.map((element, index) => {
                            return (
                              <BigCard
                                key={index}
                                data={element}
                                alt={element1}
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                  </>
                );
              case "bb02":
                return (
                  <>
                    {bigTitles2.map((element1, index) => {
                      return (
                        <div key={index} className="child-bg">
                          {data.data.map((element, index) => {
                            return (
                              <BigCard
                                key={index}
                                data={element}
                                alt={element1}
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                  </>
                );
              default:
                return null;
            }
          })()}
        </div>
        <div
          className={props.deviceName === "aa01" ? "middle" : "middle type2"}
        >
          <Battery />
          <div className="grid-container-sm">
            {smallTitles.map((element1, index) => {
              return (
                <div key={index} className="child-sm">
                  {data.data.map((element, index) => {
                    return (
                      <SmallCard key={index} data={element} alt={element1} />
                    );
                  })}
                </div>
              );
            })}
          </div>
          <button className="showMore">
            <Link to="/Home/showMore">Show More</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "selected homeBtn" : "homeBtn"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

Home.defaultProps = {
  deviceName: "aa01",
};
