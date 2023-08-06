import React from "react";
import "./AccountForm.scss";

export default function () {
  return (
    <div className="account">
      <h1 className="account__title">Personal Information</h1>
      <p className="account__description">
        Manage your personal information including name, age and email address
      </p>
      <form className="account__form">
        <label>
          First Name
          <input type="text" name="first-name" placeholder="Enter First Name" />
        </label>
        <label>
          Last Name
          <input type="text" name="last-name" placeholder="Enter Last Name" />
        </label>
        <label>
          Date of Birth
          <input type="date" name="DOB" />
        </label>
        <label>
          Email
          <input type="text" name="Email" placeholder="Enter Email" />
        </label>
      </form>
    </div>
  );
}
