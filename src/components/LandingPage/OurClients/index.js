/** @format */

import React from "react";
import "./styles.scss";

import codelab from "../../../assets/logos/codelab.svg";
import perkins from "../../../assets/logos/perkins.svg";
import rentbits from "../../../assets/logos/rentbits.svg";

const Clients = () => (
  <div id="clients" className="clients">
    <div className="clients--wrapper">
      <div className="clients--wrapper--1">
        <h4>Our clients</h4>
        <h1>Some friends we have made while working together.</h1>
      </div>
      <div className="clients--wrapper--2">
        <p className="uk-text-capitalise">
          Our clients describe us as product team which splits between creative
          strategies and digital products, delivering strong messages and visual
          experience using latest technologies.
        </p>
        <div className="logo-holder">
          <img src={codelab} alt="codelab_logo" />
          <img src={perkins} alt="perkins_logo" />
          <img src={rentbits} alt="rentbits_logo" />
          {/* </div>
        <div className="logo-holder"> */}
          <img src={codelab} alt="codelab_logo" />
          <img src={perkins} alt="perkins_logo" />
          <img src={rentbits} alt="rentbits_logo" />
        </div>
      </div>
    </div>
  </div>
);

export default Clients;
