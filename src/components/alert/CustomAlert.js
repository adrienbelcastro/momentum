import React from "react";

function CustomAlert({ message }) {
  return (
    <div className="custom-alert">
      <span className="custom-alert__message">{message}</span>
    </div>
  );
}

export default CustomAlert;
