import React from "react";
import "./AboutVideo.css";
import VideoAbout from "../../Videos/backgroundvideo-about.mp4";

function AboutVideo() {
  return (
    <div className="aboutvideo">
      <video loop muted autoPlay className="video-about">
        <source src={VideoAbout} type="video/mp4"></source>
      </video>

      <div className="about-headline">
        <p className="about">About</p>
      </div>
     
    </div>
  );
}

export default AboutVideo;
