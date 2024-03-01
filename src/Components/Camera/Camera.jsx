import React, { useRef, useEffect } from "react";
import "./index.css";
import useAnimationStore from "../../Store/AnimationState";
import { gsap } from "gsap";
export default function Camera() {
  const ref = useRef();
  const activeState = useAnimationStore((state) => state.activeState);
  useEffect(() => {
    if (activeState === 2) {
      gsap.to(ref.current, {
        duration: 1,
        opacity: 1,
        delay: 0.3,
        onStart: () => {
          ref.current.style.zIndex = 3;
        },
      });
    } else {
      gsap.to(ref.current, {
        opacity: 0,
      });
    }
  }, [activeState]);

  return (
    <div
      className='cam-container'
      ref={ref}
      style={{
        backgroundImage: `url(/N3_Assets/Camera/bg.png)`,
      }}
    >
      <div className='camera-header'>
        <div className=' w-full flex items-center justify-center flex-col gap-5 '>
          <img
            src='/assets/Camera/Leica.svg'
            className='w-20 object-contain z-[10]'
          />
          <span className=' !text-2xl w-full  !mt-4 font-medium'>
            Leica 50MP Optical Lens System
          </span>
          <hr
            style={{
              width: "30%",
              border: "1px solid #15F5BA",
            }}
          />
          <span className='italic font-normal !text-base'>
            Summilux f/1.6 Ultra-Wide Aperture
          </span>
        </div>

        {/* <div className='icon-cam'
           style={{
            transform: "translateY(-40px)"
          }}>
          <img
            src='/assets/icons_camera/03.svg'
            className='icon-cam-img'
            style={{
              // border : "2px solid #000",
              width: "80px",
              height: "80px",
             
            }}
          />
          <span className='icon-cam-heading'>8MP</span>
          <span className='icon-cam-text'>Ultra - wide</span>
        </div> */}
      </div>
    </div>
  );
}
