import React from "react";
import Backdrop from "../Backdrop"; // Import the Backdrop component
import ContactForm from "../Form";

const PopUpCelebrate = ({ isOpen, onClose, mobileView }) => {
  console.log("mobileView", mobileView);
  return (
    <>
      {isOpen && <Backdrop onClose={onClose} />}
      {isOpen && (
        <div className="w-[95%]  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
          <div className="relative w-full md:w-3/4 mx-auto bg-white p-4 rounded-lg shadow-lg flex justify-center items-center ">
            <div>
              {mobileView ? (
                <img src="/Image/9yrsm.jpeg" alt="" />
              ) : (
                <img src="/Image/9yrs.jpeg" alt="" />
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
