import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ title, des1, des2, des3, icon }) => {
  return (
    <div className="w-full p-5 border border-gray-300 rounded-sm cursor-pointer">
      <div
        className="flex justify-between items-center font-Allerta text-[#0479ae] pb-5"
        style={{ fontSize: "calc(18rem / 16)" }}
      >
        <h2>{title}</h2>

        <p className="w-[20px] ">
          <FontAwesomeIcon className="text-[20px]" icon={icon} />
        </p>
      </div>
      <ul className="px-10 list-disc text-[#707179] font-Inter text-[10pt] leading-[26px]">
        <li>{des1}</li>
        <li>{des2}</li>
        <li>{des3}</li>
      </ul>
    </div>
  );
};

export default ServiceCard;
