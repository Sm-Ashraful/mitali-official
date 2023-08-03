import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const Navbar = ({ className }) => {
  return (
    <ul
      className={`font-Allerta gap-5 xl:gap-12 pl-6 xl:pl-10 text-white font-[500] 2xl:text-[26px] ${className}`}
    >
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
  );
};

export default Navbar;
