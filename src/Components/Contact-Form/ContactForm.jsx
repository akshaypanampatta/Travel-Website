import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <div className="contactform">
      <p className="contact-subheading">Send a message to us!</p>
      <input type="text" placeholder="Name" className="input-contact" />
      <input type="email" placeholder="Email" className="input-contact" />
      <input type="text" placeholder="Subject" className="input-contact" />
      <input type="text" placeholder="Message" className="input-contact-message" />
      <button className='send-btn'>Send Message</button>
    </div>
  );
}

export default ContactForm