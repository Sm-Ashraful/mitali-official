import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="relative">
      <h3 className="text-[26px] md:text-[42px] font-bold font-Work text-center pb-5">
        Why Choose Us?
      </h3>
      <p className="px-2  md:px-16 2xl:px-20 pb-5 font-Rubik text-sm text-[#777]">
        M/S Mitali International (MI) is an outsourcing company located in
        Dhaka, Bangladesh. Our focus is to individually provide key
        telemarketing services (Outbound & Inbound), dependable customer care
        services (Inbound), and back-office support services to companies
        looking for a proven method of expanding their business or serving &
        retain the existing customer base. M/S Mitali International Call Center
        gives any company a competitive advantage by providing clients with more
        than twice the number of highly trained and educated service staff for
        the same price as they would pay within their local area. We wish to be
        the first and the most compelling choice for companies seeking a contact
        center solution.
      </p>
      <div className="grid lg:grid-cols-2 px-2  md:px-16 2xl:px-20 w-full ">
        <div>
          <img src="/Image/why_banner.png" alt="" />
        </div>
        <div className="font-Rubik text-sm text-[#777]">
          <p>
            Our approach is rooted in a blend of innovation, creativity, and a
            client-centric ethos, ensuring you get nothing but the best.
          </p>

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
                  Web Development Excellence:
                </span>
                <span>
                  Our dedicated team of web developers excels in crafting
                  visually stunning and functionally seamless websites. We
                  breathe life into your concepts, ensuring they leave a
                  remarkable and lasting digital footprint.
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
                  Strategic Digital Marketing:
                </span>
                <span>
                  Our experts analyze, strategize, and execute precise digital
                  marketing plans, ensuring maximum reach, engagement, and
                  conversions for your brand.
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
                  Creative Graphics Design:
                </span>
                <span>
                  Our creative graphic designers work tirelessly to translate
                  your ideas into captivating visuals that tell a compelling
                  story.
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
                  Client-Centric Approach:
                </span>
                <span>
                  We prioritize our clients&#39; needs, ensuring customized
                  solutions that align with their specific requirements,
                  industry standards, and business goals.
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
                  Quality and Reliability:
                </span>
                <span>
                  We strive for excellence and reliability in all our services,
                  ensuring our clients receive top-notch solutions that add real
                  value to their businesses.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center font-Rubik font-semibold pt-8 lg:pt-0 px-2  md:px-16 2xl:px-20">
        Join hands with us, and let&#39;s embark on a journey of digital
        transformation and growth, where your success is our ultimate goal.
      </p>
    </div>
  );
};

export default WhyChooseUs;
