/** @format */

import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./styles.scss";

import HamburgerMenu from "../HamburgerMenu";

import Menu from "./Menu";

const Header = ({ dark }) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  const dynamicStyle = `header--${hideOnScroll ? "show" : "hide"}`;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );
  const closeModal = () => setHamburgerMenu(false);
  return (
    <div className={`header ${dynamicStyle}`}>
      <div className="header--menu">
        <div>
          <button
            className={`toggle-menu-button ${dark ? "dark_background" : null}`}
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
