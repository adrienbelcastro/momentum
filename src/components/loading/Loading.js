import React from "react";
import loadingVideo from "../../assets/videos/loading-vid.gif";
import "../loading/Loading.scss";

export default function () {
  return (
    <div className="loading">
      <div className="loading__video-flex">
        <img
          src={loadingVideo}
          className="loading__video"
          autoPlay="autoplay"
          loop
        ></img>
      </div>
      <div className="loading__message">Magic Loading ....</div>
    </div>
  );
}
