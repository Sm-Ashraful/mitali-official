import React from "react";
import HeroProfile from "./partials/HeroProfile";
import WhyChooseUs from "./partials/WhyChooseUs";
import Values from "./partials/Values";
import Portfolio from "./partials/Portfolio";
import ServiceView from "./partials/ServiceView";
import Management from "./partials/Management";

const Profile = () => {
  return (
    <>
      <HeroProfile />

      <WhyChooseUs />
      <Portfolio />
      <Values />
      <ServiceView />
      <Management />
    </>
  );
};

export default Profile;
