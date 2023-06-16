import React from "react";
import loadingVideo from "../../assets/videos/loading-video.mp4";
import "../loading/Loading.scss";

export default function () {
  return (
    <div className="loading">
      <div className="loading__video-flex">
        <video className="loading__video" autoPlay="autoplay" muted loop>
          <source src={loadingVideo} type="video/mp4" />
        </video>
      </div>
      <div className="loading__message">Loading ....</div>
    </div>
  );
}
