import React from "react";
import Backdrop from "../Backdrop"; // Import the Backdrop component
import ContactForm from "../Form";

const PopUp = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <Backdrop onClose={onClose} />}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
          <div className="w-[580px] bg-white p-4 rounded-lg shadow-lg flex justify-center items-center ">
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
