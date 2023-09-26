import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Icon } from "@iconify/react";

const Nav = ({ className }) => {
  const [mobileView, setMobileView] = useState(false);
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
      children: false,
      icon: "ant-design:home-outlined",
    },
    {
      title: "Our Profile",
      url: "/profile",
      children: false,
      icon: "ant-design:profile-twotone",
    },
    {
      title: "Service",
      url: "/service",
      children: true,
      icon: "mdi:account-service-outline",
    },
    {
      title: "Business",
      url: "/business",
      children: true,
      icon: "ic:round-business-center",
    },
    {
      title: "Support",
      url: "/help",
      children: true,
      icon: "ic:sharp-support-agent",
    },
    {
      title: "Career",
      url: "/career",
      children: true,
      icon: "ic:twotone-work",
    },
  ];

  return (
    <ul
      className={`font-Allerta text-white font-[500] 2xl:text-[26px] ${className} text-[25px] md:text-[16px] pl-5 md:pl-0 pt-10 md:pt-0`}
    >
      {menuItem.map((menu, idx) => {
        return (
          <li key={idx} className="flex  items-center gap-1 pt-5 md:pt-0">
            {mobileView ? <Icon icon={menu.icon} /> : null}

            <Link href={menu.url} className="pl-2 md:pl-0">
              {menu.title}
            </Link>
            {menu.children ? <AiOutlineCaretDown /> : null}
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
