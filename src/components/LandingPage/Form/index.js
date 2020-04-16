/** @format */

import React from "react";
import "./styles.scss";
// import { useForm } from "react-hook-form";

const Form = () => {
  // const { register, handleSubmit, errors } = useForm();
  return (
    <section id="form">
      <div className="uk-container form-container uk-container-large">
        <div className="uk-padding-large">
        <div className="uk-flex uk-flex-wrap uk-width-1">
          <div className="uk-width-1 uk-width-2-3@m">
            <p className="uk-text-large">Say hello</p>
            <h1 className="uk-heading-medium">Request a free quote</h1>
            <form>
              <div className="uk-width-1 uk-flex form-input-container">
                <div className="uk-width-1 uk-width-1-2@m">
                  <label className="uk-form-label uk-text-large" htmlFor="name">
                    Your name (required)
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input uk-width-1 uk-text-large"
                      type="text"
                      id="name"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="uk-width-1 uk-width-1-2@m">
                  <label
                    className="uk-form-label uk-text-large"
                    htmlFor="company">
                    Company (required)
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input uk-width-1 uk-text-large"
                      type="text"
                      id="company"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>
              <div className="uk-width-1 uk-flex form-input-container">
                <div className="uk-width-1 uk-width-1-2@m">
                  <label
                    className="uk-form-label uk-text-large"
                    htmlFor="email">
                    Email (required)
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input uk-width-1 uk-text-large"
                      type="email"
                      id="email"
                      placeholder="Your working email"
                    />
                  </div>
                </div>
                <div className="uk-width-1 uk-width-1-2@m">
                  <label
                    className="uk-form-label uk-text-large"
                    htmlFor="phone">
                    Phone (optional)
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input uk-width-1 uk-text-large"
                      type="number"
                      id="phone"
                      placeholder="Your actual phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="uk-width-1 uk-flex form-input-container">
                <div className="uk-width-1 uk-width-1-2@m">
                  <label
                    className="uk-form-label uk-text-large"
                    htmlFor="subject">
                    Subject (optional)
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input uk-width-1 uk-text-large"
                      type="text"
                      id="subject"
                      placeholder="Your working email"
                    />
                  </div>
                </div>
                <div className="uk-width-1 uk-width-1-2@m">
                  <label
                    className="uk-form-label uk-text-large"
                    htmlFor="budget">
                    Choose a budget (USD)
                  </label>
                  <div className="uk-form-controls">
                    <select className="uk-select uk-text-large" id="budget">
                      <option>Less than 5k</option>
                      <option>5k - 10k</option>
                      <option>Over 10k</option>
                      <option>Please advice</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="uk-button uk-button-primary uk-text-large">
                Send
              </button>
            </form>
          </div>
          <div className="uk-width-1 uk-width-1-3@m">
            <div className="get-in-touch uk-card uk-card-body">
              <p className="uk-text-large">Get in touch</p>
              <h1 className="uk-heading-medium">Email us</h1>
              <div className="get-in-touch--flex">
                <div className="uk-card item">
                  <p className="uk-text-meta uk-text-large">
                    For project inquiries only:
                  </p>
                  <p className="uk-text-large uk-text-bold">
                    ask@digitalinfinity.rs
                  </p>
                </div>
                <div className="uk-card item">
                  <p className="uk-text-meta uk-text-large">
                    For other questions:
                  </p>
                  <p className="uk-text-large uk-text-bold">
                    office@digitalinfinity.rs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
