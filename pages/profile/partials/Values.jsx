import React from "react";

const Values = () => {
  return (
    <div className="relative w-full mt-10  py-5">
      <h3 className="text-[26px] md:text-[42px] font-bold font-Work text-center pb-5">
        Our Values
      </h3>
      <p className="font-Rubik text-sm text-[#777] px-2  md:px-16 2xl:px-20 pb-5">
        Our values at M/S Mitali International define our culture, guide our
        decisions, and shape our interactions. We are committed to:
      </p>
      <div className="grid lg:grid-cols-2 px-2  md:px-16 2xl:px-20 w-full ">
        <div className="font-Rubik text-sm text-[#777] order-1 lg:order-0">
          <ul>
            <li>
              <p className="mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block ml-3 "
                  />
                </span>
                <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                  Integrity:
                </span>
                <span>
                  Upholding honesty, transparency, and ethical practices in all
                  our dealings.
                </span>
              </p>
            </li>
            <li>
              <p className="mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block ml-3 "
                  />
                </span>
                <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                  Customer-Centricity:
                </span>
                <span>
                  Putting our clients at the center of everything we do,
                  striving to exceed their expectations consistently.
                </span>
              </p>
            </li>

            <li>
              <p className="mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block ml-3 "
                  />
                </span>
                <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                  Teamwork:
                </span>
                <span>
                  Collaborating and leveraging the collective strength of our
                  diverse team to achieve shared goals.
                </span>
              </p>
            </li>
            <li>
              <p className="mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block ml-3 "
                  />
                </span>
                <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                  Continuous Improvement:
                </span>
                <span>
                  Pursuing ongoing learning, growth, and innovation to deliver
                  better solutions and value to our clients.
                </span>
              </p>
            </li>
            <li>
              <p className="mt-3">
                <span>
                  <img
                    src="/Image/select.ico"
                    alt=""
                    className="w-[15px] inline-block ml-3 "
                  />
                </span>
                <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
                  Adaptability:
                </span>
                <span>
                  Embracing change and remaining flexible and agile in response
                  to evolving business needs and market dynamics.
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="order-0 lg:order-1">
          <img src="/Image/coreValues.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Values;
