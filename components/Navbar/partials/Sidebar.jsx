import React from "react";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen ? (
        <div className="absolute top-[6.5rem] left-0 bg-black w-[100vw] h-[100vh] z-50">
          This is sidebar
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
