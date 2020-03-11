/** @format */

import React from "react";
import "./styles.scss";

const Internship = () => {
  return (
    <div className="internship">
      <div className="internship--container">
        <div className="internship--container--flex">
          <div className="flex--item--1">
            <p>Internship program</p>
            <h1>
              College graduate or <br /> a student?
            </h1>
          </div>
          <div className="flex--item--2">
            <button>Submit application</button>
          </div>
        </div>
        <div className="internship--container--text">
          <p>
            If you are a college graduate or a student who is passionate about
            application development <br /> and wants to gain work experience at
            Digital Infinity, please email us at hr@digitalinfinity.rs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internship;
