import React from "react";
import Hero from "./partials/Hero";
import Branding from "./partials/brand";
import Service from "./partials/Service";
import Partner from "./partials/Partner";
import Support from "./partials/Support";
import HowService from "./partials/HowService";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Branding />
      <Service />
      <Partner />
      <Support />
      <HowService />
    </div>
  );
};

export default Homepage;
