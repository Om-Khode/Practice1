import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LineChart.css";
import dataaa from "./SampleData2.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartBg = (props) => {
  const [chart, setChart] = useState({});

  const [data, setData] = useState({ count: 0, data: [] });

  var options = {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0,
      },
    },

    plugins: { legend: { display: false } },
    scales: {
      x: {
        display: true,
        grid: {
          color: "transparent",
          borderColor: "white",
        },
      },
      y: {
        display: false,
        grid: {
          color: "transparent",
          borderColor: "white",
        },
        beginAtZero: true,
        ticks: {
          // stepSize: 100,
        },
      },
    },
    pointRadius: 2,
    // events: [],
  };

  // async function fetchData() {
  //   // let response = await axios(`http://172.104.207.9:8000/device/type/aa01`);
  //   if (data.count !== dataa.count) {
  //     setData(dataaa);
  //     setChart(dataaa);
  //   }
  //   return dataaa;
  // }

  async function fetchData() {
    let response = await axios(`http://172.104.207.9:8000/device/type/aa01/24`);
    if (data.count !== response.data.count) {
      setData(response.data);
      setChart(response.data);
    }
    return response.data;
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

  // eslint-disable-next-line
  Number.prototype.padLeft = function (base, chr) {
    var len = String(base || 10).length - String(this).length + 1;
    return len > 0 ? new Array(len).join(chr || "0") + this : this;
  };

  var dataa = {
    labels: chart?.data?.map((x) => {
      let itime = parseInt(x.dts2, 10);
      var d = new Date(itime),
        dformat = [d.getHours().padLeft(), d.getMinutes().padLeft()].join(":");
      return dformat;
    }),
    datasets: [
      {
        label: "",
        data: chart?.data?.map((x) => {
          switch (props.val) {
            case "vt1":
              return x.vt1;
            case "vt2":
              return x.vt2;
            case "crt":
              return x.crt;
            case "cap":
              return x.cap;
            case "trm":
              return x.trm;
            case "tp1":
              return x.tp1;
            case "tp2":
              return x.tp2;
            case "soc":
              return x.soc;
            default:
              return null;
          }
        }),
        gradient: {
          borderColor: {
            axis: "x",
            colors: {
              0: "#edbaff",
              100: "#a1ffff",
            },
          },
        },
      },
    ],
  };

  return (
    <div className="LineBg">
      <Line data={dataa} height={400} options={options} />
    </div>
  );
};

export default LineChartBg;
