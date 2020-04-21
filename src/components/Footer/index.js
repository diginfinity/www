/** @format */

import React from "react";
import "./styles.scss";
import DI_LOGO from "../../assets/logos/di-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="uk-container uk-container-large footer-container">
        <div className="uk-padding-large uk-padding-remove-bottom">
        <div className="uk-container uk-flex uk-flex-between uk-flex-wrap">
          <div className="uk-card uk-margin-top logo-container uk-width-1-4@m">
            <img
              width="50"
              height="50"
              src={DI_LOGO}
              alt="Digital Infinity Logo"
            />
            <h4 className="digital_text">
              digital <br /> infinity.
            </h4>
          </div>
          <div className="uk-flex uk-width-1-4@m">
            <div className="flex-responsive">
              <div className="uk-card uk-margin-top footer-card">
                <h5>Novi Sad</h5>
                <p className="uk-text-large">Bulevar Kralja Petra I 89,</p>
                <p className="uk-text-large">PAK code: 401245</p>
                <p className="uk-text-large">Serbia</p>
              </div>
              <div className="uk-card uk-margin-top footer-card">
                <h5>Veternik</h5>
                <p className="uk-text-large">Novosadski put 74,</p>
                <p className="uk-text-large">PAK code: 407860</p>
                <p className="uk-text-large">Serbia</p>
              </div>
            </div>
          </div>
          <div className="uk-flex uk-width-1-4@m">
            <div className="flex-responsive">
              <div className="uk-card uk-margin-top footer-card">
                <h5>Work inquiries</h5>
                <p className="uk-text-large">Interested in working with us?</p>
                <p className="uk-text-large">ask@digitalinfinity.rs</p>
              </div>
              <div className="uk-card uk-margin-top footer-card">
                <h5>HR opportunities and careers</h5>
                <p className="uk-text-large">We are hiring!</p>
                <p className="uk-text-large">hr@digitalinfinity.rs</p>
              </div>
            </div>
          </div>
          <div className="uk-flex uk-width-1-4@m">
            <div className="uk-card uk-margin-top footer-card">
              <h5>Company info</h5>
              <div className="responsive-info">
                <div className="uk-card uk-margin-top uk-margin-bottom">
                  <p className="uk-text-large">DIGITAL INFINITY DOO Novi Sad</p>
                  <p className="uk-text-large">Bulevar Kralja Petra I 89, 21000 Novi Sad</p>
                </div>
                <div className="uk-card uk-margin-top uk-margin-bottom">
                  <p className="uk-text-large">Tax no.: 110217311</p>
                  <p className="uk-text-large">Reg. no.: 21318507</p>
                </div>
                <div className="uk-card uk-margin-top uk-margin-bottom">
                  <p className="uk-text-large">Phone: +381 21 300 2956</p>
                  <p className="uk-text-large">Email: office@digitalinfinity.rs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-container uk-flex uk-flex-between uk-padding footer-rights">
          <p className="uk-margin-remove uk-text-large">
            @2017 - {currentYear} Digital Infinity
          </p>
          <p className="uk-margin-remove uk-text-large">All rights reserved</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
