/** @format */
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "uikit/dist/css/uikit.min.css";
// components
import App from "../App";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/Contact";
import Careers from "../components/Careers";
import People from "../components/People";
import Cookies from "../components/Cookies";

const createRoutes = () => (
  <Router>
    <div className="header--followus">
      <h4>
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
          Inst.
        </a>
      </h4>
    </div>
    <Switch>
      <Route exact path="/" component={App} component_id="home" />
      <Route path="/about" component={AboutUs} component_id="about" />
      <Route path="/contact" component={ContactUs} component_id="contactus" />
      <Route path="/careers" component={Careers} component_id="careers" />
      <Route path="/people" component={People} component_id="people" />
    </Switch>
    <Cookies />
  </Router>
);

export default createRoutes;
