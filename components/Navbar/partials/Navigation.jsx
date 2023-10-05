import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import useDimensions from "@/components/Hook/use-dimension";
import Nav from "./Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStateValue } from "@/context/StateProvider";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navigation = ({ setIsSidebarOpen, isHomePage }) => {
  const [nav, setNav] = useState("");
  const [onav, setOnav] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [{ isSidebarOpen }, dispatch] = useStateValue();
  const containerRef = useRef(null);
  const router = useRouter();
  // const { height } = useDimensions(containerRef);
  const genericHamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-[#013953] transition ease transform duration-300`;

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        // User is scrolling up, hide the navigation
        setNav("");
      } else if (currentScrollY > 500 && window.innerWidth < 768) {
        setNav("fixed top-0 left-0");
        setOnav("bg-white");
      } else if (currentScrollY > 700) {
        setNav("fixed top-0 left-0");
        setOnav("bg-white");
      } else {
        setNav("");
      }
      if (currentScrollY < 700) {
        setOnav("");
      }

      // Update the previous scroll position with the current one
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsOpen(false);
    }
  }, [isSidebarOpen]);

  const onMenuClickHandler = () => {
    setIsOpen(!isOpen);
    dispatch({ type: "setSidebar", item: !isSidebarOpen });
  };

  return (
    <div
      className={`w-full flex justify-between items-center border-b px-2  md:px-16 2xl:px-20 py-3  z-50 ${
        !isHomePage
          ? `bg-transparent fixed top-0 left-0 ${onav}`
          : `${nav} bg-white`
      }`}
    >
      <Link href="/" className={`w-[40%] mx-auto md:w-[14%] `}>
        <img
          src={!isHomePage ? "/Image/logo1.jpg" : "/Image/logo png.png"}
          alt="logo.jpg"
          className="w-full h-full"
        />
      </Link>

      <div className="md:hidden">
        <button
          className="flex flex-col h-10 w-10 border-2 border-[#0272A7] justify-center items-center group"
          onClick={onMenuClickHandler}
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
      <nav
        className={`hidden md:block ${
          isHomePage
            ? "bg-gradient-to-b from-[#0272A7] to-[#013953]"
            : "bg-gradient-to-b from-yellow-400 to-yellow-700"
        } flex-1 mx-[5rem] 2xl:mx-[9rem] rounded-md py-3`}
      >
        <Nav className="flex justify-evenly" />
      </nav>
      <div>
        <ul className="hidden md:flex gap-2 text-[#0479ae]">
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
    </div>
  );
};

export default Navigation;
