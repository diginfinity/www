/** @format */

import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

//components
import Header from "../Header";
import WhatWeDo from "./WhatWeDo";
import Clients from "./OurClients";
import Reviews from "./Reviews";
import Approach from "./Approach";
import Form from "./Form";

import Footer from "../Footer";

const LandingPage = () => {
  return (
    <>
      <div id="landingPage" className="landingPage">
        <div className="landingPage--bigtext">
          sti <br />
          design <br />
          progress <br />
        </div>
        {Header({ dark: false })}
        <div className="landingPage--wrapper">
          <p>Delivering bespoke digital solutions.</p>
          <h1>
            Enabling <br /> organizations <br /> to <span>grow</span>
          </h1>
          <button>
            Read more{" "}
            <FontAwesomeIcon className="icon-right" icon={faArrowRight} />
          </button>
        </div>

        <div className="landingPage--cookies">
          <div>
            We use cookies to give you the best experience.{" "}
            <h3>Cookie Policy</h3>
          </div>
        </div>
      </div>
      <div className="dark-background">
        {WhatWeDo()}
        {Clients()}
        {Reviews()}
        {Approach()}
        {Form()}
      </div>
      {Footer()}
    </>
  );
};

export default LandingPage;
