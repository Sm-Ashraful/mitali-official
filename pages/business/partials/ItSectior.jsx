import React from "react";

const ItSectior = () => {
  return (
    <div className="px-2  md:px-16 2xl:px-20 w-full mt-5 md:mt-10">
      <div className="flex items-center md:gap-5 font-bold font-Work pb-2 md:pb-6 justify-center">
        <h4 className="text-[18px] md:text-[24px] ">IT SECTOR</h4>
        <p className="text-[12px] md:text-[14px] text-blue-600">
          The Future Is Here
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="">
          <div>
            <p className="mt-1 md:mt-3">
              <span>
                <img
                  src="/Image/select.ico"
                  alt=""
                  className="w-[15px] inline-block "
                />
              </span>
              <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                Web Development Service
              </span>
            </p>
            <p className="mt-1 md:mt-3">
              <span>
                <img
                  src="/Image/select.ico"
                  alt=""
                  className="w-[15px] inline-block "
                />
              </span>
              <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                Web Design Service
              </span>
            </p>
            <p className="mt-1 md:mt-3">
              <span>
                <img
                  src="/Image/select.ico"
                  alt=""
                  className="w-[15px] inline-block "
                />
              </span>
              <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                Digital Marketing
              </span>
            </p>
            <p className="mt-1 md:mt-3">
              <span>
                <img
                  src="/Image/select.ico"
                  alt=""
                  className="w-[15px] inline-block "
                />
              </span>
              <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                Graphics Design Service
              </span>
            </p>
            <p className="mt-1 md:mt-3">
              <span>
                <img
                  src="/Image/select.ico"
                  alt=""
                  className="w-[15px] inline-block "
                />
              </span>
              <span className="text-black text-[13px] md:text-[17px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                SEO Service
              </span>
            </p>
          </div>
        </div>
        <div>
          <img src="/Image/it.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItSectior;
