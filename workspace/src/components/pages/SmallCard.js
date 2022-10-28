import React from "react";
import ToggleSwitch from "../ToggleSwitch";

function SmallCard(props) {
  const {
    data: { uv, ov, occ, ocd },
  } = props;

  return (
    <>
      <span className="card-text">
        <pre>{props.alt} : </pre>
      </span>
      {(() => {
        switch (props.alt) {
          case "UV":
            return (
              <span className="card-value sm">
                {/* {uv === true ? <p>True</p> : <p>False</p>} */}
                <ToggleSwitch val={uv} />
              </span>
            );
          case "OV":
            return (
              <>
                <span className="card-value sm">
                  {/* {ov === true ? <p>True</p> : <p>False</p>} */}
                  <ToggleSwitch val={ov} />
                </span>
              </>
            );
          case "OCC":
            return (
              <span className="card-value sm">
                {/* {occ === true ? <p>True</p> : <p>False</p>} */}
                <ToggleSwitch val={occ} />
              </span>
            );
          case "OCD":
            return (
              <span className="card-value sm">
                {/* {ocd === true ? <p>True</p> : <p>False</p>} */}
                <ToggleSwitch val={ocd} />
              </span>
            );
          default:
            return <span className="card-value sm">--</span>;
        }
      })()}
    </>
  );
}

export default SmallCard;
