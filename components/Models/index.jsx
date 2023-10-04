import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Backdrop from "../Backdrop";
import { useStateValue } from "@/context/StateProvider";
import { gsap } from "gsap";

const Model = (props) => {
  const currentArrangeRef = useRef(null);
  const arrangeRef = useRef(null);
  const [{ showModal }, dispatch] = useStateValue();

  const closeMeeting = () => {
    dispatch({ type: "setShowModal", item: false });
  };
  useLayoutEffect(() => {
    let handle = (e) => {
      const distanceFromTop = window.scrollY;

      if (currentArrangeRef.current) {
        const menuHeight = arrangeRef.current?.offsetHeight;
        const menuOffsetTop = arrangeRef.current?.offsetTop;
        if (distanceFromTop > menuHeight + menuOffsetTop) {
          console.log("arrangeRef.current", currentArrangeRef.current);
          closeMeeting();
        }
      }
      if (
        currentArrangeRef &&
        currentArrangeRef.current &&
        !currentArrangeRef.current.contains(e.target)
      ) {
        console.log(
          "arrangeRef.current",
          currentArrangeRef.current.contains(e.target)
        );
        closeMeeting();
      }
    };

    document.addEventListener("mousedown", handle);
    window.addEventListener("scroll", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("scroll", handle);
    };
  }, [showModal, currentArrangeRef]);

  useLayoutEffect(() => {
    if (showModal) {
      if (props.mobileView) {
        console.log("This is mobile view");
        gsap.to(arrangeRef.current, {
          bottom: "0",
          duration: 1,
          ease: "linear",
        });
      }
    }
  }, [showModal]);

  return (
    <>
      <div className="absolute top-0 pointer-events-none w-full h-screen md:h-full">
        <div className="absolute inset-0 backdrop-filter backdrop-blur-lg bg-opacity-70 z-50"></div>
      </div>
      <div
        ref={arrangeRef}
        className="w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed -bottom-full md:-bottom-10 md:left-0 transition-all md:inset-0 z-50 outline-none focus:outline-none rounded-t-[2.5rem] "
      >
        <div
          ref={currentArrangeRef}
          className="relative w-full h-[60vh] md:h-[390px]  md:w-[800px]  mx-auto max-w-3xl "
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Model;
