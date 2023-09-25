import React from "react";
import Backdrop from "../Backdrop";

const Model = (props) => {
  console.log("Children: ", props.children);
  return (
    <>
      <Backdrop />
      <div className="w-[75%] h-[450px] bg-black text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        {props.children}
      </div>
    </>
  );
};

export default Model;
