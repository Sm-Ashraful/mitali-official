import React from "react";
import Navigation from "./Navigation";
import Nav from "./Navbar";

import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen ? (
        <div className="flex flex-col justify-between absolute top-0 left-0 bg-gradient-to-b from-[#0272A7] to-[#013953] w-full h-[600px] z-50">
          <Nav />
          <ul className=" flex gap-10 px-5 text-[#0479ae] pb-10">
            <li>
              <div class="hexagon-wrapper">
                <div class="hexagon">
                  <span>
                    <a href="https://www.facebook.com/mitaliint.info">
                      <FaFacebookF />
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="hexagon-wrapper">
                <div class="hexagon">
                  <span>
                    <a href="https://www.linkedin.com/company/m-s-mitali-international/">
                      <FaLinkedin />
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="hexagon-wrapper">
                <div class="hexagon">
                  <span>
                    <FaWhatsapp />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
