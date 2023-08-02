import React from "react";
import Image from "next/image";

import { useRef, useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";

const Gallery = () => {
  const swiperElRef = useRef(null);

  return (
    <div className="w-full mt-20 py-10 h-auto bg-[#fafafa]">
      <div className="px-2 md:px-16 w-full">
        <h2 className="text-[38px] leading-9 text-[#464855] text-center font-[800] mb-[20px]">
          Latest Updates
        </h2>
        <div className="flex flex-col md:flex-row w-full mt-5 md:mt-10 gap-10  md:h-[60vh]">
          <div className="relative w-full md:w-[50%] h-full">
            <Swiper
              slidesPerView={1}
              navigation={true}
              loop={true}
              zoom={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={1000}
              modules={[Navigation, Autoplay]}
            >
              <SwiperSlide>
                <img src="/Image/profile/cover-3.jpeg" alt="cover" />
                <div className="absolute bottom-0 left-0 bg-white opacity-80 py-2 px-4">
                  <h1 className="text-[24px] font-bold text-[#052149]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, exercitationem?
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Image/profile/cover-1.jpeg" alt="cover" />
                <div className="absolute bottom-0 left-0 bg-white opacity-80 py-2 px-4">
                  <h1 className="text-[24px] font-bold text-[#052149]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Image/profile/cover-4.jpeg" alt="cover" />
                <div className="absolute bottom-0 left-0 bg-white opacity-80 py-2 px-4">
                  <h1 className="text-[24px] font-bold text-[#052149]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, exercitationem?
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Image/profile/cover-2.jpeg" alt="cover" />
                <div className="absolute bottom-0 left-0 bg-white opacity-80 py-2 px-4">
                  <h1 className="text-[24px] font-bold text-[#052149]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, exercitationem?
                  </h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex-1 gap-5 overflow-clip">
            <h2 className="text-[32px] leading-9 text-[#464855] font-[800] pb-5">
              Demo content
            </h2>
            <p className="text-[10pt] text-slate-500 font-Inter leading-[26px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              repellendus placeat quidem atque, et mollitia voluptatibus aperiam
              odio a sed, doloribus, explicabo repellat. Illo, delectus. Dolorum
              aliquam autem cupiditate tempora! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Optio repellendus placeat quidem
              atque, et mollitia voluptatibus aperiam odio a sed, doloribus,
              explicabo repellat. Illo, delectus. Dolorum aliquam autem
              cupiditate tempora! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio repellendus placeat quidem atque, et
              mollitia voluptatibus aperiam odio a sed, doloribus, explicabo
              repellat. Illo, delectus.
            </p>
          </div>
        </div>
        <div className="w-full h-[40vh] mt-10">
          <Swiper
            effect={"coverflow"}
            slidesPerView={1}
            spaceBetween={30}
            speed={980}
            pagination={{
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 150,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            loop={true}
            zoom={true}
            modules={[Pagination, Navigation, EffectCoverflow]}
            breakpoints={{
              // when window width is >= 640px

              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              980: {
                width: 980,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <img src="/Image/profile/cover-2.jpeg" alt="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Image/profile/cover-3.jpeg" alt="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Image/profile/cover-4.jpeg" alt="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Image/profile/cover-5.jpeg" alt="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Image/profile/cover-6.jpeg" alt="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Image/profile/cover-7.jpeg" alt="cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Image/profile/cover-8.jpeg" alt="cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
