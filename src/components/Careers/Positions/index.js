/** @format */

import React, { useState } from "react";
import "./styles.scss";

const Positions = props => {
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    location,
    who,
    type,
    workingHours,
    description
  } = props.position;

  return (
    <div className="position--container">
      <div className="position--container--flex">
        <div>
          <button onClick={() => setShowMore(!showMore)}>+</button>
          <h4>{title}</h4>
        </div>
        <button>Apply</button>
      </div>
      {showMore && (
        <div className="position--container--more-info">
          <div className="position--container--more-info--item">
            <p>Location:</p>
            <p>{location}</p>
          </div>
          <div className="position--container--more-info--item">
            <p>Who can apply:</p>
            <p>{who}</p>
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
      )}
    </div>
  );
};

export default Positions;
