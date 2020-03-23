/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";

// components
import Header from "../Header";
import OurClients from "../LandingPage/OurClients";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <div className="aboutus">
      {Header({ dark: true })}
      <div className="aboutus--bgimage" />
      <div className="aboutus--container">
        <div className="aboutus--container--flex">
          <p>Home</p>
          <p> > </p>
          <p>Our Company</p>
        </div>
        <div className="aboutus--container--flex">
          <div className="flex--item">
            <div>
              <p>The digital agency with a human approach</p>
              <h1>Crafting digital products to help startups grow.</h1>
            </div>
          </div>
          <div className="flex--item">
            <div>
              <p>+ Website and mobile app development</p>
              <p>+ Dedicating teams and people</p>
              <p>+ User experience and design</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus--employees">
        <div className="img--container">
          <div className="img--container--1" />
          <div className="img--container--2" />
        </div>
        <div className="aboutus--employees--section">
          <div className="aboutus--employees--section--flex">
            <div className="aboutus--employees--section--flex--1">
              <div className="aboutus--employees--section--flex--title">
              <div className="figure">
              <div className="figure--wrapper">
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
              </div>
              <div className="figure--wrapper">
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
              </div>
              <div className="figure--wrapper">
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
              </div>
              <div className="figure--wrapper">
                <span className="figure--wrapper--transparent" />
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--transparent" />
              </div>
            </div>
              <h1>30+</h1>
              </div>
              <p className="bold">
                Employees and <br /> counting
              </p>
              <p>
                Our clients describe us as product <br /> team which splits
                between{" "}
                <span>
                  creative <br /> strategies and digital products.
                </span>
              </p>
            </div>
            <div className="aboutus--employees--section--flex--2">
            <div className="aboutus--employees--section--flex--title">
              <div className="figure">
              <div className="figure--wrapper">
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
              </div>
              <div className="figure--wrapper">
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
              </div>
              <div className="figure--wrapper">
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--dots" />
              </div>
              <div className="figure--wrapper">
                <span className="figure--wrapper--transparent" />
                <span className="figure--wrapper--dots" />
                <span className="figure--wrapper--transparent" />
              </div>
            </div>
              <h1>200+</h1>
              </div>
              <p className="bold">
                Succeeded <br /> Projects
              </p>
              <p>
                We deliver strong messages and <br /> visual experience using{" "}
                <span>
                  latest <br /> technologies.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {OurClients()}
      <div className="aboutus--awards">
        <div className="aboutus--awards--flex">
          <div className="aboutus--awards--flex--1">
            <p>Awards & Honors</p>
            <h1>
              The awards won by <br /> our projects.
            </h1>
          </div>
          <div className="aboutus--awards--flex--2">
            <p>
              Our clients describe us as product team which splits between
              creative strategies and digital products, delivering strong
              messages and visual experience using latest technologies.
            </p>
            <div className="awards">
              <div>
                <img src={logo1} alt="logo" />
                <p>3x Developer award</p>
              </div>
              <div>
                <img src={logo2} alt="logo" />
                <p>4x Website of the day</p>
              </div>
              <div>
                <img src={logo3} alt="logo" />
                <p>2x Mobile of the day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus--project">
        <div className="aboutus--project--wrapper">
          <div className="aboutus--project--wrapper--flex">
            <div>
              <p>Let's collaborate</p>
              <h1>
                Got a project? <br /> Let's talk.
              </h1>
            </div>
            <div>
              <Link to="/contact">
                <button>Contact us</button>
              </Link>
            </div>
          </div>
          <div className="aboutus--project--wrapper--footer">
            <p>
              Our team of creatives and engineers are excited about unique ideas
              and we are <br /> helping companies just like yours to bring ideas
              to life.
            </p>
          </div>
        </div>
      </div>
      {Footer()}
    </div>
  );
};

export default AboutUs;
