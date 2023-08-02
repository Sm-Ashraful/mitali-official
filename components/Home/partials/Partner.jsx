import React from "react";
import Review from "./Review";

const Partner = () => {
  return (
    <div className="mt-20">
      <p className="text-[16px] font-[800] text-center pb-3 text-gray-400">
        TRUSTED AT SCALE
      </p>
      <div className="flex w-full justify-center items-center gap-10 ">
        <p className="w-[100px] h-[60px] border p-2 flex justify-center items-center">
          <img src="/Image/alibaba.png" alt="" className="w-full" />
        </p>
        <p className="w-[100px] h-[60px] border p-2 flex justify-center items-center">
          <img src="/Image/yiying.png" alt="" className="w-full" />
        </p>
        <p className="w-[100px] h-[60px] border p-2 flex justify-center items-center">
          <img src="/Image/mash logo.png" alt="" className="w-full" />
        </p>
        <p className="w-[100px] h-[60px] border p-2 flex justify-center items-center">
          <img src="/Image/amazon.png" alt="" className="w-full" />
        </p>
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
};

export default Partner;
