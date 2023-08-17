import React from 'react'
import './ServiceVideo.css'
import ServiceVideo from "../../Videos/service-backgroundvideo.mp4";

function ServiveVideo() {
  return (
    <div className='servicevideo'>
      <video autoPlay loop muted className="video-service">
        <source src={ServiceVideo} type="video/mp4"></source>
      </video>
      <div className="service-headline">
        <p className="service">Service</p>
      </div>
    </div>
  );
}

export default ServiveVideo