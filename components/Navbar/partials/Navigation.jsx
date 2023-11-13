import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import Nav from "./Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStateValue } from "../../../context/StateProvider";
import Image from "next/image";

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
      className={`w-full flex justify-between items-center border-b px-2 md:px-10 lg:px-16 2xl:px-20 py-3  z-50 ${
        !isHomePage
          ? `bg-transparent fixed top-0 left-0 ${onav}`
          : `${nav} bg-white`
      }`}
    >
      <Link href="/" className="w-[40%] mx-auto md:w-[14%]">
        <Image
          className="w-full h-full"
          src={!isHomePage ? "/Image/logo png.png" : "/Image/logo png.png"}
          alt="logo.jpg"
          width={300} // Set the width of the image
          height={200} // Set the height of the image
          layout="responsive" // Set the layout to responsive
          objectFit="contain" // Set the object fit mode
          sizes="(min-width: 2100px) 256px, (min-width: 780px) 12.15vw, calc(40vw - 6px)" // Specify different sizes for different viewport widths
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
      <nav className={`hidden  flex-1  lg:px-10 md:flex justify-end`}>
        <Nav
          className={`w-[90%] flex justify-evenly items-center rounded-md md:py-2 lg:py-3 ${
            isHomePage
              ? "bg-gradient-to-b from-[#0272A7] to-[#013953]"
              : "bg-gradient-to-b from-yellow-400 to-yellow-700"
          }`}
        />
      </nav>
      <div>
        <ul className="hidden lg:flex gap-2 text-[#0479ae]">
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
