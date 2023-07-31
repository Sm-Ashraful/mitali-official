import React from "react";

const StepCard = ({ link, title, des }) => {
  return (
    <div className="w-full p-4 border">
      <div className="w-[60%] mx-auto">
        <img src={link} alt="" />
      </div>
      <div className="pt-5">
        <h3
          className="text-[20px] font-bold font-Allerta text-[#0479ae]"
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
