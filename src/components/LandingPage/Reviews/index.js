/** @format */

import React, { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

import image1 from "../../../assets/images/image1.png";

const reviews = [
  {
    id: 1,
    title: "Code quality.",
    text:
      "It was really a pleasure to work with the team @DI, with emphasis on their code quality and deliverability.",
    name: "Stacey Aniston",
    workingTitle: "Project Manager, IAI",
    image: image1,
  },
  {
    id: 2,
    title: "Lorem Ipsum.",
    text:
      "Lorem ipsum, lorem ipsum,Lorem ipsum, lorem ipsum,Lorem ipsum, lorem ipsum,Lorem ipsum, lorem ipsum,",
    name: "Dusan Dusan",
    workingTitle: "Project Manager, IAI",
    image: image1,
  },
  {
    id: 3,
    title: "HAHAHA.",
    text:
      "Lorem ipsum, lorem ipsum,Lorem ipsum, lorem ipsum,Lorem ipsum, lorem ipsum,Lorem ipsum, lorem ipsum,",
    name: "Uros Uros",
    workingTitle: "Project Manager, IAI",
    image: image1,
  },
];

const Reviews = () => {
  const [review, setReview] = useState(0);

  const handleSlider = (e) => {
    if (e === "up") {
      if (review === reviews.length - 1) {
        return setReview(0);
      }
      return setReview(review + 1);
    } else if (e === "down") {
      if (review === 0) {
        return setReview(2);
      }
      return setReview(review - 1);
    }
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (review !== reviews.length - 1) {
  //       return setReview(review + 1);
  //     } else if (review === reviews.length - 1) {
  //       return setReview(0);
  //     }
  //   }, 5000);
  // }, [review]);
  console.log(review);
  return (
    <div className="reviews">
      <div className="reviews--wrapper">
        <div className="reviews--wrapper--review">
          <div className="reviews--wrapper--review--opacity" />
          <div className="reviews--wrapper-review--flex">
            {reviews.map((r, index) => (
              <div
                id={`section${index + 1}`}
                // style={{ left: `${index}00%` }}
                style={{ opacity: `${index === review ? 1 : 0}` }}
                key={index}
                className={`reviews--wrapper--review--flex--container`}>
                <img src={r.image} alt="happy_customer" />
                <h4 className="title">{r.title}</h4>
                <p className="text">{r.text}</p>
                <div>
                  <h4 className="name">{r.name}</h4>
                  <h4 className="working_title">{r.workingTitle}</h4>
                </div>
                <div className="slider">
                  <div className="slider--number">
                    <p>{index + 1}</p>
                    <div>
                      <hr />
                    </div>
                    <p>{reviews.length}</p>
                  </div>
                  <div className="slider--buttons">
                    <button name="down" onClick={() => handleSlider("down")}>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button name="up" onClick={() => handleSlider("up")}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
