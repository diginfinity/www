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
    <section id="aboutus">
      {Header({ dark: true })}
      <div className="aboutus--bgimage" />
      <div className="uk-container uk-container-large">
        <div className="uk-padding-large">
          <p className="uk-text-large">Home > Our Company</p>
          <div className="uk-width-1 uk-padding uk-padding-remove-left uk-padding-remove-right uk-flex uk-flex-wrap">
            <div className="uk-width-1 uk-width-1-2@s">
              <p className="uk-text-large">
                The digital agency with a human aproach
              </p>
              <h1 className="uk-heading-large">
                Crafting digital products to help startups grow.
              </h1>
            </div>
            <div className="uk-width-1 uk-width-1-2@s custom-padding">
              <p className="uk-text-large">
                + Website and mobile app development
              </p>
              <p className="uk-text-large">+ Dedicating teams and people</p>
              <p className="uk-text-large">+ User experience and design</p>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-width-1 aboutus--employees">
        <div className="img--container">
          <div className="img--container--1" />
          <div className="img--container--2" />
        </div>
        <div className="uk-container uk-container-large">
          <div className="uk-padding-large">
            <div className="uk-width-1">
              <div className="uk-width-1 uk-flex">
                <div className="card-container">
                  <div className="uk-flex uk-flex-middle icon-container">
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
                    <h4 className="uk-heading-medium">30+</h4>
                  </div>
                  <div className="uk-card">
                    <h4 className="uk-heading-small">
                      Employees and <br /> counting
                    </h4>
                    <p className="uk-text-large">
                      Our clients describe us as product team which splits
                      between{" "}
                      <span className="uk-text-bold">
                        creative strategies and digital products.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="card-container">
                  <div className="uk-flex uk-flex-middle icon-container">
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
                    <h4 className="uk-heading-medium">200+</h4>
                  </div>
                  <div className="uk-card">
                    <h4 className="uk-heading-small">
                      Succeeded <br /> Projects
                    </h4>
                    <p className="uk-text-large">
                      We deliver strong messages and visual experience using
                      <span className="uk-text-bold">latest technologies.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {OurClients()}
      <section id="awards">
        <div className="uk-container uk-container-large ">
          <div className="uk-width-1 uk-padding-large uk-flex uk-flex-between uk-flex-wrap">
            <div className="uk-card uk-width-1 uk-width-1-2@s">
              <p className="uk-text-large">Awards & Honors</p>
              <h3 className="uk-heading-medium">
                The awards won by <br /> our projects.
              </h3>
            </div>
            <div className="uk-card uk-width-1 uk-width-1-2@s">
              <p className="uk-text-large">
                Our clients describe us as product team which splits between
                creative strategies and digital products, delivering strong
                messages and visual experience using latest technologies.
              </p>
              <div className="uk-flex uk-flex-wrap">
                <div>
                  <img src={logo1} alt="logo" />
                  <p className="uk-text-large">3x Developer award</p>
                </div>
                <div>
                  <img src={logo2} alt="logo" />
                  <p className="uk-text-large">4x Website of the day</p>
                </div>
                <div>
                  <img src={logo3} alt="logo" />
                  <p className="uk-text-large">2x Mobile of the day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project">
        <div className="uk-container uk-container-large">
          <div className="uk-padding-large">
            <div className="uk-width-1 uk-flex uk-flex-wrap uk-flex-between">
              <div className="uk-width-1 uk-width-1-2@s got-a-project">
                <p className="uk-text-large">Let's collaborate</p>
                <h3 className="uk-heading-medium">
                  Got a project? <br /> Let's talk.
                </h3>
              </div>
              <div className="uk-width-1 uk-width-1-2@s uk-flex uk-flex-right uk-flex-middle">
                <button className="uk-button">Contact us</button>
              </div>
            </div>
            <hr />
            <div>
              <p className="uk-text-large">
                Our team of creatives and engineers are excited about unique
                ideas and we are helping companies just like yours to bring
                ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>
      {Footer()}
    </section>
  );
};

export default AboutUs;
