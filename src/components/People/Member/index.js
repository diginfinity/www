/** @format */

import React from "react";
import linkedin_img from "../../../assets/logos/linkedin.svg";
import digitalLogo from "../../../assets/logos/di-logo.png";
import "./styles.scss";

const Member = (props) => {
  const { name, position, img, linkedIn } = props.member;
  console.log(props.member)
  return (
    <div
      id="member"
      className="uk-card uk-card-default uk-flex uk-flex-middle uk-width-1 uk-width-1-2@s uk-width-1-3@m">
      <div>
        <img
        src={img}
          // src={
          //   imageId
          //     ? `http://localhost:8000/api/v1/image/${imageId}`
          //     : digitalLogo
          // }
          alt={name}
        />
      </div>
      <div className="member-info">
        <h3 className="uk-heading-small">{name}</h3>
        <p className="uk-text-large uk-text-bold">{position}</p>
        {linkedIn !== "/" && linkedIn !== "" && (
          <a
            className="icon uk-link"
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
