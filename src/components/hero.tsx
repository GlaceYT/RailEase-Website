import React, { useState, useEffect } from "react";
import "./Hero.css"; 
import home from "../assets/Icons/home.png";
const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0); 
  const [isFading, setIsFading] = useState(false); 

  const sentences = [
    "Welcome to the Future",
    "Experience Innovation",
    "Crafting Excellence",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
  
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setIsFading(false);
      }, 600);
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);
  

  const currentSentence = sentences[textIndex];

  return (
    <div className="hero-section">
      {/* Background Meteors */}
      <div className="meteor-container">
        <div className="meteor"></div>
        <div className="meteor"></div>
        <div className="meteor"></div>
      </div>

      {/* Light Beams */}
      <div className="light-beam left-beam"></div>
      <div className="light-beam right-beam"></div>
        
      <div className="hero-image">
        <img src={home} alt="Small decorative" />
      </div>
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1
            className={`hero-heading ${isFading ? "fade-out" : "fade-in"}`}
          >
            {currentSentence.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="highlighted-text">
              {currentSentence.split(" ").slice(-1)}
            </span>
          </h1>

          <p className="hero-subtitle">
            Elevate your experience with cutting-edge technology
          </p>

          <button className="cta-button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
