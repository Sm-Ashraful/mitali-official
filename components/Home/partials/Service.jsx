import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

import {
  faBriefcase,
  faDisplay,
  faHeadset,
  faLifeRing,
  faShoppingBasket,
  faKeyboard,
  faDigitalTachograph,
  faPencilAlt,
  faCode,
  faFileExport,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const serviceCards = [
  <ServiceCard
    key={0}
    icon={faShoppingBasket}
    title={"eCommerce & Retails"}
    des1={"Make your eCommerce business future ready"}
    des2={"3x more revenue"}
    des3={"Explore your product in International market"}
  />,
  <ServiceCard
    key={1}
    icon={faCode}
    title={"Web Development & Design"}
    des1={"Optimize User Experience"}
    des2={"Responsive Design"}
    des3={"SEO Integration"}
  />,
  <ServiceCard
    key={2}
    icon={faFileExport}
    title={"Export & Import Solution"}
    des1={"Global Logistics Management"}
    des2={"Customs Documentation"}
    des3={"Trade Compliance Consulting"}
  />,
  <ServiceCard
    key={3}
    icon={faDisplay}
    title={"Graphics Design"}
    des1={"Branding and Identity"}
    des2={"Visual Content Creation"}
    des3={"Print and Digital Design"}
  />,
  <ServiceCard
    key={4}
    icon={faHeadset}
    title={"Telemarketing and sales"}
    des1={"Targeted Lead Generation"}
    des2={"Customer Relationship Management"}
    des3={"Sales Performance Analytics"}
  />,
  <ServiceCard
    key={5}
    icon={faDigitalTachograph}
    title={"Digital Marketing"}
    des1={"Social Media Management"}
    des2={"Search Engine Advertising (SEA)"}
    des3={" Email Marketing Campaigns"}
  />,
  <ServiceCard
    key={6}
    icon={faLifeRing}
    title={"Customer Support"}
    des1={"24/7 Customer Assistance"}
    des2={"Multi-channel Support"}
    des3={"Issue Resolution and Feedback"}
  />,
  <ServiceCard
    key={7}
    icon={faBriefcase}
    title={"Back Office Support"}
    des1={"Administrative Assistance"}
    des2={"Data Processing and Management"}
    des3={"Process Automation"}
  />,

  <ServiceCard
    key={8}
    icon={faKeyboard}
    title={"Data Entry & Lead Generation"}
    des1={"Accurate Data Entry"}
    des2={"Lead Identification and Profiling"}
    des3={"Database Cleansing"}
  />,

  <ServiceCard
    key={9}
    icon={faHeadset}
    title={"Virtual Assistance"}
    des1={"Administrative Virtual Assistance"}
    des2={"Personalized Virtual Support"}
    des3={"Task Delegation and Efficiency"}
  />,
];

const Service = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServiceCards = showAll ? serviceCards : serviceCards.slice(0, 6);

  return (
    <div className="px-2 md:px-16 pt-16 pb-10">
      <h2 className="text-[38px] leading-9 text-[#464855] text-center font-[800] mb-[20px]">
        <p className="text-slate-500 font-Rubik text-[8px] md:text-[14px]">
          Building Trust, Building Tomorrow
        </p>
        <span>Meet Our Service</span>
      </h2>
      <h4 className="text-center text-[#464855] mb-[3rem] text-[20px]">
        We offer a comprehensive inbound and outbound call center solution,
        coupled with top-notch customer care and support services. Our expertise
        extends beyond these domains, as we boast a team of specialized
        professionals from technical backgrounds, encompassing a wide range of
        BPO services.
      </h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-8">
        {visibleServiceCards}
      </div>
      {!showAll && (
        <div className="mx-auto pt-5 gap-3 w-full flex flex-col items-center justify-center cursor-pointer">
          <p
            className="w-[20px] text-[#F89640] animate-bounce"
            onClick={() => setShowAll(true)}
          >
            <FontAwesomeIcon icon={faAnglesDown} />
          </p>
          <p className="text-[14px] font-semibold">See More</p>
        </div>
      )}
    </div>
  );
};

export default Service;
