/** @format */

import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles.scss";

import HamburgerMenu from "../HamburgerMenu";

import Menu from "./Menu";

const Header = ({ dark }) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [addBackground, setAddBackground] = useState(false);

  const dynamicStyle = `header--${addBackground ? "show" : "hide"}`;

  useEffect(() => {
    const listenToScroll = () => {
      if (window.pageYOffset !== 0) {
        setAddBackground(true);
      } else setAddBackground(false);
    };
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []); //eslint-disable-line

  const closeModal = () => setHamburgerMenu(false);
  return (
    <div className={`header ${dynamicStyle}`}>
      <div className="header--menu">
        <div className="header--menu">
          <button
            className={`toggle-menu-button ${
              dark ? "dark_background" : null
            } header--menu--button`}
            onClick={() => setHamburgerMenu(true)}>
            ||
          </button>
        </div>
        <h3 className={dark ? "dark" : ""}>
          digital <br /> infinity.
        </h3>
      </div>
      <div className="header--button">
        <Link smooth to="/#form">
          <button>Get a Quote</button>
        </Link>
      </div>
      <HamburgerMenu id="hamburger-menu">
        <Menu
          isOpen={hamburgerMenu}
          close={() => setHamburgerMenu(!hamburgerMenu)}
          closeModal={closeModal}
        />
      </HamburgerMenu>
    </div>
  );
};

export default Header;
