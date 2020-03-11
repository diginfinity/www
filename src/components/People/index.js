/** @format */

import React from "react";
import "./styles.scss";

import people from "../../assets/images/people.png";
//components
import Header from "../Header";
import Internship from "../Careers/Internship";
import Footer from "../Footer";
import JoinUs from "../Contact/JoinUs";

import Member from "./Member";

const members = [
  {
    id: 1,
    name: "Milos Jovanov",
    title: "Senior software developer",
    img: people
  },
  {
    id: 2,
    name: "Milos Milos",
    title: "Senior software developer",
    img: people
  },
  {
    id: 3,
    name: "Marko Marko",
    title: "Senior software developer",
    img: people
  },
  {
    id: 4,
    name: "Dusan Dusan",
    title: "Senior software developer",
    img: people
  },
  {
    id: 5,
    name: "Lazar Lazar",
    title: "Senior software developer",
    img: people
  },
  {
    id: 6,
    name: "Jovan Jovan",
    title: "Senior software developer",
    img: people
  }
];

const People = () => {
  return (
    <div>
      {Header({ dark: true })}
      <div className="people">
        <h1>It's about the people.</h1>
        <p>Great thinkers, good creators and excellent companions.</p>
        <div className="people--members">
          {members.map(member => (
            <Member member={member} key={member.id} />
          ))}
        </div>
      </div>
      {JoinUs({ grey: true })}
      {Internship()}
      {Footer()}
    </div>
  );
};
export default People;
