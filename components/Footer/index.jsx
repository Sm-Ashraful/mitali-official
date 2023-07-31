import React from "react";

import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-auto md:h-[75vh] w-full bg-slate-700 mt-20 pt-20 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row px-2 md:px-16 gap-10">
        <div className="w-full md:w-[25%]">
          <div className="w-[80%] flex justify-center items-center">
            <img src="/Image/logo.jpg" alt="logo.jpg" />
          </div>
          <p className="py-5 text-[10pt] text-white font-Inter leading-[26px] ">
            Our comprehensive services cover the entire customer journey,
            featuring call center support, customer assistance, lead generation,
            digital marketing, and back-office solutions
          </p>
          <ul className="flex gap-5 text-white text-2xl">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaWhatsapp />
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className=" text-[24px] font-bold font-Allerta text-[#fff] uppercase border-b">
            Useful Links
          </h3>
          <div className="pt-5 text-[15px] text-slate-300 leading-[30px] font-Work">
            <p>Service</p>
            <p>Solution</p>
            <p>Terns & Conditions</p>
            <p>Privacy Policy</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className=" text-[24px] font-bold font-Allerta text-[#fff] uppercase border-b">
            Contact with us
          </h3>
          <div className="pt-5 text-[15px] text-slate-300 leading-[30px] font-Work">
            <p>For Career Concern</p>
            <p> Call: 09606-919505</p>
            <p>Or Send Us Your CV</p>
            <p>info@mitaliint.com</p>
          </div>

          <div className="pt-5 text-[15px] text-slate-300 leading-[30px] font-Work">
            <p>For Business Queries</p>
            <p> BD: +880 1234 5684 90</p>
            <p>USA: +1 931 422 8003</p>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className=" text-[24px] font-bold font-Allerta text-[#fff] uppercase border-b">
            Location
          </h3>
          <div className="pt-5 text-[15px] text-slate-300 leading-[30px] font-Work">
            <p>In America: 4301 Pleasantdale Rd, Unit G Doraville, GA 30340</p>
          </div>
          <div className="pt-5 text-[15px] text-slate-300 leading-[30px] font-Work">
            <p>
              In Bangladesh: House 11, Road 7, Sector 10, Uttara, Dhaka-1230
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[40px] px-2 md:px-16 w-full flex justify-center items-center font-bold">
        <p>Copyright © 2015 - 2023 M/S Mitali International Limited</p>
      </div>
    </div>
  );
};

export default Footer;
