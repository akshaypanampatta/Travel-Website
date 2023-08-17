import React from 'react'
import './ContactVideo.css'
import ContactVideos from '../../Videos/contact-backgroundvideo.mp4'

function ContactVideo() {
  return (
    <div className="contactvideo">
      <video loop muted autoPlay className="video-contact">
        <source src={ContactVideos} type="video/mp4"></source>
      </video>
      <div className="contact-headline">
        <p className="contact">Contact</p>
      </div>
    </div>
  );
}

export default ContactVideo