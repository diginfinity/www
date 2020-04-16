/** @format */

import React from "react";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

import Header from "../Header";
import JoinUs from "./JoinUs";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <section id="contact">
      {Header({ dark: true })}
      <div className="uk-container uk-container-large contact-container">
        <div className="uk-padding-large">
          <h1 className="uk-heading-large uk-text-bold">Contact us.</h1>
          <p className="uk-text-large">
            Leave us a little info, and we'll be in touch.
          </p>
          <button className="uk-button send-email-button">
            Send us an email
          </button>
        </div>
      </div>
      <div className="uk-width-1 uk-flex uk-flex-wrap uk-padding-large uk-padding-remove-left uk-padding-remove-right">
        <div className="uk-width-1 uk-width-1-2@s google-map">MAPA</div>
        <div className="uk-width-1 uk-width-1-2@s uk-flex">
          <div className="uk-width-1-2 get-in-touch">
            <div className="uk-card uk-padding">
              <div>
                <div className="icon-holder">
                  <FontAwesomeIcon
                    className="icon-icon"
                    icon={faPhoneAlt}
                    size="2x"
                  />
                </div>
                <h3 className="uk-heading-small">Get in touch</h3>
              </div>
              <div className="uk-card">
                <p className="uk-card-title">Work inquiries</p>
                <p className="uk-text-large">ask@digitalinfinity.rs</p>
                <p className="uk-text-large">Ph: +381 21 300 2959</p>
              </div>
            </div>
          </div>
          <div className="uk-width-1-2 post-address">
            <div className="uk-card uk-padding">
              <div>
                <div className="icon-holder">
                  <FontAwesomeIcon
                    className="icon-icon"
                    icon={faEnvelope}
                    size="2x"
                  />
                </div>
                <h3 className="uk-heading-small">Post address</h3>
              </div>
              <div className="uk-card">
                <p className="uk-card-title">DIGITAL INFINITY DOO Novi Sad</p>
                <p className="uk-text-large">Bulevar Kralja Petra I 89</p>
                <p className="uk-text-large">21000 Novi Sad, Serbia</p>
                <p className="uk-text-large">PAK code: 401245</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {JoinUs({ grey: false })}
      {Footer()}
    </section>
  );
};

export default ContactUs;
