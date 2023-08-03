import React from "react";

const StepCard = ({ link, title, des }) => {
  return (
    <div className="w-full p-4 border relative">
      <div className="w-[40%] md:w-[30%] mx-auto py-6">
        <img src={link} alt="" />
      </div>
      <div className="pt-5 lg:pt-10">
        <h3
          className="font-bold font-Allerta text-[#0479ae]"
          style={{ fontSize: "calc(18rem / 16)" }}
        >
          {title}
        </h3>
        <p className="pt-3 text-[10pt] font-Inter ">{des}</p>
      </div>
    </div>
  );
};

export default StepCard;
