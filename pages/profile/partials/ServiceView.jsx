import React from "react";

const ServiceView = () => {
  return (
    <div className="relative w-full mt-10 bg-[#fafafa] py-5">
      <div className="flex flex-wrap md:flex-nowrap px-2 gap-5 md:gap-0  md:px-16 2xl:px-20 max-w-full ">
        <div className="w-[45%] md:w-[35%]">
          <p className="text-center md:text-[38px] font-black">7+ </p>
          <p className="text-center font-black">Years Of Service</p>
        </div>
        <div className="w-[45%] md:w-[35%]">
          <p className="text-center md:text-[38px] font-black">
            <span className="text-sm">US</span> $50{" "}
            <span className="text-sm">million+</span>
          </p>
          <p className="text-center font-black">Total Revenue</p>
        </div>
        <div className="w-[45%] md:w-[35%]">
          <p className="text-center md:text-[38px] font-black">20+</p>
          <p className="text-center font-black">Countries We Are Present In</p>
        </div>
        <div className="w-[45%] md:w-[35%]">
          <p className="text-center md:text-[38px] font-black">100+</p>
          <p className="text-center font-black">Employees</p>
        </div>
        <div className="w-full md:w-[35%]">
          <p className="text-center md:text-[38px] font-black">30+</p>
          <p className="text-center font-black">Trusted client</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceView;
