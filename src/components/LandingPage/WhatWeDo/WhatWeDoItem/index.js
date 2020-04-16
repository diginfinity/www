/** @format */

import React from "react";
import "./styles.scss";

const Item = ({ text, title, img = "" }) => (
  <div
    id="item"
    className="uk-card uk-width-1-2@s uk-width-1-4@m uk-background-cover uk-light"
    uk-img
    style={{ backgroundImage: `url(${img})` }}>
    <div className="item--opacity" />
    <div>
      <h3 className="uk-text-large">{text}</h3>
      <h1 className="uk-heading-medium">{title}</h1>
    </div>
  </div>
);

export default Item;
