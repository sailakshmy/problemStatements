import React from "react";

const Details = ({ details }) => {
  return (
    <div>
      <h1>Details Component </h1>
      {details.map((detail) => {
        return (
          <div class="row">
            <div className="card column">
              <h2 className="card-title"> {detail.name} </h2>
              <p className="card-body">{detail.url}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Details;
