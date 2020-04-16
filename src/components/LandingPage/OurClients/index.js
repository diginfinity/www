/** @format */

import React from "react";
import "./styles.scss";

import codelab from "../../../assets/logos/codelab.svg";
import perkins from "../../../assets/logos/perkins.svg";
import rentbits from "../../../assets/logos/rentbits.svg";

const Clients = () => (
  <section id="clients">
    <div className="uk-container uk-container-large clients-container">
      <div className="uk-padding-large">
        <div className="uk-flex uk-flex-between uk-flex-wrap">
          <div className="uk-container uk-width-1-2@s our-clients">
            <h4 className="uk-heading-small">Our clients</h4>
            <h1 className="uk-heading-large">
              Some friends we have made while working together.
            </h1>
          </div>
          <div className="uk-card uk-width-1-2@s">
            <div className="uk-card uk-width-1">
              <p className="uk-text-break uk-text-large">
                Our clients describe us as product team which splits between
                creative strategies and digital products, delivering strong
                messages and visual experience using latest technologies.
              </p>
            </div>
            <div className="uk-width-1 uk-flex uk-flex-wrap uk-flex-around">
              <div className="uk-container partner-container">
                <img src={codelab} alt="codelab_logo" />
              </div>
              <div className="uk-container partner-container">
                <img src={perkins} alt="perkins_logo" />
              </div>
              <div className="uk-container partner-container">
                <img src={rentbits} alt="rentbits_logo" />
              </div>
              <div className="uk-container partner-container">
                <img src={codelab} alt="codelab_logo" />
              </div>
              <div className="uk-container partner-container">
                <img src={perkins} alt="perkins_logo" />
              </div>
              <div className="uk-container partner-container">
                <img src={rentbits} alt="rentbits_logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Clients;
