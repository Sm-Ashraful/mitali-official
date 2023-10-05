import React from "react";
import Backdrop from "../Backdrop"; // Import the Backdrop component
import ContactForm from "../Form";
import Image from "next/image";

const PopUpCelebrate = ({ isOpen, onClose, mobileView }) => {
  console.log("mobileView", mobileView);
  return (
    <>
      {isOpen && <Backdrop onClose={onClose} />}
      {isOpen && (
        <div className="w-[95%]  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
          <div className="relative w-full md:w-3/4 mx-auto bg-white p-4 rounded-lg shadow-lg flex justify-center items-center ">
            <div className="relative h-[360px] w-full">
              {mobileView ? (
                <Image src="/Image/9yrsm.jpeg" alt="clcebrate" fill cover />
              ) : (
                <Image src="/Image/9yrs.jpeg" alt="celebrate" fill cover />
              )}
            </div>
            <div
              onClick={onClose}
              className="cursor-pointer absolute top-0 text-red-600 right-0 font-extrabold text-[32px] bg-white px-4 py-2"
            >
              X
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpCelebrate;
