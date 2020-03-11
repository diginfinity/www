/** @format */

import React from "react";
import "./styles.scss";

const Approach = () => (
  <div id="approach" className="approach">
    <div className="approach--title">
      <p>The digital agency with a human approach</p>
      <h1>
        Crafting digital <br /> products to help <br /> startups grow.
      </h1>
    </div>
    <div className="approach--flex">
      <div className="approach--flex--img">
        {/* <img src={bg_img1} alt="bg_img" width="auto" height="400" /> */}
      </div>
      <div className="approach--flex--note">
        <div className="approach--flex--note--1">
          <h1>We believe that our works can contribute to a better world.</h1>
          <h6>+ Website and mobile app development</h6>
          <h6>+ Dedicating teams and people</h6>
          <h6>+ User experience and design</h6>
        </div>
        <div className="approach--flex--note--2" />
      </div>
    </div>
  </div>
);

export default Approach;
