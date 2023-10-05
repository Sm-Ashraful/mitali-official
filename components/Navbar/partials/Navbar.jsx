import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Icon } from "@iconify/react";
import Dropdown from "./Dropdown";

const Nav = ({ className }) => {
  const [mobileView, setMobileView] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [menuTitle, setMenuTitle] = useState("");
  useEffect(() => {
    // Function to check if the viewport width is less than a certain threshold (e.g., 768 pixels for typical mobile devices)
    const checkIfMobile = () => {
      const isMobile = window.innerWidth < 768; // You can adjust this threshold as needed
      setMobileView(isMobile);
    };

    // Initial check when the component mounts
    checkIfMobile();

    // Add a resize event listener to re-check if the viewport size changes
    window.addEventListener("resize", checkIfMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  const menuItem = [
    {
      title: "Home",
      url: "/",
      icon: "ant-design:home-outlined",
    },
    {
      title: "Our Profile",
      url: "/profile",
      icon: "ant-design:profile-twotone",
    },
    {
      title: "Service",
      url: "/service",
      icon: "mdi:account-service-outline",
    },
    {
      title: "Business",
      url: "/business",

      icon: "ic:round-business-center",
    },
    {
      title: "Support",
      url: "/help",

      icon: "ic:sharp-support-agent",
    },
    {
      title: "Career",
      url: "/career",

      icon: "ic:twotone-work",
    },
  ];

  const handleToggle = (menu) => {
    if (menu.children) {
      // If the clicked menu is the same as the currently open menu, close it
      if (menu.title === menuTitle) {
        setToggleDropdown(!toggleDropdown);
      } else {
        setToggleDropdown(true); // Open the dropdown for the clicked menu
      }
    }

    setMenuTitle(menu.title);
  };

  return (
    <ul
      className={`relative font-Allerta text-white font-[500] 2xl:text-[26px] ${className} text-[25px] md:text-[16px] pl-5 md:pl-0 pt-10 md:pt-0`}
    >
      {menuItem.map((menu, idx) => {
        return (
          <li
            key={idx}
            className=" flex  items-center gap-1 pt-5 md:pt-0 navItem"
            onClick={() => handleToggle(menu)}
          >
            {mobileView ? <Icon icon={menu.icon} /> : null}

            <Link href={menu.url || "#"} className="pl-2 md:pl-0 ">
              {menu.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
