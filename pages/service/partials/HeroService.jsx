import React from "react";

const HeroService = () => {
  return (
    <div
      className="w-full h-[420px] lg:h-[460px] xl:h-[500px] relative hero-clip-path"
      style={{
        backgroundImage: 'url("/Image/service2.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center", // Set an appropriate height for the hero section
        backgroundBlendMode: "multiply",
        backgroundFilter: "blur(2px)",
        zIndex: "0",
      }}
    >
      <div className="flex  items-center px-2  md:px-16 2xl:px-20 w-full h-[75%]  text-slate-950  relative top-[5.5rem] z-10">
        <div className=" z-10 bg-black bg-opacity-[.2]  px-5 py-3">
          <h3 className="text-[26px] md:text-[42px] font-bold font-Work text-white text-center md:text-left">
            Our Services
          </h3>
          <p className="text-white text-center md:text-left">
            Empowering Your Business with Comprehensive Solutions
          </p>
        </div>
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
  );
};

export default HeroService;
