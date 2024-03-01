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

    // Add event listener for swipe detection
    perfContRef.current.addEventListener("touchstart", handleTouchStart, false);
    perfContRef.current.addEventListener("touchmove", handleTouchMove, false);

    return () => {
      // Clean up event listeners on component unmount
      perfContRef.current.removeEventListener(
        "touchstart",
        handleTouchStart,
        false
      );
      perfContRef.current.removeEventListener(
        "touchmove",
        handleTouchMove,
        false
      );
    };
  }, [activeSection]);

  // Variables to store touch start position
  let startY = 0;

  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const touchMoveY = e.touches[0].clientY;
    const touchDiffY = touchMoveY - startY;

    // Swipe up detected, change background
    if (touchDiffY > 0) {
      handleSwipeUp();
    }
  };

  const handleSwipeUp = () => {
    setActiveSection((prevSection) =>
      prevSection < imageUrls.length - 1 ? prevSection + 1 : prevSection
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
  );
}
