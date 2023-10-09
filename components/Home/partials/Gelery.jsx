import React from "react";
import Image from "next/image";

import { useRef } from "react";
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
    <div className="w-full pt-16 pb-10 h-auto bg-[#fafafa]">
      <div className="px-2 md:px-16 w-full">
        <h2 className="text-[38px] leading-9 text-[#464855] text-center font-[800] mb-[20px]">
          Welcome to Our Journey: A Glimpse Inside Mitali International Family
        </h2>
        <p className="text-[10pt] 2xl:text-[20pt] text-slate-500 font-Inter leading-[20px] xl:leading-[32px]">
          Step into our world and explore the heart of Mitali International
          family through these captivating images. Our gallery offers a candid
          peek into our team&#39;s dynamic journey, showcasing not just our
          professional endeavors but also the bonds that make us a close-knit
          community.
        </p>
        <div className="flex flex-col lg:flex-row w-full mt-5 md:mt-10 gap-10 h-auto lg:h-[18rem] xl:h-[24rem]">
          <div className="relative w-full lg:w-[50%] h-full">
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
                <img
                  src="/Image/profile/cover-3.jpeg"
                  alt="cover"
                  className=" max-h-[340px]"
                />
                <div className="w-full absolute bottom-0 left-0 bg-[#052149] opacity-80 py-2 px-4">
                  <h1 className="text-[18px] font-bold text-white">
                    Our New Partner, A new journey began
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Image/profile/cover-1.jpeg"
                  alt="cover"
                  className=" max-h-[340px]"
                />
                <div className="absolute bottom-0 left-0 bg-[#052149] opacity-80 py-2 px-4 w-full">
                  <h1 className="text-[18px] font-bold text-white">
                    8 years Anniversary celebration Group Photo
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Image/profile/cover-4.jpeg"
                  alt="cover"
                  className=" max-h-[340px]"
                />
                <div className="w-full absolute bottom-0 left-0 bg-[#052149] opacity-80 py-2 px-4">
                  <h1 className="text-[18px] font-bold text-white">
                    8 years Anniversary celebration with our employee
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Image/profile/cover-2.jpeg"
                  alt="cover"
                  className=" max-h-[340px]"
                />
                <div className="absolute bottom-0 left-0 bg-[#052149] opacity-80 py-2 px-4">
                  <h1 className="text-[18px] font-bold text-white">
                    For the first time, Mitali International and Yiying
                    celebrate together in bangladesh
                  </h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex-1 gap-5 overflow-clip">
            <p className="text-[10pt] 2xl:text-[20pt] text-slate-500 font-Inter leading-[26px] xl:leading-[32px]">
              Within these frames, you&#39;ll witness our cherished moments, be
              it the sun-kissed memories of our vacations or the vibrant
              snapshots of the events we enthusiastically participate in. We
              believe in work-life balance and creating a lively, enriching
              environment for our team. <br />
              Just like a family, we celebrate each other&#39;s milestones,
              support during challenges, and come together to create memories
              that last a lifetime. Our workplace is more than just desks and
              computers; it&#39;s a place where friendships are nurtured, ideas
              are born, and success is celebrated collectively. Join us in this
              visual journey and get to know us beyond our roles at Mitali
              International. We invite you to share in our joy, laughter, and
              team spirit through these snapshots. Thank you for being a part of
              our story.
            </p>
          </div>
        </div>
        <div className="w-full h-[40vh] mt-10">
          <Swiper
            effect={"coverflow"}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            speed={980}
            pagination={{
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 160,
              stretch: 1,
              depth: 120,
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
              1580: {
                width: 1580,
                slidesPerView: 4,
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
