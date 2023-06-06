import React from "react";
import BannerImage from "../assets/2blackbean.jpg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter full name..."
            type="text"
          />
          <label htmlFor="email">EMail</label>
          <input
            id="email"
            name="email"
            placeholder="Enter an E-Mail..."
            type="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message..."
            type="text"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
