import React from "react";
import "./AccountForm.scss";

export default function () {
  return (
    <div className="account">
      <h1 className="account__title">Personal Information</h1>
      <p className="account__description">
        Manage your personal information including name, age and email address.
      </p>
      <form className="account__form">
        <h3>My Basic Info</h3>
        <div className="account__form-container">
          <label className="account__form-flex">
            First Name
            <input
              type="text"
              name="first-name"
              placeholder="Enter First Name"
              className="account__form-input"
            />
          </label>
        </div>
        <div className="account__form-container">
          <label className="account__form-flex">
            Last Name
            <input
              type="text"
              name="last-name"
              placeholder="Enter Last Name"
              className="account__form-input"
            />
          </label>
        </div>
        <div className="account__form-container">
          <label className="account__form-flex">
            Date of Birth
            <input type="date" name="DOB" className="account__form-DOB" />
          </label>
        </div>
        <div className="account__form-container">
          <label className="account__form-flex">
            Email Address
            <input
              type="email"
              name="Email"
              placeholder="Enter Email"
              className="account__form-input"
            />
          </label>
        </div>
        <div className="account__form-container">
          <label className="account__form-flex">
            Phone Number
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone-number"
              placeholder="Enter Phone Number"
              className="account__form-input"
              required
            />
          </label>
        </div>
        <button className="account__button">Save Changes</button>
      </form>
    </div>
  );
}
