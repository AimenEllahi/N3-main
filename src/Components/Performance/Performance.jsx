import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { MoveDown } from "lucide-react";
import { gsap } from "gsap";

const imageUrls = [
  "/N3_Assets/Performance/Charging/Charging.png",
  "/N3_Assets/Performance/Snapdragon/Snapdragonbg.png",

  // Add URLs for the other backgrounds here
];

const PerformanceSection = ({ background, info, isScroll }) => {
  return (
    <div
      style={{ scrollSnapAlign: "start" }}
      className='h-screen w-full relative'
    >
      {info}

      <img src={background} alt='' className='h-full w-full object-cover' />
      {isScroll && (
        <div className='text-white absolute bottom-10 left-[50%] translate-x-[-50%] flex flex-col items-center gap-y-1.5 '>
          <span>Swipe</span>
          <MoveDown color='white' size={16} />
        </div>
      )}
    </div>
  );
};

export default function Performance() {
  const perfContRef = useRef();

  const charging = (
    <div className=' absolute top-16 text-white left-0 w-full flex items-center justify-center flex-col gap-5 '>
      <img
        src='/assets/Performance/Charging/icon.svg'
        className='w-14 object-contain z-[10]'
      />
      <span className=' !text-2xl w-full  !mt-4 font-medium'>
        90W Xiaomi HyperCharge
      </span>
      <hr className='w-1/3 border border-[#15F5BA]' />
      <span className='italic font-normal !text-base'>
        50W Wireless TurboCharge
      </span>
    </div>
  );

  const IPSRated = (
    <div className=' absolute top-20 text-white left-0 w-full flex items-center justify-center flex-col gap-5 '>
      <span className=' !text-3xl w-full  !mt-4 font-normal'>IP68 Rated</span>
    </div>
  );
  const snapdragon = (
    <div className=' absolute top-16 text-white left-0 w-full flex items-center justify-center flex-col gap-3 '>
      <span className=' !text-2xl w-full  !mt-4 font-medium'>
        Leading Snapdragon® 8 Gen 3
      </span>
      <span className=' font-[300] !text-lg'>Ultra-High Speed LPDDRX5</span>
      <hr className='w-1/3 border border-[#e2b772]' />
      <span className=' font-[300] text-lg'>UFS 4.0</span>
    </div>
  );
  const ultraThin = (
    <div className=' font-[300] text-[1.7rem] absolute top-16 text-black left-0 w-3/5 flex items-start text-start px-10 justify-center flex-col gap-3 '>
      <span>Ultra-Thin Bezel Design</span>
      <hr className='w-1/3 border border-[#5b917f]' />
      <span>Clous-De-Paris Canera Design</span>
    </div>
  );
  return (
    <div
      ref={perfContRef}
      style={{ scrollSnapType: "y mandatory" }}
      className='h-screen overflow-y-scroll w-full absolute top-0  bg-white z-[5] hide-scrollbar'
    >
      <PerformanceSection
        background={"/assets/Performance/Charging/Charging.png"}
        info={charging}
        isScroll
      />
      <PerformanceSection
        background={"/assets/Performance/IPSRated/bg.png"}
        info={IPSRated}
        isScroll
      />
      <PerformanceSection
        background={"/assets/Performance/Snapdragon/bg.png"}
        info={snapdragon}
        isScroll
      />
      <PerformanceSection
        info={ultraThin}
        background={"/assets/Performance/UltraThin/bg.png"}
      />
    </div>
  );
}
