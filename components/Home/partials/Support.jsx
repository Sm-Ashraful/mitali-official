import React from "react";

const Support = () => {
  return (
    <div className="w-full  pt-16 pb-10 h-auto bg-[#fafafa]">
      <div className="px-2 md:px-16 flex flex-col lg:flex-row justify-between">
        <div className="mr-6 w-full lg:w-3/5">
          <div className="pb-5">
            <p className="text-slate-500 font-Rubik text-[18px]">Welcome to</p>
            <p className="text-[24px] md:text-[36px] font-bold">
              M/S Mitali International
            </p>
          </div>
          <p className="text-[10pt] 2xl:text-[20pt] text-slate-500 font-Inter leading-[26px] xl:leading-[30px]">
            As a full-service Inbound, Outbound, and Business Process
            Outsourcing company, we are proud to serve a vast array of
            businesses worldwide. At M/S Mitali International, we provide
            comprehensive customer support, call center solutions, back-office
            support, lead generation, exclusive digital marketing, and image
            editing services tailored to suit your business requirements. With a
            decade of experience, we have successfully executed over 500+
            diverse projects, granting us the expertise to deliver the perfect
            blend of strategies aimed at captivating your prospects and
            transforming them into loyal customers. Allow us to become your
            trusted contact center, regardless of your customers&apos;
            geographic locations. Experience excellence and unparalleled support
            with M/S Mitali International. Let us be your strategic partner in
            business growth and success.
          </p>
          <button className="mt-5 rounded-xl bg-[#052149] px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200">
            Know More
          </button>
        </div>
        <div className="support-box w-full lg:w-2/5 h-full ">
          <img
            src="/Image/iStock-897528636-700-2.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
