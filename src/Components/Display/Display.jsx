import React, { useRef, useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";
import useAnimationStore from "../../Store/AnimationState";

export default function Display() {
  const ref = useRef();
  const activeState = useAnimationStore((state) => state.activeState);
  useEffect(() => {
    if (activeState === 3) {
      gsap.to(ref.current, {
        duration: 1,
        opacity: 1,
        delay: 0.4,
      });
      ref.current.style.zIndex = 6;
    } else {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => {
          ref.current.style.zIndex = 1;
        },
      });
    }
  }, [activeState]);

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `url(/N3_Assets/Display/bg.png)`,
      }}
      className='display-container'
    >
      <div className='display-icon-header'>
        <div className='display-icon-div'>
          <span className=' text-3xl mt-5 px-14 text-left'>
            Dynamic 1-120Hz LTPO 1.5k AMOLED
          </span>
        </div>
      </div>
      <div className='displaycamera-header'>
        <div className='displayicon-cam'>
          <img
            src='/N3_Assets/Display/Icons/Brightness.svg'
            className='displayicon-cam-img'
          />
        </div>
        <div className='icon-cam'>
          <img
            src='/N3_Assets/Display/Icons/Dolby.svg'
            className='displayicon-cam-img'
          />
        </div>
      </div>
    </div>
  );
}
