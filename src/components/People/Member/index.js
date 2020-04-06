/** @format */

import React from "react";
import linkedin_img from "../../../assets/logos/linkedin.svg";
import "./styles.scss";

const Member = props => {
  const { name, position, imageId, linkedIn } = props.member;
  return (
    <div className="member">
      <div className="member--img">
        {imageId && (
          <img
            src={`http://localhost:8000/api/v1/image/${imageId}`}
            alt={name}
          />
        )}
      </div>
      <div className="member--name">
        <h3>{name}</h3>
        <h3>{position}</h3>
        {linkedIn !== "/" && linkedIn !== "" && (
          <a
            className="member--name--linkedin"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer">
            <img src={linkedin_img} alt={`${name}_linkedin_profile`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Member;
