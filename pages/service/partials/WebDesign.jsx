import React from "react";

const WebDesign = () => {
  return (
    <div className="px-2  md:px-16 2xl:px-20 w-full mt-12 md:mt-20 ">
      <div className="relative  box-content border-r-2 border-[#1fa2ed] border-l-2 border-b-2  md:px-10">
        <div className="font-bold font-Work flex flex-row module__top ">
          <div className="relative -top-8  md:mx-5">
            <h4 className="text-[18px] md:text-[24px] text-center">
              Web Design Services
            </h4>
            <p className="text-[12px] md:text-[14px] max-w-[200px] md:max-w-full text-blue-600 text-center">
              Unlocking Creative Possibilities: Elevate Your Web Presence
            </p>
          </div>
        </div>
        <div className="pt-8 md:py-10 ">
          <p className="font-Allerta  py-3 text-[12px] md:text-[15px] px-2">
            We are passionate about innovation, creativity, and technical
            excellence, and we channel these qualities into every project we
            take on. Your web design journey starts here, where imagination
            meets digital reality.
          </p>

          <div className="bg-[#fafafa] md:mt-10">
            <ul className="py-2 md:py-5 px-2 md:px-5">
              <li>
                <p className="double-checked text-sm">
                  <span className="font-semibold pr-1">
                    Custom Website Design:
                  </span>
                  Tailored website designs that reflect your brand identity and
                  business goals.
                </p>
              </li>
              <li>
                <p className="double-checked text-sm">
                  <span className="font-semibold pr-1">Responsive Design:</span>
                  Ensuring your website looks and functions well on all devices,
                  from smartphones to desktops.
                </p>
              </li>
              <li>
                <p className="double-checked text-sm">
                  <span className="font-semibold pr-1">
                    User Experience (UX) Design:
                  </span>
                  Creating intuitive and user-friendly interfaces to enhance the
                  overall experience of visitors.
                </p>
              </li>
              <li>
                <p className="double-checked text-sm">
                  <span className="font-semibold pr-1">
                    E-commerce Website Design:
                  </span>
                  Designing online stores with secure payment gateways for
                  businesses selling products or services online.
                </p>
              </li>
              <li>
                <p className="double-checked text-sm">
                  <span className="font-semibold pr-1">CMS Integration: </span>
                  Integrating Content Management Systems like WordPress, Drupal,
                  or Joomla for easy content updates.
                </p>
              </li>
              <li>
                <p className="double-checked text-sm">
                  <span className="font-semibold pr-1">UI/UX Prototyping:</span>
                  Developing interactive prototypes to visualize and refine the
                  user journey before development.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
