import React from "react";
import "./Home.css";
import LineChart from "../LineChart";

function BigCard(props) {
  const {
    data: { vt1, vt2, crt, tp1, tp2, trm, cap, soc },
  } = props;

  return (
    <>
      <span style={{ fontFamily: "Times New Roman" }} className="card-text">
        <pre>{props.alt} : </pre>
      </span>
      {(() => {
        switch (props.alt) {
          case "Voltage":
            return (
              <>
                <span className="card-value">{vt1 ? vt1 : "--"}</span>
                <LineChart val="vt1" />
              </>
            );
          case "Voltage 1":
            return (
              <>
                <span className="card-value">{vt1 ? vt1 : "--"}</span>
                <LineChart val="vt1" />
              </>
            );
          case "Voltage 2":
            return (
              <>
                <span className="card-value">{vt2 ? vt2 : "--"}</span>
                <LineChart val="vt2" />
              </>
            );
          case "Current":
            return (
              <>
                <span className="card-value">{crt ? crt : "--"}</span>
                <LineChart val="crt" />
              </>
            );
          case "Capacity":
            return (
              <>
                <span className="card-value">{cap ? cap : "--"}</span>
                <LineChart val="cap" />
              </>
            );
          case "Power":
            return (
              <>
                <span className="card-value">{trm ? trm : "--"}</span>
                <LineChart val="trm" />
              </>
            );
          case "Temperature":
            return (
              <>
                <span className="card-value">{tp1 ? tp1 : "--"}</span>
                <LineChart val="tp1" />
              </>
            );
          case "Temperature 1":
            return (
              <>
                <span className="card-value">{tp1 ? tp1 : "--"}</span>
                <LineChart val="tp1" />
              </>
            );
          case "Temperature 2":
            return (
              <>
                <span className="card-value">{tp2 ? tp2 : "--"}</span>
                <LineChart val="tp2" />
              </>
            );
          case "SOC":
            return (
              <>
                <span className="card-value">{soc ? soc : "--"}</span>

                <LineChart val="soc" />
              </>
            );
          default:
            return <span className="card-value">--</span>;
        }
      })()}
    </>
  );
}

export default BigCard;
