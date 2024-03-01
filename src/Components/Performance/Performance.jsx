import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { gsap } from "gsap";

const imageUrls = [
  "/N3_Assets/Performance/Charging/Charging.png",
  "/N3_Assets/Performance/Snapdragon/bg.png",
  // Add URLs for the other backgrounds here
];

export default function Performance() {
  const perfContRef = useRef();
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    gsap.to(perfContRef.current, {
      duration: 1,
      opacity: 1,
      delay: 0.7,
    });
    perfContRef.current.style.zIndex = 6;
  }, [activeSection]);

  const handleSwipeUp = () => {
    setActiveSection((prevSection) =>
      prevSection < 3 ? prevSection + 1 : prevSection
    );
  };

  return (
    <div
      ref={perfContRef}
      className="performance-container"
      style={{
        backgroundImage: `url(${imageUrls[activeSection]})`,
      }}
    >
      <div className="performance-text-div">
        {/* Add your content for each section here */}
      </div>
      <div className="swipe-up-indicator" onClick={handleSwipeUp}>
        Swipe Up
      </div>
    </div>
  );
}
