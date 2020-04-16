/** @format */

import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles.scss";

const JoinUs = ({ grey }) => {
  return (
    <section id="joinus" className={grey ? "joinus light-grey" : "joinus"}>
      <div className="uk-container uk-container-large">
        <div className="uk-padding-large">
          <div className="uk-width-1 uk-flex uk-flex-wrap uk-flex-between">
            <div className="uk-width-1 flex-1 uk-width-1-2@s uk-card">
              <p className="uk-text-large">Careers</p>
              <h2 className="uk-heading-medium">Join our team.</h2>
            </div>
            <div className="uk-width-1 flex-1 uk-width-1-2@s uk-card uk-flex uk-flex-right uk-flex-bottom">
              <Link smooth to="/careers#open-positions">
                <button className="uk-button">See opened positions</button>
              </Link>
            </div>
          </div>
          <hr />
          <div className="uk-card">
            <p className="uk-text-large">
              Digital Infinity is a development firm based in the beautiful city
              of Novi Sad (Serbia). <br />
              We partner with some of the best US and European companies and
              help them build and <br />
              scale their product and business ideas that positively shape the
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
