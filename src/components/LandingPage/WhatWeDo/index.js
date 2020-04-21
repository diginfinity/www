/** @format */

import React from "react";
import "./styles.scss";

import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";

// components
import Item from "./WhatWeDoItem";

const WhatWeDo = () => {
  const whatWeDoItems = [
    {
      id: 1,
      text: "Delivering products",
      title: "Software product development.",
      img: img1,
    },
    {
      id: 2,
      text: "Dedicated people and teams",
      title: "Supporting startups with dedicated teams.",
      img: img2,
    },
    {
      id: 3,
      text: "Using latest javascript technologies",
      title: "React, Angular & Node dedicated development.",
      img: img3,
    },
    {
      id: 4,
      text: "Both web and mobile applications",
      title: "Web and Hybrid mobile app development.",
      img: img4,
    },
  ];
  console.log(whatWeDoItems);
  return (
    <section id="whatwedo">
      <div className="uk-container uk-container-large whatwedo-container">
        <div className="uk-padding-large">
        <div className="uk-container">
          <div className="uk-width-1  uk-flex uk-flex-wrap">
            <div className="uk-width-1-2@s what-we-do">
              <h4 className="uk-heading-small">What we do</h4>
              <h1 className="uk-heading-large">
                We work in the fields of web and mobile app development.
              </h1>
            </div>
            <div className="uk-width-1-2@s">
              <p className="uk-text-large what-we-do-text">
                Digital Infinity is a development firm based in the beautiful
                city of Novi Sad (Serbia). We partner with some of the best US
                and European companies and help them build and scale their
                product and business ideas that positively shape the world.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="uk-width-1-1">
        <div className="uk-flex uk-flex-wrap">
          {whatWeDoItems.map((d, index) => (
            <Item key={index} text={d.text} title={d.title} img={d.img} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhatWeDo;
