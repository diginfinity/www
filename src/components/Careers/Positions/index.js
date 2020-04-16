/** @format */

import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const Positions = (props) => {
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    location = "Novi Sad",
    short,
    type,
    workingHours,
    description,
  } = props.position;
  return (
    <div className="uk-card positions-container">
      <div className="uk-flex uk-flex-between uk-flex-middle">
        <div className="uk-flex uk-flex-middle">
          <button
            className="uk-button show-more"
            onClick={() => setShowMore(!showMore)}>
            {showMore ? <FontAwesomeIcon icon={faMinus} size='2x' /> : <FontAwesomeIcon icon={faPlus} size='2x' />}
          </button>
          <p className="uk-text-large position-title">{title}</p>
        </div>
        <div>
          <button className="uk-button position-apply">Apply</button>
        </div>
      </div>
      <div
        className="uk-container uk-container-medium position-more-info"
        style={{
          overflow: "hidden",
          transition: "all .5s",
          height: `${showMore ? "400px" : "0"}`,
        }}>
        <div>
          <p className="uk-text-large">
            <span className="uk-text-large uk-text-bold">Location:</span>{" "}
            {location}
          </p>
        </div>
        <div>
          <p className="uk-text-large">
            <span className="uk-text-large uk-text-bold">Who can apply:</span>{" "}
            {short}
          </p>
        </div>
        <div>
          <p className="uk-text-large">
            <span className="uk-text-large uk-text-bold">Type:</span> {type}
          </p>
        </div>
        <div>
          <p className="uk-text-large">
            <span className="uk-text-large uk-text-bold">Working hours:</span>{" "}
            {workingHours}
          </p>
        </div>
        <div>
          <p className="uk-text-large">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Positions;
