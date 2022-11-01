import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import dataa from "./SampleData.json";

export default function TotalCount() {
  const [data, setData] = useState({ count: 0, data: [] });
  const [voltage, setVoltage] = useState([]);
  const [current, setCurrent] = useState([]);
  const [ttime, setTtime] = useState([]);
  let [sum, setSum] = useState([]);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    if (count !== voltage.length) {
      data.data.map((x) => {
        return (
          setVoltage((oldArray) => [...oldArray, x.vt1]),
          setCurrent((oldArray) => [...oldArray, x.crt]),
          setTtime((oldArray) => {
            let stime = x.dts;
            let itime = parseInt(stime, 10);
            var d = new Date(itime);
            // dformat =
            //   [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
            //   " " +
            //   [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
            return [...oldArray, d];
          })
        );
      });
    }

    // eslint-disable-next-line
  }, [data.data, count]);

  console.log(ttime);

  // time.forEach((element) => {
  //   console.log(
  //     element.getFullYear(),
  //     element.getMonth(),
  //     element.getDate(),
  //     element.getHours()
  //   );
  // });

  useEffect(() => {
    let k = 0;
    let l = 0;

    return () => {
      for (let i = 0; i < 10; i = i + k) {
        k = 0;
        for (let j = i; j < 10; j++) {
          if (
            ttime[i].getFullYear() === ttime[j].getFullYear() &&
            ttime[i].getMonth() === ttime[j].getMonth() &&
            ttime[i].getDate() === ttime[j].getDate() &&
            ttime[i].getHours() === ttime[j].getHours()
          ) {
            sum[l] += voltage[j] * current[j];
            k++;
          }
          l++;
        }
      }
    };
  }, [ttime, sum]);

  if (!data) return null;

  // for (let i = 0; i < time.length - 1; i = i + k) {
  //   for (let j = i + 1; j < time.length; j++) {
  //     if (
  //       time[i].getFullYear === time[j].getFullYear &&
  //       time[i].getMonth === time[j].getMonth &&
  //       time[i].getDate === time[j].getDate &&
  //       time[i].getHours === time[j].getHours
  //     ) {
  //       // let res = 0;
  //       // setSum((oldArray) => {
  //       //   res += voltage[i] * current[i] + voltage[j] * current[j];
  //       k++;
  //       //   return [...oldArray, res];
  //       // });
  //       console.log("Hello");
  //     }
  //   }
  // }

  // for (var i = 0; i < voltage.length; i++) {
  //   sum += voltage[i] * current[i];
  // }

  // console.log(time);

  // var d = new Date(time[0][0]),
  //   dformat =
  //     [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
  //     " " +
  //     [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

  ttime.forEach((element) => {
    console.log(element);
  });

  return (
    <>
      {/* <div>{voltage}</div>
      <br />
      <div>{current}</div> */}
      <div>{sum}</div>
    </>
  );
}
