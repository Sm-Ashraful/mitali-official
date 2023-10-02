import React from "react";

const WebDev = () => {
  return (
    <div className="  px-2  md:px-16 2xl:px-20 w-full">
      <div className="font-bold font-Work border-b-2 border-black flex items-center gap-5">
        <h4 className="text-[18px] md:text-[24px] ">
          Web Development Services
        </h4>
        <p className="text-sm text-blue-600">Empowering Your Online Presence</p>
      </div>
      <p className="font-Allerta  py-3">
        Whether you&#39;re launching a new venture, rebranding, or looking to
        enhance your current online presence, we&#39;re here to guide you
        through the journey. Our team of experienced developers and designers is
        committed to turning your vision into a reality. We bring innovation,
        creativity, and technical expertise to every project we undertake.
      </p>
      <div className="w-full h-[35px] flex justify-between my-5">
        <img src="/Image/tec/react.png" alt="" className="h-full" />
        <img src="/Image/tec/next.png" alt="" />
        <img src="/Image/tec/js.png" alt="" />
        <img src="/Image/tec/node.png" alt="" />
        <img src="/Image/tec/mongo.png" alt="" />
        <img src="/Image/tec/tailwind.png" alt="" />
        <img src="/Image/tec/scss.png" alt="" />
        <img src="/Image/tec/mi.png" alt="" />
      </div>
      <div className="grid grid-cols-2 gap-x-5 mt-10">
        <div className=" bg-[#fafafa] border-2 border-black  px-5 py-4">
          <p className="text-[17px] font-[500]">
            With our web development solutions, you can expect:
          </p>
          <ul className="pt-5">
            <li>
              <p className="double-checked text-sm">
                <span className="font-semibold pr-1">
                  Customized Experiences:
                </span>
                Tailored websites that align with your unique goals.
              </p>
            </li>
            <li>
              <p className="double-checked text-sm">
                <span className="font-semibold pr-1">
                  Seamless Functionality:
                </span>
                Websites that work flawlessly across all devices.
              </p>
            </li>
            <li>
              <p className="double-checked text-sm">
                <span className="font-semibold pr-1">Cutting-Edge Design:</span>
                User-centric interfaces that leave a lasting impression.
              </p>
            </li>
            <li>
              <p className="double-checked text-sm">
                <span className="font-semibold pr-1">
                  Optimized Performance:
                </span>
                Fast-loading pages and a smooth user experience.
              </p>
            </li>
            <li>
              <p className="double-checked text-sm">
                <span className="font-semibold pr-1">Robust Security:</span>
                Protection against online threats and data breaches.
              </p>
            </li>
            <li>
              <p className="double-checked text-sm">
                <span className="font-semibold pr-1">Ongoing Support:</span>
                Post-launch maintenance and updates to keep you ahead.
              </p>
            </li>
          </ul>
        </div>
        <div className="text-lg">
          <p className="mt-3">
            <span>
              <img
                src="/Image/select.ico"
                alt=""
                className="w-[15px] inline-block ml-3 "
              />
            </span>
            <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
              Crafting Dynamic Website
            </span>
          </p>
          <p className="mt-3">
            <span>
              <img
                src="/Image/select.ico"
                alt=""
                className="w-[15px] inline-block ml-3 "
              />
            </span>
            <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
              E-Commerce Solution
            </span>
          </p>
          <p className="mt-3">
            <span>
              <img
                src="/Image/select.ico"
                alt=""
                className="w-[15px] inline-block ml-3 "
              />
            </span>
            <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
              Custom Web Application Development
            </span>
          </p>
          <p className="mt-3">
            <span>
              <img
                src="/Image/select.ico"
                alt=""
                className="w-[15px] inline-block ml-3 "
              />
            </span>
            <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
              Content Management Systems (CMS)
            </span>
          </p>
          <p className="mt-3">
            <span>
              <img
                src="/Image/select.ico"
                alt=""
                className="w-[15px] inline-block ml-3 "
              />
            </span>
            <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
              SEO-Friendly Development
            </span>
          </p>
          <p className="mt-3">
            <span>
              <img
                src="/Image/select.ico"
                alt=""
                className="w-[15px] inline-block ml-3 "
              />
            </span>
            <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
              Both static & Dynamic
            </span>
          </p>
          <p className="mt-3">
            <span>
              <img
                src="/Image/select.ico"
                alt=""
                className="w-[15px] inline-block ml-3 "
              />
            </span>
            <span className="text-black text-[15px] font-semibold px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0479ae]  to-[#045c94]">
              Testing and Maintenance
            </span>
          </p>
          <p className="mt-3 font-bold">
            <span className="text-black px-2 ">Technology we used:</span>
            Php(Laravel), JavaScript(React JS, Next Js, Node Js)
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
