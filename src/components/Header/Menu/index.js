/** @format */

import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./styles.scss";

const Menu = ({ closeModal, isOpen, close }) => {
  const [tabClicked, setTabClicked] = useState(false);

  const path = window.location.pathname;

  const activeTab = "nav--active";
  const tabClickHandler = e => {
    const { id } = e.target;
    if (id === path) {
      return close();
    }
  };
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
          <h1
            id="/"
            onClick={e => tabClickHandler(e)}
            className={`nav--item-animate ${path === "/" && activeTab}`}>
            <sup>01</sup>Home
          </h1>
        </Link>
        <div className="nav--about">
          <h1
            onClick={() => setTabClicked(!tabClicked)}
            className={`
              ${
                tabClicked
                  ? "nav--item-animate tabClicked"
                  : "nav--item-animate"
              }
              ${path === "/about" || path === "/people" ? activeTab : ""}
            `}>
            <sup>02</sup>About
          </h1>
          <p
            className={`nav--about--expand ${tabClicked && "nav--about--hide"}`}
            onClick={() => setTabClicked(!tabClicked)}>
            +
          </p>
          {tabClicked && (
            <div>
              <Link to="/about">
                <h1
                  onClick={e => tabClickHandler(e)}
                  id="/about"
                  className={path === "/about" ? activeTab : ""}>
                  Company
                </h1>
              </Link>
              <Link to="/people">
                <h1
                  onClick={e => tabClickHandler(e)}
                  id="/people"
                  className={path === "/people" ? activeTab : ""}>
                  People
                </h1>
              </Link>
            </div>
          )}
        </div>
        <Link to="/contact">
          <h1
            onClick={e => tabClickHandler(e)}
            id="/contact"
            className={`nav--item-animate ${
              path === "/contact" ? activeTab : ""
            }`}>
            <sup>03</sup>Contact us
          </h1>
        </Link>
        <Link to="/careers">
          <h1
            onClick={e => tabClickHandler(e)}
            id="/careers"
            className={`nav--item-animate ${
              path === "/careers" ? activeTab : ""
            }`}>
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
          <p>
            Follow us - Fb. /{" "}
            <a
              href="https://www.linkedin.com/company/digital-infinity-doo/"
              target="_blank"
              rel="noopener noreferrer">
              Lin.
            </a>{" "}
            / Tw. /{" "}
            <a
              href="https://www.instagram.com/sounder.fm/"
              target="_blank"
              rel="noopener noreferrer">
              Inst
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
