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
    <div>
      {Header({ dark: true })}
      <div className="contact">
        <h1>Contact us.</h1>
        <p>Leave us a little info, and we'll be in touch.</p>
        <button>Send us an email</button>
      </div>
      <div className="div-flex">
        <div className="div-flex--1">
          {" "}
          {/* maps */}
          MAPA
        </div>
        <div className="div-flex--2">
          <div className="item--1">
            <div className="iconHolder">
              <FontAwesomeIcon
                className="icon-icon"
                icon={faPhoneAlt}
                size="2x"
              />
            </div>
            <div className="information">
              <h3>Get in touch</h3>
              <p className="information--grey">Work inquirires</p>
              <div className="information--info">
                <p>ask@digitalinfinity.rs</p>
                <p>Ph: +381 21 300 2956</p>
              </div>
              <p className="information--grey">Other</p>
              <div className="information--info">
                <p>office@digitalinfinity.rs</p>
                <p>Ph: +381 21 300 2956</p>
              </div>
            </div>
          </div>
          <div className="item--2">
            <div className="iconHolder">
              <FontAwesomeIcon
                className="icon-icon"
                icon={faEnvelope}
                size="2x"
              />
            </div>
            <div className="information">
              <h3>Post address</h3>
              <div className="information--info-2">
                <p>DIGITAL INFINITY DOO Novi Sad</p>
                <p>Bulevar Kralja Petra I 89</p>
                <p>21000 Novi Sad, Serbia</p>
                <p>PAK code: 401245</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {JoinUs({ grey: false })}
      {Footer()}
    </div>
  );
};

export default ContactUs;
