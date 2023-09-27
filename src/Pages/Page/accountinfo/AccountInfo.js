import React from "react";
import EditAccountForm from "../../../components/editaccountform/EditAccountForm";
import Header from "../../../components/header/header";
import "./AccountInfo.scss";

export default function AccountInfo(isLoggedIn) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="account">
        <h1 className="account__title">Account Info</h1>
        <p className="account__description">
          Manage your account info including name, age and email address.
        </p>
        <div className="account__container">
          <EditAccountForm />
        </div>
      </div>
    </>
  );
}
