import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import dataa from "./SampleData2.json";
import "./TotalCount.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import gradient from "chartjs-plugin-gradient";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  gradient,
  Legend
);

export default function TotalCount() {
  const [chart, setChart] = useState({});
  const [data, setData] = useState({ count: 0, data: [] });
  const [count, setCount] = useState(0);
  const [voltage, setVoltage] = useState([]);
  const [current, setCurrent] = useState([]);
  const [ttime, setTtime] = useState([]);
  const [ptime, setPtime] = useState([]);
  let [sum] = useState([]);
  let [avgsum] = useState([]);
  let [res, setRes] = useState(0);
  let [avgres, setAvgRes] = useState(0);
  let result = 0;

  let updatedValue = {};

  async function fetchData() {
    // let response = await axios(`http://172.104.207.9:8000/device/type/aa01/`);
    if (data.count !== dataa.count) {
      setData(dataa);
      setCount(dataa.count);
    }
    return dataa;
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  if (!data) return null;

  function Setting() {
    console.log("Setting");
    if (count !== ttime.length) {
      data.data.map((x) => {
        return (
          setVoltage((oldArray) => [...oldArray, x.vt1]),
          setCurrent((oldArray) => {
            let iCrt = parseInt(x.crt, 10);
            return [...oldArray, iCrt];
          }),
          setTtime((oldArray) => {
            let itime = parseInt(x.dts, 10);
            var d = new Date(itime);
            return [...oldArray, d];
          })
        );
      });
    }
  }

  function CalPwr() {
    let k = 0;
    let l = 0;
    for (let i = 0; i < ttime.length; i = i + k) {
      k = 0;
      sum[l] = 0;
      for (let j = i; j < ttime.length; j++) {
        if (
          ttime[i].getFullYear() === ttime[j].getFullYear() &&
          ttime[i].getMonth() === ttime[j].getMonth() &&
          ttime[i].getDate() === ttime[j].getDate() &&
          ttime[i].getHours() === ttime[j].getHours()
        ) {
          if (j > 0) {
            let temp =
              ttime[j].getHours() +
              ttime[j].getMinutes() / 60 -
              (ttime[j - 1].getHours() + ttime[j - 1].getMinutes() / 60);

            sum[l] = sum[l] + voltage[j - 1] * current[j - 1] * temp;
            console.log(
              "Time 1 : ",
              ttime[j - 1],
              "\nTime 2 : ",
              ttime[j],
              // ttime[j].getHours() + ttime[j].getMinutes() / 60,
              // ttime[j - 1].getHours() + ttime[j - 1].getMinutes() / 60,
              "\n Δt = ",
              temp,
              "Voltage = ",
              voltage[j - 1],
              "Current = ",
              current[j - 1],
              "Energy Consumed till Now = ",
              sum[l]
            );
          }
          k++;
        }
      }
      avgsum[l] = sum[l] / k;
      sum[l] = Math.round(sum[l]);
      l++;
      console.log("--------------------------------------------------------");
    }
    console.log(sum, voltage, current);
  }

  function UpdateChart() {
    ttime.map((x) => {
      return setPtime((oldArray) => {
        var d = new Date(x),
          dformat =
            [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
            " " +
            [d.getHours()].join(":");
        return [...oldArray, dformat];
      });
    });

    sum.forEach((element) => {
      result += element;
    });

    setRes(Math.round(result));

    result = 0;

    avgsum.forEach((element) => {
      result += element;
    });

    setAvgRes(Math.round(result));

    const ztime = Array.from(new Set(ptime));

    updatedValue = {
      csum: sum,
      ctime: ztime,
    };
    setChart((chart) => ({
      ...chart,
      ...updatedValue,
    }));

    // console.log(chart.ctime);
  }

  var dataaa = {
    labels: chart?.ctime?.map((x) => x),
    datasets: [
      {
        label: "",
        data: chart?.csum?.map((x) => x),
        gradient: {
          backgroundColor: {
            axis: "y",
            colors: {
              0: "#a1ffff",
              380: "#edbaff",
            },
          },
        },
      },
    ],
  };

  var avgdataaa = {
    labels: chart?.ctime?.map((x) => x),
    datasets: [
      {
        label: "",
        data: avgsum?.map((x) => x),
        gradient: {
          backgroundColor: {
            axis: "y",
            colors: {
              0: "#a1ffff",
              380: "#edbaff",
            },
          },
        },
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        display: true,
      },

      y: {
        display: true,
      },
    },
  };

  return (
    <>
      <div className="tbutton">
        <button className="tcbutton" onClick={Setting}>
          Setting
        </button>
        <button className="tcbutton" onClick={CalPwr}>
          Calculate Power
        </button>
        <button className="tcbutton" onClick={UpdateChart}>
          Update Chart
        </button>
      </div>
      <div className="tcpower">
        Total Power Consumed :{" "}
        <b>
          <i>{res}</i>
        </b>{" "}
        KiloWatt
      </div>
      <div className="tcbar">
        <Bar data={dataaa} options={options} />
      </div>
      <div className="tcpower tcavg">
        Total Avgerage Power Consumed :{" "}
        <b>
          <i>{avgres}</i>
        </b>{" "}
        KiloWatt
      </div>
      <div className="tcbar">
        <Bar data={avgdataaa} options={options} />
      </div>
    </>
  );
}
