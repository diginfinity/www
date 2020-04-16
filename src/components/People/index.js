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
      .then((res) => setPeople(res.data))
      .catch((e) => console.log(e));
  }, []);
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
            {people.map((p) => (
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
