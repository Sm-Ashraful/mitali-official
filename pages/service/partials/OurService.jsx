import React from "react";
import WebDev from "./WebDev";
import WebDesign from "./WebDesign";
import DigitalMarketing from "./DigitalMarketing";
import GraphicsDesign from "./GraphicsDesign";
import CallCenter from "./CallCenter";

const OurService = () => {
  return (
    <div className="mt-3 md:mt-10 w-full relative">
      <WebDev />
      <WebDesign />
      <DigitalMarketing />
      <GraphicsDesign />
      <CallCenter />
    </div>
  );
};

export default OurService;
