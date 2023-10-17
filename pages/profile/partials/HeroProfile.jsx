import React from "react";

const HeroProfile = () => {
  return (
    <div
      className="w-full h-[420px] lg:h-[460px] xl:h-[500px] bg-[#0A223A] bg-opacity-[.4] relative hero-clip-path"
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
        <div className=" z-10   px-5 py-3">
          <h3 className="text-[26px] md:text-[42px] font-bold font-Work text-white text-center md:text-left">
            M/S Mitali International
          </h3>
          <p className="text-white text-center md:text-left font-bold">
            The Company was successfully established on October 6th, 2015.Since
            2014 Mitali expands its business up to 400%. We have worked with up
            to 30 clients/organizations with different projects. Got BACCO
            membership in early 2021. Nowadays we have a large operational team
            of 80 employees and we have a gigantic working space of 3000 sq ft.
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
