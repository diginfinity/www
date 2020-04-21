/** @format */

import React, { useEffect, useState } from "react";
import "./styles.scss";

import { digitalApi } from "../../api";

import Header from "../Header";
import Footer from "../Footer";
import Position from "./Positions";
import Internship from "./Internship";

import hrImg from "../../assets/images/img_hr.png";

// const openedPositions = [
//   {
//     id: 1,
//     title: "Medior/Senior JavaScript developer",
//     location: "Novi Sad",
//     who:
//       "All candidates with/without formal education in IT. Candidates with formal education will have a slight advantage.",
//     type: "Full time",
//     workingHours: "Weekdays from 9AM to 5PM CET.",
//     description: `We are seeking an innovative and engaged Senior or Medior Javascript developer who is motivated, creative, and fun to assist in developing our web & mobile applications.
//     Your primary focus will be the development of all client-side logic, definition and maintenance of the apps. You will also be responsible for integrating the design elements build by
//     your co-workers into the application. Therefore, a basic understanding of CSS, SCSS is necessary as well.`
//   }
// ];

const Careers = () => {
  const [positions, setPositions] = useState([]);
  console.log(positions);
  useEffect(() => {
    digitalApi
      .get("jobs/all-job-positions")
      .then((res) => {
        if (res.data.length) {
          setPositions(res.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section id="careers">
      {Header({ dark: true })}
      <div className="uk-container uk-container-large careers-container">
        <div className="uk-padding-large">
          <h1 className="uk-heading-large uk-text-bold">Careers.</h1>
          <p className="uk-text-large">
            We have a strong focus on having an environment to learn and have
            loads of fun in what we do. We believe <br /> that unless an
            employee understands that work and professional life can bring out
            the best in each of <br /> them, there would not be god team work.
          </p>
          <a href="mailto:hr@digitalinfinity.rs">
            <button className="uk-button emailhr">Contact HR</button>
          </a>
        </div>
      </div>
      <div className="uk-width-1 careers-bg-img">
        <div className="uk-container uk-container-large container-relative">
          <div className="uk-padding-large uk-padding-remove-bottom uk-height-1-1 container-relative--absolute">
        <div className="uk-flex dots-wrapper uk-height-1-1">
            <div className="uk-padding employees-container">
              <div className="uk-flex uk-flex-middle">
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
                <h1 className="uk-heading-medium">30+</h1>
              </div>
              <p className="uk-text-large">Employees and counting</p>
            </div>
            <div className="uk-padding projects-container">
              <div className="uk-flex uk-flex-middle">
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
                <h1 className="uk-heading-medium">200+</h1>
              </div>
              <p className="uk-text-large">Succeeded Projects</p>
            </div>
        </div>
        </div>
        </div>
      </div>
      <div className="uk-container uk-container-large">
        <div className="uk-padding-large">
          <p className="uk-text-large">Digital agency with a human approach</p>
          <h2 className="uk-heading-medium uk-text-bold want-to-join">
            Want to join our <br /> growing team?
          </h2>
        </div>
      </div>
      <div className="uk-flex uk-width-1">
        <div className="uk-width-3-5@s all-positions-bg-img" />
        <div className="uk-width-2-5@s all-positions">
          <div className="uk-card uk-padding-large">
            <h2 className="uk-heading-small uk-text-bold">For all positions</h2>
            <p className="uk-text-large">
              + We prefer a great/interested/excited person with less experience
              to an unmotivated or unengaged person with tons of experience.
            </p>
            <p className="uk-text-large">
              + Self-management and time management are critical. Without it,
              you will not be successful.
            </p>
            <p className="uk-text-large">
              + Submit a cover letter with your resume which includes 1) why you
              would make a great addition to our team; 2) a favorite clip from
              YouTube; and 3) your salary requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="uk-container uk-container-large">
        <div className="uk-padding-large">
          <h1 className="uk-heading-medium">Opened positions</h1>
          <div className="uk-padding uk-padding-remove-left uk-padding-remove-right">
            {positions.length ? (
              positions.map((p, index) => <Position key={index} position={p} />)
            ) : (
              <div>
                <h4>We currently have no open positions</h4>
              </div>
            )}
          </div>
          <hr />
          <div className="uk-flex uk-width-1">
            <div className="uk-flex uk-flex-middle uk-width-1">
              <div className="hr-img-container">
                <img src={hrImg} alt="Jovana_HR" />
              </div>
              <div className="uk-flex uk-flex-wrap uk-flex-between uk-flex-middle uk-width-1 more-info">
                <div className="hr-info">
                  <h3 className="uk-heading-small">Jovana Stajcic</h3>
                  <p className="uk-text-large">HR manager</p>
                </div>
                <div className="company-info">
                <p className="uk-text-large uk-text-bold">
                hr@digitalinfinity.rs
              </p>
              <p className="uk-text-large">Ph: +381 21 300 2956</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Internship()}
      {Footer()}
    </section>
  );
};

export default Careers;
