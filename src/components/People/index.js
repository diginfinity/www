/** @format */

import React, { useEffect, useState } from "react";
import "./styles.scss";

import { digitalApi } from "../../api";
//components
import Header from "../Header";
import Internship from "../Careers/Internship";
import Footer from "../Footer";
import JoinUs from "../Contact/JoinUs";

import Member from "./Member";

// const members = [
//   {
//     id: 1,
//     name: "Milos Jovanov",
//     title: "Senior software developer",
//     imageId: people
//   },
//   {
//     id: 2,
//     name: "Milos Milos",
//     title: "Senior software developer",
//     imageId: people
//   },
//   {
//     id: 3,
//     name: "Marko Marko",
//     title: "Senior software developer",
//     imageId: people
//   },
//   {
//     id: 4,
//     name: "Dusan Dusan",
//     title: "Senior software developer",
//     imageId: people
//   },
//   {
//     id: 5,
//     name: "Lazar Lazar",
//     title: "Senior software developer",
//     imageId: people
//   },
//   {
//     id: 6,
//     name: "Jovan Jovan",
//     title: "Senior software developer",
//     imageId: people
//   }
// ];

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    digitalApi
      .get("employees/all-employees")
      .then(res => setPeople(res.data))
      .catch(e => console.log(e));
  }, []);
  return (
    <div>
      {Header({ dark: true })}
      <div className="people">
        <h1>It's about the people.</h1>
        <p>Great thinkers, good creators and excellent companions.</p>
        <div className="people--members">
          {people.map(p => (
            <Member member={p} key={p._id} />
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
