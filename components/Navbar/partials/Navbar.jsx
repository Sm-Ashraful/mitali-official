import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const Nav = ({ className }) => {
  return (
    <ul
      className={`font-Allerta text-white font-[500] 2xl:text-[26px] ${className}`}
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

export default Nav;
