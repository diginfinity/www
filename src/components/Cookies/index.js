/** @format */

import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const Cookies = () => {
  const [showCookie, setShowCookie] = useState(
    document.cookie.split("=").pop() === "false"
  );
  const closeCookiesBar = () => {
    document.cookie = "cookie=false";
    setShowCookie(true);
  };
  if (!showCookie) {
    return (
      <div className="cookies">
        <FontAwesomeIcon onClick={closeCookiesBar} icon={faTimes} />
        <div>
          <p>
            {" "}
            We use cookies to give you the best experience.{" "}
            <span>Cookie Policy</span>
          </p>
        </div>
      </div>
    );
  }
  return <> </>;
};

export default Cookies;
