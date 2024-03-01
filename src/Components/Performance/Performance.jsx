import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { gsap } from "gsap";

const imageUrls = [
  "/N3_Assets/Performance/Charging/Charging.png",
  "/N3_Assets/Performance/Snapdragon/Snapdragonbg.png",
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
    <div className="performance-container-outer">
      <div
        ref={perfContRef}
        className="performance-container"
        style={{
          backgroundImage: `url(${imageUrls[activeSection]})`,
        }}
      >
        <div className="performance-text-div">
          <div className="charging-icon">
            <img
              src="/N1_Assets/Performance/Charging/icon.svg"
              alt=""
              className="icon-img"
            />
          </div>
          <span>Large 5000mAh Battery</span>
          <hr
            style={{
              width: "30%",
              border: "1px solid #15F5BA",
            }}
          />
          <span>Snapdragon® 4 Gen 2 Mobile Platform</span>
        </div>
        <div className="swipe-up-indicator" onClick={handleSwipeUp}>
          Swipe Up
        </div>
      </div>
    </div>
  );
}
