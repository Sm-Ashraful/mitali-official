import React from "react";

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

const Review = () => {
  return (
    <div className="pt-10 px-2 md:px-16 flex flex-col md:flex-row gap-3">
      <div className="w-full md:w-[30%] border flex flex-col items-center pt-4">
        <div className="w-[50%]">
          <img src="/Image/mash logo.png" alt="" className="w-full" />
        </div>
        <div class="flex items-center gap-2 py-2">
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <div className="flex justify-between w-full border-b px-3 pb-2 font-bold text-slate-500">
          <p>Rating: 5</p>
          <p>Reviews: 6</p>
        </div>
        <div className="px-2 py-3 w-full leading-4">
          <Swiper
            slidesPerView={1}
            loop={true}
            zoom={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={980}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Mitali International played a crucial role in driving our
                business growth. Their onboarding and ramp-up process was
                impressively swift, enabling our team to concentrate on other
                essential business aspects.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Their proactive approach in identifying opportunities for
                product enhancements and refining our business practices was
                invaluable. What we truly admire about Mitali International is
                their adaptability and willingness to collaborate with a smaller
                yet rapidly expanding business like ours.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Their partnership has been instrumental in achieving our goals
                and navigating the path to success. We highly recommend Mitali
                International for their outstanding services and commitment to
                client satisfaction.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Mitali International played a crucial role in driving our
                business growth. Their onboarding and ramp-up process was
                impressively swift, enabling our team to concentrate on other
                essential business aspects.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Mitali International played a crucial role in driving our
                business growth. Their onboarding and ramp-up process was
                impressively swift, enabling our team to concentrate on other
                essential business aspects.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Mitali International played a crucial role in driving our
                business growth. Their onboarding and ramp-up process was
                impressively swift, enabling our team to concentrate on other
                essential business aspects.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-full md:w-[30%] border flex flex-col items-center pt-4">
        <div className="w-[30%]">
          <img src="/Image/yiying.png" alt="" className="w-full" />
        </div>
        <div class="flex items-center gap-2 py-2">
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <div className="flex justify-between w-full border-b px-3 pb-2 font-bold text-slate-500">
          <p>Rating: 5</p>
          <p>Reviews: 6</p>
        </div>
        <div className="px-2 py-3 w-full leading-4">
          <Swiper
            slidesPerView={1}
            loop={true}
            zoom={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={980}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Mitali International played a crucial role in driving our
                business growth. Their onboarding and ramp-up process was
                impressively swift, enabling our team to concentrate on other
                essential business aspects.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Their proactive approach in identifying opportunities for
                product enhancements and refining our business practices was
                invaluable. What we truly admire about Mitali International is
                their adaptability and willingness to collaborate with a smaller
                yet rapidly expanding business like ours.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Their partnership has been instrumental in achieving our goals
                and navigating the path to success. We highly recommend Mitali
                International for their outstanding services and commitment to
                client satisfaction.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Mitali International played a crucial role in driving our
                business growth. Their onboarding and ramp-up process was
                impressively swift, enabling our team to concentrate on other
                essential business aspects.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Mitali International played a crucial role in driving our
                business growth. Their onboarding and ramp-up process was
                impressively swift, enabling our team to concentrate on other
                essential business aspects.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <q className="text-[8pt] pb-2">
                Mitali International played a crucial role in driving our
                business growth. Their onboarding and ramp-up process was
                impressively swift, enabling our team to concentrate on other
                essential business aspects.
              </q>
              <p className="text-[8pt] text-red-500 text-end">
                __ CEO of Mash Inc.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-full md:w-[40%] gap-10 border-2 border-slate-400">
        <div className="flex items-center bg-[#013953] px-5">
          <h2 className="text-[20px] md:text-[30px] font-bold text-white">
            Customer, About Mitali
          </h2>
        </div>
        <div className="flex-1 px-5 py-4">
          <figure className="text-[#F89640] font-Inter text-[10pt]">
            <blockquote>
              But web browsers aren’t like web servers. If your back-end code is
              getting so big that it’s starting to run noticably slowly, you can
              throw more computing power at it by scaling up your server. That’s
              not an option on the front-end where you don’t really have{" "}
              <em>one</em> run-time environment—your end users have their own
              run-time environment with its own constraints around computing
              power <strong>and</strong> network connectivity.
            </blockquote>
            <figcaption>
              &mdash; Jeremy Keith, <cite>Mental models</cite>{" "}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Review;
