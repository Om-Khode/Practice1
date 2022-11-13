import { useState, useEffect } from "react";
import axios from "axios";

export default function FetchDataFunc() {
  const [data, setData] = useState({ count: 0, data: [] });

  async function FetchData() {
    let response = await axios(`http://172.104.207.9:8000/device/type/aa01`);
    setData(response.data);
    return response.data;
  }

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      FetchData();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  if (!data) return null;

  return data;
}
