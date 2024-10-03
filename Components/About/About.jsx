import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-heading">
      <img src = "../utils/logo.jpeg" className='about-logo'/>
        <p className="about-about">About Us</p>
        <p className = "about-text">
          D7 Digital Studio is a premier creative agency located in Tamil Nadu, India, dedicated to providing a wide range of services that include Photography & Videos, Design Studio, Social Media Marketing, and Printing. Our mission is to deliver exceptional quality and innovative solutions that help our clients stand out in today's competitive landscape.
        </p>
      </div>
    </div>
  );
}

export default About;