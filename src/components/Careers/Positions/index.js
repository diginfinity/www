/** @format */

import React, { useState } from "react";
import "./styles.scss";

const Positions = props => {
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    location = "Novi Sad",
    short,
    type,
    workingHours,
    description
  } = props.position;
  return (
    <div className="position--container">
      <div className="position--container--flex">
        <div>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "-" : "+"}
          </button>
          <h4>{title}</h4>
        </div>
        <button>Apply</button>
      </div>
      {/* {showMore && ( */}
      <div
        className="position--container--more-info"
        style={{ height: `${showMore ? "310px" : "0"}` }}>
        <div className="position--container--more-info--item">
          <p>Location:</p>
          <p>{location}</p>
        </div>
        <div className="position--container--more-info--item">
          <p>Who can apply:</p>
          <p>{short}</p>
        </div>
        <div className="position--container--more-info--item">
          <p>Type:</p>
          <p>{type}</p>
        </div>
        <div className="position--container--more-info--item">
          <p>Working hours:</p>
          <p>{workingHours}</p>
        </div>
        <div className="position--container--more-info--description">
          <p>{description}</p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Positions;
