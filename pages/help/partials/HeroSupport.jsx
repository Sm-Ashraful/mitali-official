import React from "react";

const HeroSupport = () => {
  return (
    <div
      className="w-full h-[420px] lg:h-[460px] xl:h-[500px] relative hero-clip-path"
      style={{
        backgroundImage: 'url("/Image/supportWorld.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center", // Set an appropriate height for the hero section

        zIndex: "0",
      }}
    >
      <div className="flex  items-center px-2  md:px-16 2xl:px-20 w-full h-[75%]  text-slate-950  relative top-[5.5rem] z-10">
        <div className=" z-10  px-5 py-3">
          <h3 className="text-[26px] md:text-[42px] font-bold font-Work text-black text-center md:text-left">
            <span className="border-b-2 border-black">Contact With US</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSupport;
