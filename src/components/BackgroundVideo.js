import React from "react";

import Video from "../assets/video.mp4";
import "../styles/backgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay className="my-video" loop muted width="100%">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
