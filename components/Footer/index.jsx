import Link from "next/link";
import React, { useState } from "react";

import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

const Footer = () => {
  const [linkOpen, setLinkOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleLink = (linkName) => {
    if (activeLink === linkName) {
      // If the clicked link is already active, close it
      setActiveLink(null);
    } else {
      // Otherwise, open the clicked link
      setActiveLink(linkName);
    }
  };

  return (
    <div className="h-auto  w-full max-w-[1920px] mx-auto   pt-8 md:pt-20 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row px-2 md:px-16 pb-5 md:pb-0 gap-5 md:gap-10">
        <div className="w-full md:w-[25%] flex flex-col  items-center md:items-start">
          <div className="w-full md:w-[80%] flex justify-center items-center">
            <img
              src="/Image/logo png.png"
              alt="logo.jpg"
              className="md:w-full w-[75%]"
            />
          </div>
          <p className="py-5 text-[10pt] text-black font-Inter leading-[26px] ">
            Our comprehensive services cover the entire customer journey,
            featuring call center support, customer assistance, lead generation,
            digital marketing, and back-office solutions
          </p>
          <ul className="flex gap-5 text-black text-2xl">
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
          <h3
            className="flex justify-between items-center font-bold font-Allerta text-black uppercase border-0 md:border-b"
            style={{ fontSize: "calc(18rem / 16)" }}
          >
            <p>Useful Links</p>
            <p className="md:hidden" onClick={() => toggleLink("link")}>
              {activeLink === "link" ? <LuMinusCircle /> : <LuPlusCircle />}
            </p>
          </h3>

          <div
            className={`md:block pt-5 text-[15px] text-slate-700 leading-[30px] font-Work ${
              activeLink === "link" ? "block" : "hidden "
            }`}
          >
            <p>
              <Link href={"/service"}>Service</Link>
            </p>
            <p>
              <Link href={"/business"}>Business</Link>
            </p>
            <p>Terns & Conditions</p>
            <p>Privacy Policy</p>
            <p>
              <Link href={"/profile"}>About</Link>
            </p>

            <p>
              <Link href={"/help"}>Contact</Link>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3
            className="flex justify-between items-center font-bold font-Allerta text-black uppercase border-0 md:border-b"
            style={{ fontSize: "calc(18rem / 16)" }}
          >
            <p>Contact with us</p>
            <p className="md:hidden" onClick={() => toggleLink("contact")}>
              {activeLink === "contact" ? <LuMinusCircle /> : <LuPlusCircle />}
            </p>
          </h3>

          <div
            className={`md:block pt-5 text-[15px] text-slate-700 leading-[30px] font-Work ${
              activeLink === "contact" ? "block" : "hidden"
            }`}
          >
            <p>For Career Concern</p>
            <p> Call: 09606-919505</p>
            <p>Or Send Us Your CV</p>
            <p>query@mitaliint.com</p>
          </div>

          <div
            className={` md:block pt-5 text-[15px] text-slate-700 leading-[30px] font-Work ${
              activeLink === "contact" ? "block" : "hidden"
            }`}
          >
            <p>For Business Queries</p>
            <p> BD: +880 9606 919505</p>
            <p>USA: +1 (646) 208-8653</p>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3
            className="flex justify-between items-center font-bold font-Allerta text-black uppercase border-0 md:border-b"
            style={{ fontSize: "calc(18rem / 16)" }}
          >
            <p>Location</p>
            <p className="md:hidden" onClick={() => toggleLink("location")}>
              {activeLink === "location" ? <LuMinusCircle /> : <LuPlusCircle />}
            </p>
          </h3>

          <div
            className={`md:block pt-5 text-[15px] text-slate-700 leading-[30px] font-Work ${
              activeLink === "location" ? "block" : "hidden"
            }`}
          >
            <p>USA Office: 15925 NORMAL RD JAMAICA, NY 11432</p>
          </div>
          <div
            className={` md:block pt-5 text-[15px] text-slate-700 leading-[30px] font-Work ${
              activeLink === "location" ? "block" : "hidden"
            }`}
          >
            <p>
              BD Office: Blessing Sagor Shaikat Bhabon, 8th Floor, House 12,
              Sector 11, Sonargaon Janapath Road, Uttara, Dhaka 1230
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#013953] py-2 px-2 md:px-16 w-full flex justify-center items-center font-bold">
        <p className="text-center text-sm text-white">
          Copyright © 2015 - 2023 M/S Mitali International
        </p>
      </div>
    </div>
  );
};

export default Footer;
