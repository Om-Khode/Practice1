import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Battery.css";
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

export default function Battery() {
  const [chart, setChart] = useState({});

  const [data, setData] = useState({ count: 0, data: [] });

  async function fetchData() {
    let response = await axios(`http://172.104.207.9:8000/device/type/aa01/1`);
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

  // console.log(data.data[0].soc);
  var dataa = {
    labels: chart?.data?.map((x) => "Hello"),
    datasets: [
      {
        label: "",
        data: chart?.data?.map((x) => x.soc),
        gradient: {
          backgroundColor: {
            axis: "y",
            colors: {
              0: "#a1ffff",
              100: "#edbaff",
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
        display: false,
      },

      y: {
        display: false,
        beginAtZero: true,
        max: 100,
      },
    },
    events: [],
  };

  return (
    <>
      <div className="battery">
        <div className="battery-top"></div>
        <div className="battery-body"></div>
        <div className="vector-bar">
          <div className="vector"></div>
          <div className="vector"></div>
          <div className="vector"></div>
          <div className="vector"></div>
          <div className="vector"></div>
          <div className="vector"></div>
        </div>
        <div className="battery-bar">
          <Bar data={dataa} options={options} />
        </div>
      </div>
    </>
  );
}
