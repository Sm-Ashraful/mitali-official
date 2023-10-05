import Link from "next/link";
import React from "react";

const ItSectior = () => {
  return (
    <div className="w-full md:py-10 h-auto ">
      <div className="md:pb-5 ">
        <p className="text-[24px] md:text-[36px] font-bold text-center">
          IT SECTOR
        </p>
        <p className="text-slate-500 font-Rubik text-[18px] text-center">
          The Future Is Here
        </p>
      </div>
      <div className="px-2 md:px-16 flex flex-col md:flex-row justify-between relative">
        <div className="shape overflow-hidden w-full md:w-2/5 h-full ">
          <img
            src="/Image/its.avif"
            alt=""
            className="w-full h-full max-h-[250px] aspect-auto opacity-30"
          />
        </div>
        <div className="md:ml-6 w-full md:w-3/5 absolute top-1/2 transform -translate-y-1/2 md:translate-y-0  md:static  md:top-0 flex flex-col md:justify-center md:items-center ">
          <div className=" py-3 ml-6 md:bg-transparent w-3/4">
            <div>
              <p className=" md:mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block "
                  />
                </span>
                <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-black md:from-[#0479ae]  to-red-900  md:to-[#045c94]">
                  Web Development Service
                </span>
              </p>
              <p className=" md:mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block "
                  />
                </span>
                <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-black md:from-[#0479ae]  to-red-700 md:to-[#045c94]">
                  Web Design Service
                </span>
              </p>
              <p className=" md:mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block "
                  />
                </span>
                <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-black md:from-[#0479ae]  to-red-700 md:to-[#045c94]">
                  Digital Marketing
                </span>
              </p>
              <p className=" md:mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block "
                  />
                </span>
                <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-black md:from-[#0479ae]  to-red-700 md:to-[#045c94]">
                  Graphics Design Service
                </span>
              </p>
              <p className=" md:mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block "
                  />
                </span>
                <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-black md:from-[#0479ae]  to-red-700 md:to-[#045c94]">
                  SEO Service
                </span>
              </p>
            </div>

            <button className="mt-5 rounded-xl bg-[#052149] px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200">
              <Link href={"/help"}>Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItSectior;
