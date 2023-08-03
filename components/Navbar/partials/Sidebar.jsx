import React from "react";
import Navigation from "./Navigation";
import Navbar from "./Navbar";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen ? (
        <div className="absolute top-[6.5rem] left-0 bg-black w-full h-[60vh] z-50">
          <Navbar />
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
