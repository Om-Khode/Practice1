import React from "react";
import "./Card.css";

function Card(props) {
  const {
    data: {
      dts,
      uid,
      id,
      vt1,
      vt2,
      crt,
      tp1,
      tp2,
      cap,
      trm,
      soc,
      tq1,
      tq2,
      uv,
      ov,
      occ,
      ocd,
      otc,
      otd,
    },
  } = props;

  return (
    <tr>
      <td>
        <p className="card-text">{props.i + 1}</p>
      </td>
      <td>
        <p className="card-text">{dts}</p>
      </td>
      <td>
        <p className="card-text">{uid}</p>
      </td>
      <td>
        <p className="card-text">{id}</p>
      </td>
      <td>
        <p className="card-text">{vt1}</p>
      </td>
      {vt2 ? (
        <td>
          <p className="card-text">{vt2}</p>
        </td>
      ) : null}
      <td>
        <p className="card-text">{crt}</p>
      </td>
      <td>
        <p className="card-text">{tp1}</p>
      </td>
      {tp2 ? (
        <td>
          <p className="card-text">{tp2}</p>
        </td>
      ) : null}
      {cap ? (
        <td>
          <p className="card-text">{cap}</p>
        </td>
      ) : null}
      {trm ? (
        <td>
          <p className="card-text">{trm}</p>
        </td>
      ) : null}
      <td>
        <p className="card-text">{soc}</p>
      </td>
      {tq1 ? (
        <td>
          <p className="card-text">{tq1}</p>
        </td>
      ) : null}
      {tq2 ? (
        <td>
          <p className="card-text">{tq2}</p>
        </td>
      ) : null}
      <td>
        <p className="card-text">{`${uv}`}</p>
      </td>
      <td>
        <p className="card-text">{`${ov}`}</p>
      </td>
      <td>
        <p className="card-text">{`${occ}`}</p>
      </td>
      <td>
        <p className="card-text">{`${ocd}`}</p>
      </td>
      <td>
        <p className="card-text">{`${otc}`}</p>
      </td>
      <td>
        <p className="card-text">{`${otd}`}</p>
      </td>
    </tr>
  );
}

export default Card;
