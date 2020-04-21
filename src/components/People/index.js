/** @format */

import React from "react";
import "./styles.scss";

//components
import Header from "../Header";
import Internship from "../Careers/Internship";
import Footer from "../Footer";
import JoinUs from "../Contact/JoinUs";

import Member from "./Member";

import goran from './people_img/goran.jpg';
import ivan from './people_img/ivan.jpg';
import jovan from './people_img/jovan.png';
import marko_cekic from './people_img/marko2.jpg';
import marko from './people_img/marko.jpg';
import uros from './people_img/uros.png';

const members = [
  {
    name: 'Goran Krgović',
    position: 'CEO',
    img: goran,
    linkedIn: 'https://www.linkedin.com/in/gorankrgovic/'
  },
  {
    name: 'Ivan Kiš',
    position: 'Front End Developer',
    img: ivan,
    linkedIn: 'https://www.linkedin.com/in/ivan-ki%C5%A1/'
  },
  {
    name: 'Jovan Djukić',
    position: 'Front End Developer',
    img: jovan,
    linkedIn: 'https://www.linkedin.com/in/jovandj/'
  },
  {
    name: 'Marko Čekić',
    position: 'Front End Developer',
    img: marko_cekic,
    linkedIn: 'https://www.linkedin.com/in/cekicm/'
  },
  {
    name: 'Marko Popović',
    position: 'Front End Developer',
    img: marko,
    linkedIn: 'https://www.linkedin.com/in/marko-popovic-02311818a/'
  },
  {
    name: 'Uroš Teofanović',
    position: 'Front End Developer',
    img: uros,
    linkedIn: 'https://www.linkedin.com/in/uro%C5%A1-teofanovi%C4%87/'
  },

];

const People = () => {
  return (
    <section id="members">
      {Header({ dark: true })}
      <div className="members-container uk-container uk-container-large">
        <div className="uk-padding-large">
          <h1 className="uk-heading-large">It's about the people.</h1>
          <p className="uk-text-large">
            Great thinkers, good creators and excellent companions.
          </p>
          <div className="uk-width-1 uk-flex uk-flex-wrap">
            {members.map((p) => (
              <Member member={p} key={p._id} />
            ))}
          </div>
        </div>
      </div>
      {JoinUs({ grey: true })}
      {Internship()}
      {Footer()}
    </section>
  );
};
export default People;
