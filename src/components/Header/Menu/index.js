/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Menu = ({ closeModal }) => {
  const [tabClicked, setTabClicked] = useState(false);
  return (
    <div className="hamburgerMenu">
      <div className="hamburgerMenu--button">
        <button onClick={closeModal}>x</button>
      </div>
      <div className="nav">
        <Link to="/">
          <h1>
            <sup>01</sup>Home
          </h1>
        </Link>
        <div className="nav--about">
          <h1 onClick={() => setTabClicked(true)} className={tabClicked ? "tabClicked" : ""}>
            <sup>02</sup>About
          </h1>
          <p className="nav--about--expand" onClick={() => setTabClicked(true)}>
            +
          </p>
          {tabClicked && (
            <div>
              <Link to="/about">
                <h1>Company</h1>
              </Link>
              <Link to="/people">
                <h1>People</h1>
              </Link>
            </div>
          )}
        </div>
        <Link to="/contact">
          <h1>
            <sup>03</sup>Contact us
          </h1>
        </Link>
        <Link to="/careers">
          <h1>
            <sup>04</sup>Careers
          </h1>
        </Link>
      </div>
      <div className="hamburgerMenu--emails">
        <div className="flex">
          <div>
            <p className="text-grey">Work inquiries</p>
            <p className="text-bold">ask@digitalinfinity.rs</p>
            <p className="text-bold">Ph: +381 21 300 2956</p>
          </div>
          <div>
            <p className="text-grey">Get in touch</p>
            <p>Bulevar Kralja Petra I 89</p>
            <p>Novi Sad, Serbia</p>
            <p className="text-bold">office@digitalinfinity.rs</p>
            <p className="text-bold">Ph: +381 21 300 2956</p>
          </div>
        </div>
        <div>
          <p>Follow us - Fb. / In. / Tw. / Inst.</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
