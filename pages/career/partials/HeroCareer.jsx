import React from "react";

const HeroCareer = () => {
  return (
    <div
      className="w-full h-[420px] lg:h-[460px] xl:h-[500px] bg-[#0A223A] bg-opacity-[.4]  relative hero-clip-path"
      style={{
        backgroundImage: 'url("/Image/career.avif")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center", // Set an appropriate height for the hero section
        backgroundBlendMode: "multiply",
        backgroundFilter: "blur(2px)",
        zIndex: "0",
      }}
    >
      <div className="flex  items-center px-2  md:px-16 2xl:px-20 w-full h-[75%]  text-slate-950  relative top-[5.5rem] z-10">
        <div className=" z-10  px-5 py-3">
          <h3 className="text-[26px] md:text-[42px] font-bold font-Work text-white text-center md:text-left">
            Make your career with M/S Mitali International
          </h3>
          <p className="text-white text-center md:text-left font-bold">
            Unlock Your Potential: Join Our Dynamic Team Today
          </p>
          <h5 className="text-white text-center md:text-left font-bold text-[18px] md:text-[22px] mt-3 md:mt-5">
            Send Your CV or Call Us:
          </h5>
          <div className="pt-3 flex flex-col md:flex-row gap-2 md:gap-5">
            <button className="bg-gradient-to-r from-[#0479ae]  to-[#045c94] px-5 py-2 text-white font-semibold rounded-md">
              career@mitaliint.com
            </button>
            <button className=" bg-gradient-to-r from-[#0479ae]  to-[#045c94] px-5 py-2 text-white font-semibold rounded-md">
              +09606-919505
            </button>
          </div>
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

export default HeroCareer;
