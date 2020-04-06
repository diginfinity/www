/** @format */

import React from "react";
import "./styles.scss";
import DI_LOGO from "../../assets/logos/di-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--container">
        <div className="footer--container--wrapper">
          <div className="footer--container--wrapper--grid">
            <div className="logo">
              <img src={DI_LOGO} alt="Digital Infinity Logo" />
              <br />
              <h4>
                digital <br /> infinity.
              </h4>
            </div>
            <div className="grid-el">
              <p className="city">Novi Sad</p>
              <p>Bulevar Kralja Petra I 89,</p>
              <p>21000 Novi Sad</p>
              <p>PAK code: 401245</p>
              <p>Serbia</p>
            </div>
            <div className="grid-el">
              <p className="city">Interested in working with us?</p>
              <p className="digital-email">ask@digitalinfinity.rs</p>
            </div>
            <div className="hide-on-small-devices" />
            <div className="grid-el">
              <p className="city">Veternik</p>
              <p>Novosadski put 74,</p>
              <p>21203 Veternik (Novi Sad)</p>
              <p>PAK code: 407860</p>
              <p>Serbia</p>
            </div>
            <div className="grid-el">
              <p className="city">HR opportunities and careers</p>
              <p>We are hiring!</p>
              <p className="digital-email">hr@digitalinfinity.rs</p>
            </div>
          </div>
          <div className="footer--container--wrapper--flex">
            <div className="flex--item">
              <p className="info">Company info</p>
              <p className="bold">DIGITAL INFINITY DOO Novi Sad</p>
              <p>Bulevar Kralja Petra I 89, 21000 Novi Sad</p>
            </div>
            <div className="flex--item">
              <p>Tax no.: 110217311</p>
              <p>Reg. no: 21318507</p>
            </div>
            <div className="flex--item">
              <p>Phone: +381 21 300 2956</p>
              <p>Email: office@digitalinfinity.rs</p>
            </div>
          </div>
        </div>
        <div className="footer--rights">
          <p>@2017 - 2020 Digital Infinity</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
