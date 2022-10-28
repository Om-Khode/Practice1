import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LineChart.css";
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

const LineChart = (props) => {
  const [chart, setChart] = useState({});

  const [data, setData] = useState({ count: 0, data: [] });

  var options = {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.25,
      },
    },

    plugins: { legend: { display: false } },
    scales: {
      x: {
        display: false,
      },

      y: {
        display: false,
      },
    },
    pointRadius: 0,
    events: [],
  };

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

  var dataa = {
    labels: chart?.data?.map((x) => ""),
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
        borderColor: ["rgba(116, 223, 238, 1)", "rgba(209, 134, 244, 1)"],
      },
    ],
  };

  return (
    <div className="Line">
      <Line data={dataa} height={400} options={options} />
    </div>
  );
};

export default LineChart;
