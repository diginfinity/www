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
                <label htmlFor="name">Your name (required)</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="company">Company (required)</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="email">Email (required)</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your working email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Your actual phone number"
                />
              </div>
              <div>
                <label htmlFor="subject">Subject (optional)</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Your working email"
                />
              </div>
              <div>
                <label htmlFor="budget">Choose a budget (USD)</label>
                <select id="budget">
                  <option>Less than 5k</option>
                  <option>5k-10k</option>
                  <option>Over 10k</option>
                  <option>Please advice</option>
                </select>
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
