import React from "react";
import BannerImage from "../assets/1beef.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          suscipit dicta saepe soluta! Animi blanditiis eaque labore ullam vel,
          veritatis doloremque hic quo unde atque cum voluptates, aliquid nemo
          optio!
        </p>
      </div>
    </div>
  );
}

export default About;
