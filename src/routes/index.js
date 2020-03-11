/** @format */
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

// components
import App from "../App";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/Contact";
import Careers from "../components/Careers";
import People from "../components/People";

const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/careers" component={Careers} />
      <Route path="/people" component={People} />
    </Switch>
  </Router>
);

export default createRoutes;
