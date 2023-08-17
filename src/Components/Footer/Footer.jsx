import React from 'react';
import './Footer.css';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <p className="logo-footer">Seek out</p>
          <p className="caption-footer">Choose Your Favourite Destination</p>
        </div>
        <div className="footer-social-media">
          <BsFacebook className="icons" />
          <BsInstagram className="icons" />
          <BsWhatsapp className="icons" />
          <AiFillTwitterCircle className="icons" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-sub">
         
          <p className="footer-sub-heading">Project</p>
          <div className="text">
            <p>Changelog</p>
            <p>Status</p>
            <p>License</p>
            <p>All Versions</p>
          </div>
        </div>
        <div className="footer-bottom-sub">
         
          <p className="footer-sub-heading">Community</p>
          <div className="text">
            <p>GitHub</p>
            <p>Issues</p>
            <p>Project</p>
            <p>Twitter</p>
          </div>
        </div>
        <div className="footer-bottom-sub">
          
          <p className="footer-sub-heading">Help</p>
          <div className="text">
            <p>Support</p>
            <p>Troubleshooting</p>
            <p>Contact Us</p>
           
          </div>
        </div>
        <div className="footer-bottom-sub">
        
          <p className="footer-sub-heading">Others</p>
          <div className="text">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>License</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer