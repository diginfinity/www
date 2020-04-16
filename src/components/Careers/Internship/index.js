/** @format */

import React from "react";
import "./styles.scss";

const Internship = () => (
  <section id="internship">
    <div className="uk-container uk-container-large">
      <div className="uk-padding-large">
        <div className="uk-width-1 uk-flex uk-flex-wrap uk-flex-between">
          <div className="uk-width-1 internship-container uk-width-1-2@s uk-card">
            <p className="uk-text-large">Internship program</p>
            <h3 className="uk-heading-medium">
              College graduate or a student?
            </h3>
          </div>
          <div className="uk-width-1 uk-width-1-2@s uk-flex uk-flex-right uk-flex-middle uk-card">
            <button className="uk-button">Submit application</button>
          </div>
        </div>
        <hr />
        <div className="uk-width-1">
          <p className="uk-text-large">
            If you are a college graduate or a student who is passionate about
            application development and wants to gain work experience at Digital
            Infinity, please email us at hr@digitalinfinity.rs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Internship;
