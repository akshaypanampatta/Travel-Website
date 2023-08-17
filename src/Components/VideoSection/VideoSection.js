import React from "react";
import "./VideoSection.css";
import VideoFile from "../../Videos/backgroundvideo.mp4";

function VideoSection() {
  return (
    <div className="video-section">
      
        <video autoPlay loop muted className="video">
          <source src={VideoFile} type="video/mp4" />
        </video>
      
      <div className="main-headline">
        <p className="headline">Your Journey Your Story</p>
        <p className="sub-headline">choose your favourite destination</p>
        <button className="trvl-btn">Travel Plan</button>
      </div>
    </div>
  );
}

export default VideoSection;
