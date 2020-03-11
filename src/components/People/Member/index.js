/** @format */

import React from "react";
import "./styles.scss";

const Member = props => {
  const { name, title, img } = props.member;
  return (
    <div className="member">
      <div className="member--img">
        <img src={img} alt={name} />
      </div>
      <div className="member--name">
        <h3>{name}</h3>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Member;
