import React from "react";
import Form from "/components/Form";
import { FaClock, FaHome, FaMailBulk, FaPhone, FaTimes } from "react-icons/fa";

const HelpDetails = () => {
  return (
    <div className="relative mt-10 w-full bg-white">
      <div className="px-2  md:px-16 2xl:px-20 grid md:grid-cols-2">
        <div>
          <Form formTitle="Contact For Support" type="help" />
        </div>
        <div className="mt-10 md:mt-0">
          <h2
            className={`uppercase text-[22px] font-bold  border-b-2 border-black `}
          >
            Contact Information
          </h2>
          <p className="text-[#777] pt-3">
            We value your feedback and welcome your thoughts on our customer
            service, merchandise, website, or any other topics you would like to
            share with us. We appreciate any comments and suggestions you may
            have, as they help us improve and provide a better experience for
            our customers. Your input is highly appreciated and will be taken
            into consideration. Thank you for taking the time to provide us with
            your valuable feedback.
          </p>
          <p className="flex gap-3 pt-5 items-center text-[#777]">
            <FaHome /> Blessing Sagor Shaikat Bhabon, 8th Floor, House 12,
            Sector 11, Sonargaon Janapath Road, Uttara, Dhaka 1230
          </p>
          <p className="flex gap-3 pt-5 items-center text-[#777]">
            <FaPhone /> +09606-919505
          </p>
          <p className="flex gap-3 pt-5 items-center text-[#777]">
            <FaMailBulk /> query@mitaliint.com
          </p>
          <p className="flex gap-3 pt-5 items-center text-[#777]">
            <FaClock /> 24/7 supports
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpDetails;
