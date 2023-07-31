import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";

const Navigation = () => {
  const [nav, setNav] = useState("");
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-[#013953] transition ease transform duration-300`;

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        // User is scrolling up, hide the navigation
        setNav("");
      } else if (currentScrollY > 200 && window.innerWidth < 768) {
        setNav("fixed top-0 left-0 bg-[#F0EAD6]");
      } else if (currentScrollY > 500) {
        setNav("fixed top-0 left-0 bg-[#F0EAD6]");
      } else {
        setNav("");
      }

      // Update the previous scroll position with the current one
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center border-b px-2 md:px-16 py-3 ${nav} z-50`}
    >
      <div className="w-[40%] mx-auto md:w-[14%]">
        <img src="/Image/logo png.png" alt="logo.jpg" />
      </div>
      <div className="md:hidden">
        <button
          className="flex flex-col h-10 w-10 border-2 border-[#0272A7] justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
      <nav className="hidden md:block bg-gradient-to-b from-[#0272A7] to-[#013953] flex-1 mx-[6rem] rounded-md py-3">
        <ul className="flex font-Allerta gap-8 pl-5 text-white font-[500] ">
          <li>Home</li>
          <li>Our Profile</li>
          <li className="flex justify-center items-center gap-1">
            <span> Service</span>
            <AiOutlineCaretDown />
          </li>
          <li className="flex justify-center items-center  gap-1">
            <span>Business</span>
            <AiOutlineCaretDown />
          </li>
          <li className="flex justify-center items-center  gap-1">
            <span>Support</span>
            <AiOutlineCaretDown />
          </li>
          <li className="flex justify-center items-center  gap-1">
            <span>Career</span>
            <AiOutlineCaretDown />
          </li>
        </ul>
      </nav>
      <div>
        <ul className="hidden md:flex gap-5 text-[#0479ae] ">
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
    </div>
  );
};

export default Navigation;
