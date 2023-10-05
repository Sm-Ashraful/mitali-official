import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const HeaderTop = () => {
  return (
    <div className="font-Allerta bg-gradient-to-r from-[#0479ae]  to-[#045c94] px-2 md:px-10 lg:px-16 2xl:px-20 py-2 2xl:py-4 flex justify-between items-center">
      <div className="flex text-[12px]">
        <div className="flex text-white items-center gap-2">
          <span className="border p-2 text-[14px] lg:text-xl 2xl:text-4xl">
            <MdOutlineLocationOn />
          </span>
          <div className="">
            <p className="md:text-xl 2xl:text-2xl"> Location</p>
            <p className="text-[9px] md:text-[16px] 2xl:text-[20px]">
              House 11, Road 7, Sector 10, Uttara, Dhaka-1230
            </p>
          </div>
        </div>
      </div>
      {/**
    <div className="flex text-blue-600 bg-white  items-center text-[12px] rounded overflow-hidden">
        <p className="px-3 py-3 shadow-md bg-[#ff9933] text-white">
          <BsTelephoneFill />
        </p>
        <span className="px-3 py-2">+123 4567 89</span>
      </div>
    */}
      <a
        href="tel:+09606-919505"
        className="flex text-white border hover:border-black hover:bg-white hover:text-black bg-transparent px-2 md:px-6 py-2  items-center text-[12px] md:rounded overflow-hidden gap-2"
      >
        <p className="text-[14px] 2xl:text-4xl">
          <BsTelephoneFill />
        </p>
        <span className="hidden md:block 2xl:text-2xl">+09606-919505</span>
      </a>
    </div>
  );
};

export default HeaderTop;
