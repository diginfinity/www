/** @format */

import React from "react";
import "./styles.scss";

const Item = ({ text, title, img = "" }) => (
  <div className="item" style={{ backgroundImage: `url(${img})` }}>
    <div className="item--image" />
    <div>
      <h3>{text}</h3>
      <h1>{title}</h1>
    </div>
  </div>
);

export default Item;
