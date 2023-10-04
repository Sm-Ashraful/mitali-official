import React from "react";

const Backdrop = ({ onClose }) => {
  return (
    <div
      className="w-full h-full fixed inset-0 bg-black opacity-50 z-20"
      onClick={onClose}
    />
  );
};

export default Backdrop;
