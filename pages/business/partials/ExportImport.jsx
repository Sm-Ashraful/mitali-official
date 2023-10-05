import Link from "next/link";
import React from "react";

const ExportImport = () => {
  return (
    <div className="w-full  py-10 h-auto bg-[#fafafa]">
      <div className="pb-5 ">
        <p className="text-[24px] md:text-[36px] font-bold text-center">
          Global Export & Import
        </p>
        <p className="text-slate-500 font-Rubik text-[18px] text-center">
          Connecting With Global
        </p>
      </div>
      <div className="px-2 md:px-16 flex flex-col md:flex-row justify-between">
        <div className="shape8 overflow-hidden w-full md:w-2/5 h-full ">
          <img
            src="/Image/WhatsApp Image 2022-12-21 at 5.16.23 PM.jpeg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="ml-6 w-full md:w-3/5 md:flex flex-col justify-center items-center">
          <div>
            <div>
              <div className="max-h-[280px] flex flex-col flex-wrap">
                <p className="mt-1 md:mt-1.5">
                  <span>
                    <img
                      src="/Image/select.ico"
                      alt=""
                      className="w-[15px] inline-block "
                    />
                  </span>
                  <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                    Garments Item
                  </span>
                </p>
                <p className="mt-1 md:mt-1.5">
                  <span>
                    <img
                      src="/Image/select.ico"
                      alt=""
                      className="w-[15px] inline-block "
                    />
                  </span>
                  <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                    Vape
                  </span>
                </p>
                <p className="mt-1 md:mt-1.5">
                  <span>
                    <img
                      src="/Image/select.ico"
                      alt=""
                      className="w-[15px] inline-block "
                    />
                  </span>
                  <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                    Medical Kids
                  </span>
                </p>
                <p className="mt-1 md:mt-1.5">
                  <span>
                    <img
                      src="/Image/select.ico"
                      alt=""
                      className="w-[15px] inline-block "
                    />
                  </span>
                  <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                    Mask
                  </span>
                </p>
                <p className="mt-1 md:mt-1.5">
                  <span>
                    <img
                      src="/Image/select.ico"
                      alt=""
                      className="w-[15px] inline-block "
                    />
                  </span>
                  <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                    Health Product
                  </span>
                </p>
              </div>
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

export default ExportImport;
