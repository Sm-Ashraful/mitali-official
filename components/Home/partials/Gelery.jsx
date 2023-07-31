import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-full mt-20 py-10 h-auto  md:h-[70vh] bg-[#fafafa]">
      <div className="px-2 md:px-16 w-full h-full">
        <h2 className="text-[38px] leading-9 text-[#464855] text-center font-[800] mb-[20px]">
          Our Profile
        </h2>
        <div className="grid grid-cols-2">
          <div></div>
          <div className="relative w-full h-full">
            <Image src="/Image/profile/cover-1.jpeg" alt="cover" fill cover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
