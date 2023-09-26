import React from "react";

const Branding = ({ setIsArrangeMeetingOpen }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/Image/OJO4YQ1.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center", // Set an appropriate height for the hero section
        backgroundBlendMode: "multiply",
      }}
      className="overflow-hidden -mt-5 w-full md:w-[50%] pt-5 md:pt-0 md:flex items-center h-[140px] bg-gradient-to-r from-[#045c94]  to-[#0479ae] absolute left-0 md:left-[25%] -bottom-[4%] lg:-bottom-[5%] 2xl:bottom-0 z-20 rounded-md"
    >
      <div className="h-full w-1 bg-yellow-400 hidden md:block"></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(to bottom,rgba(1.5, 85.5, 125, .8) 0%, rgba(2, 86, 125, 1) 100%)",
          zIndex: "-1",
        }}
      />
      <p className="text-[21px] md:text-[24px] xl:text-[32px] font-[600] text-white text-center pb-3 w-full md:w-3/5 leading-8">
        BPO & B2B Telemarketing Support
      </p>
      <div className="mx-auto w-full md:w-2/5 flex justify-center ">
        <button
          onClick={() => setIsArrangeMeetingOpen(true)}
          class="z-20 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-Allerta font-medium tracking-tighter text-black hover:text-white bg-[#F89640] rounded-lg group meeting-clip-path"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#0f1235] rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#045c94]"></span>
          <span class="relative">Arrange A Meeting</span>
        </button>
      </div>
      <div className="h-full w-1 bg-yellow-400 hidden md:block"></div>
    </div>
  );
};

export default Branding;
