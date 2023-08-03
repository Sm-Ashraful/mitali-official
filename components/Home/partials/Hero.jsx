import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Branding from "./brand";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="w-full h-[70vh] lg:h-[100vh] xl:h-[90vh] relative hero-clip-path"
        style={{
          backgroundImage: 'url("/Image/yiying (2).png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center", // Set an appropriate height for the hero section
          backgroundBlendMode: "multiply",
          backgroundFilter: "blur(2px)",
          zIndex: "0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(248, 150, 64, 0.1) 0%, rgba(4, 92, 148, .3) 100%)",
            zIndex: "-1",
          }}
        />
        <div class="bg-clip-border custom-clip-path w-full h-12  bg-gradient-to-r from-[#045c94]  to-[#0479ae]"></div>
        <div className="flex flex-col justify-center items-center w-full h-[75%]  text-[#052149]  gap-4 z-10">
          <div className="flex flex-col justify-center items-center text-white z-10">
            <p className="font-[800] font-Work uppercase text-[#0f1235] text-[15px] md:text-[18px]">
              Going Beyond the Future
            </p>
            <h3 className=" md:text-[42px] font-bold font-Work">
              <span className="font-Work text-[50px] md:text-[60px] text-[#0f1235] font-[900] px-2 md:px-0">
                Welcome to
              </span>{" "}
              <span className="hidden md:inline">M/S Mitali International</span>
            </h3>
            <h4 className="md:hidden text-[30px] font-bold font-Work tracking-wide">
              M/S Mitali International
            </h4>
          </div>
          <h1 className="text-[18px] md:text-[32px] font-[900] bg-gradient-to-r text-transparent bg-clip-text from-[#F89640] to-[#ffffff] px-2 z-10">
            <Typewriter
              options={{
                strings: [
                  "Leading Innovation for a Brighter Future",
                  "Empowering Success through Excellence",
                  "Unlocking Your Business's Full Potential",
                  "Transforming Visions into Reality",
                  "Inspiring Solutions for Growth",
                  "Innovating with Purpose and Passion",
                  "Empowering Lives, Enriching Experiences",
                  "Creating Connections, Fostering Growth",
                  "Building Trust, Building Tomorrow",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h3 className="font-semibold text-center text-sm md:text-[22px] text-[#0f1235]">
            We collaborate with businesses to optimize operations, sustain
            profitable growth, and accelerate into the digital age.
          </h3>
          <button>
            <a
              href="#_"
              class="z-20 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white hover:text-black bg-[#0f1235]  rounded-lg group meeting-clip-path"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out rounded-full bg-[#F89640]  group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#045c94]"></span>
              <span class="relative">Request For Enquire</span>
            </a>
          </button>
        </div>
        <svg width="0" height="0">
          <defs>
            <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
              <path
                d="M 0,1
									L 0,0
									L 1,0
									L 1,1
									C .65 .90, .35 .90, 0 1
									Z"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Branding />
    </div>
  );
};

export default Hero;
