import axios from "axios";
import React from "react";
import Card from "./Card";
import Header from "./Header";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import SampleData from "./sampleValues.json";

export default function Cards(props) {
  // const [count, setCount] = useState();
  const [loaded, setLoaded] = useState(false);
  const [num, setNum] = useState(5);
  let response;
  const [buttonText, setButtonText] = useState("More");
  const [data, setData] = useState({ count: 0, data: [] });

  function handleClick() {
    // setLoaded(false);
    buttonText === "More" ? setNum("") : setNum(5);
    // fetchData(num);
    buttonText === "More" ? setButtonText("Less") : setButtonText("More");
  }

  async function fetchData(num) {
    // setLoaded(false);
    // response = SampleData;
    let response = await axios(
      // `http://localhost:8000/device/type/${props.type}/${num}`
      `http://172.104.207.9:8000/device/type/${props.type}/${num}`
    );
    if (data.count !== response.data.count) {
      setData(response.data);
    }
    // setLoaded(true);
    return response.data;
  }

  useEffect(() => {
    // alert("page loaded");
    setLoaded(false);
    fetchData(num);
    setLoaded(true);
  }, []);

  // useEffect(() => {
  //   setLoaded(false);
  //   fetchData(num);
  //   setLoaded(true);
  // }, [num]);

  // call fetch data function after every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every 5 seconds!");
      fetchData(num);
    }, 5000);
    return () => clearInterval(interval);
  }, [num]);

  // useEffect(() => {
  //   alert("Hello Guys!");
  // },[]);

  if (!data) return null;

  // console.log(data);

  return (
    <>
      <Header count={data.count} title={props.type} />
      <button className="refresh" onClick={() => fetchData(num)}>
        Refresh
      </button>
      {!loaded && <Spinner />}
      {loaded && (
        <>
          <div className="cards">
            <table className="card">
              <thead>
                <tr>
                  {props.titles.map((element, index) => {
                    return (
                      <th key={index}>
                        <h6 className="card-title">{element}</h6>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {data.data.map((element, index) => {
                  return <Card key={index} data={element} i={index} />;
                })}
              </tbody>
            </table>
          </div>
          <button className="refresh" onClick={handleClick}>
            <p>Show {buttonText}</p>
          </button>
        </>
      )}
    </>
  );
}
