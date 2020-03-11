/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const JoinUs = ({ grey }) => {
  return (
    <div className={grey ? "joinus light-grey" : "joinus"}>
      <div className="joinus--container">
        <p>Careers</p>
        <div className="joinus--container--flex">
          <h1>Join our team.</h1>
          <Link to="/careers">
            <button>See opened positions</button>
          </Link>
        </div>
        <div className="joinus--container--text">
          <p>
            Digital Infinity is a development firm based in the beautiful city
            of Novi Sad (Serbia). <br /> We partner with some of the best US and
            European companies and help them build and <br /> scale their
            product and business ideas that positively shape the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
