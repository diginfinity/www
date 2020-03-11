/** @format */

import React from "react";
import "./styles.scss";
// import { useForm } from "react-hook-form";

const Form = () => {
  // const { register, handleSubmit, errors } = useForm();
  return (
    <div id="form" className="form">
      <div className="form--wrapper">
        <div className="form--wrapper--left">
          <div>
            <p>Say hello</p>
            <h1>Request a free quote</h1>
          </div>
          <form>
            <div className="actual_form">
              <div>
                <label>Your name (required)</label>
                <input placeholder="John Doe" />
              </div>
              <div>
                <label>Company (required)</label>
                <input placeholder="Your company name" />
              </div>
              <div>
                <label>Email (required)</label>
                <input placeholder="Your working email" />
              </div>
              <div>
                <label>Phone (optional)</label>
                <input placeholder="Your actual phone number" />
              </div>
              <div>
                <label>Subject (optional)</label>
                <input placeholder="Your working email" />
              </div>
              <div>
                <label>Your name (required)</label>
                <input />
              </div>
            </div>
            <button>Send</button>
          </form>
        </div>
        <div className="form--wrapper--right">
          <div className="form--wrapper--right--wrapper">
            <div className="get-in-touch">
              <p>Get in touch</p>
              <h1>Email us</h1>
            </div>
            <div className="email_us">
              <p> For project inquiries only: </p>
              <p className="email_us--email">ask@digitalinfinity.rs</p>
            </div>
            <div className="email_us">
              <p>For other questions:</p>
              <p className="email_us--email">office@digitalinfinity.rs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
