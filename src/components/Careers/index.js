/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

import Header from "../Header";
import Footer from "../Footer";
import Position from "./Positions";
import Internship from "./Internship";

import hrImg from "../../assets/images/img_hr.png";

const openedPositions = [
  {
    id: 1,
    title: "Medior/Senior JavaScript developer",
    location: "Novi Sad",
    who:
      "All candidates with/without formal education in IT. Candidates with formal education will have a slight advantage.",
    type: "Full time",
    workingHours: "Weekdays from 9AM to 5PM CET.",
    description: `We are seeking an innovative and engaged Senior or Medior Javascript developer who is motivated, creative, and fun to assist in developing our web & mobile applications.
    Your primary focus will be the development of all client-side logic, definition and maintenance of the apps. You will also be responsible for integrating the design elements build by 
    your co-workers into the application. Therefore, a basic understanding of CSS, SCSS is necessary as well.`
  }
];

const Careers = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/jobs/all-job-positions")
      .then(res => {
        if (res.data.length) {
          setPositions(res.data);
        }
      })
      .catch(e => console.log(e));
  }, []);
  const renderPositions =
    positions.length > 0 ? positions.length : openedPositions;
  return (
    <div>
      {Header({ dark: true })}
      <div className="careers">
        <h1>Careers.</h1>
        <p>
          We have a strong focus on having an environment to learn and have
          loads of fun in what we do. We believe <br /> that unless an employee
          understands that work and professional life can bring out the best in
          each of <br /> them, there would not be good team work.
        </p>
        <button>Contact HR</button>
      </div>
      <div className="careers--bg-image">
        <div className="careers--bg-image--flex">
          <div className="careers--bg-image--flex--abs1">
            <div className="header--flex">
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
            <p>
              Employees and <br /> counting
            </p>
          </div>
          <div className="careers--bg-image--flex--abs2">
            <div className="header--flex">
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
            <p>
              Succeeded <br /> Projects
            </p>
          </div>
        </div>
      </div>
      <div className="join-our-team">
        <p>Digital agency with a human approach</p>
        <h1>
          Want to join our <br /> growing team?
        </h1>
      </div>
      <div className="flex--wrapper">
        <div className="flex--wrapper--bgimg" />
        <div className="flex--wrapper--positions">
          <div className="flex--wrapper--positions--text">
            <h1>For all positions</h1>
            <p>
              + We prefer a great/interested/excited person <br /> with less
              experience to an unmotivated or <br /> unengaged person with tons
              of experience
            </p>
            <p>
              + Self-management and time management are <br /> critical. Without
              it, you will not be successful.
            </p>
            <p>
              + Submit a cover letter with your resume which <br /> includes 1)
              why you would make a great addition <br /> to our team; 2) a
              favorite clip from YouTube; and <br /> 3) your salary
              requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="open--positions">
        <h1>Opened positions</h1>
        {renderPositions.map(position => (
          <Position position={position} key={position.id} />
        ))}
      </div>
      <div className="hr">
        <div className="hr--flex-container">
          <div className="hr--flex-container--hr-wrapper">
            <div className="hr--flex-container--hr-wrapper--img-wrapper">
              <img src={hrImg} alt="Jovana_HR" />
            </div>
            <div className="hr--flex-container--hr-wrapper--name-wrapper">
              <h3>Jovana Stajcic</h3>
              <h4>HR manager</h4>
            </div>
          </div>
          <div className="hr--flex-container--contact">
            <p>hr@digitalinfinity.rs</p>
            <p>Ph: +381 21 300 2956</p>
          </div>
        </div>
      </div>
      {Internship()}
      {Footer()}
    </div>
  );
};

export default Careers;
