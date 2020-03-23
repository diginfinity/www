/** @format */

import React, { useState } from "react";
import "./styles.scss";

import HamburgerMenu from "../HamburgerMenu";

import Menu from "./Menu";

const Header = ({ dark }) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const closeModal = () => setHamburgerMenu(false);
  return (
    <div className="header">
      <div className="header--followus">
        <h4>Follow us - Fb. / In. Tw. / Inst.</h4>
      </div>
      <div className="header--menu">
        <div>
          <button
            className={`toggle-menu-button ${dark ? "dark_background" : null}`}
            onClick={() => setHamburgerMenu(true)}>
            ||
          </button>
        </div>
        {/* <div> */}
        <h3 className={dark ? "dark" : ""}>
          digital <br /> infinity.
        </h3>
        {/* </div> */}
      </div>
      <div className="header--button">
        <button>Get a Quote</button>
      </div>
      <HamburgerMenu id="hamburger-menu">
        <Menu isOpen={hamburgerMenu} closeModal={closeModal} />
      </HamburgerMenu>
    </div>
  );
};

export default Header;
