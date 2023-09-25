import React from "react";

const HeroProfile = () => {
  return (
    <div
      className="w-full h-[70vh] lg:h-[80vh] xl:h-[90vh] relative hero-clip-path"
      style={{
        backgroundImage: 'url("/Image/aboutus.jpg")',
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
          <h3 className=" md:text-[42px] font-bold font-Work text-white">
            M/S Mitali International
          </h3>
          <p className="text-white">
            We understand the critical importance of seamless BPO services,
            effective telemarketing, and reliable outsourcing solutions for
            businesses today.
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

export default HeroProfile;
