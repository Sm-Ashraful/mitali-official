import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Nav from "./Navbar";

import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";
import { useStateValue } from "../../../context/StateProvider";

const Sidebar = () => {
  const [sidebarTop, setSidebarTop] = useState("top-[120px]");
  const [{ isSidebarOpen }, dispatch] = useStateValue();
  const router = useRouter();
  useEffect(() => {
    function handleRouteChange(url) {
      dispatch({ type: "setSidebar", item: false });
    }
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [isSidebarOpen, router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth < 768) {
        if (router.pathname === "/" && currentScrollY < 500) {
          setSidebarTop("top-[165px]");
        } else {
          console.log("done");
          setSidebarTop("top-[120px]");
        }
      }
    };
    handleScroll();
  }, [isSidebarOpen, router.pathname]);

  const handleMenuButton = (event) => {
    event.preventDefault();
    dispatch(toggle(false));
  };
  const handleArrangeMeeting = (e) => {
    dispatch({ type: "setShowModal", item: true });
  };
  return (
    <>
      {isSidebarOpen ? (
        <div
          className={`flex flex-col justify-between fixed ${sidebarTop}  left-0 bg-gradient-to-b from-[#0272A7] to-[#013953] w-full h-[600px] z-50 pt-10 pb-5`}
        >
          <Nav />
          <div className="px-2 flex justify-center">
            <button
              onClick={handleArrangeMeeting}
              class="z-20 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-Allerta font-medium tracking-tighter text-black hover:text-white bg-[#F89640] rounded-lg group meeting-clip-path"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#0f1235] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#045c94]"></span>
              <span class="relative">Arrange A Meeting</span>
            </button>
          </div>
          <ul className=" flex justify-center items-center gap-10 px-5 text-white py-5">
            <li>
              <span>
                <a href="https://www.facebook.com/mitaliint.info">
                  <FaFacebookF />
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="https://www.linkedin.com/company/m-s-mitali-international/">
                  <FaLinkedin />
                </a>
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp />
              </span>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
