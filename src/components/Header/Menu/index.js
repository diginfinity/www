/** @format */

import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./styles.scss";

const Menu = ({ closeModal, isOpen }) => {
  const [tabClicked, setTabClicked] = useState(false);
  console.log("1232132", isOpen);
  return (
    <div
      className={
        isOpen
          ? "hamburgerMenu hamburgerMenu--open"
          : "hamburgerMenu hamburgerMenu--close"
      }>
      <div className="hamburgerMenu--button">
        <button onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="nav">
        <Link to="/">
          <h1 className="nav--item-animate">
            <sup>01</sup>Home
          </h1>
        </Link>
        <div className="nav--about">
          <h1
            onClick={() => setTabClicked(true)}
            className={
              tabClicked ? "nav--item-animate tabClicked" : "nav--item-animate"
            }>
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
          <h1 className="nav--item-animate">
            <sup>03</sup>Contact us
          </h1>
        </Link>
        <Link to="/careers">
          <h1 className="nav--item-animate">
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
