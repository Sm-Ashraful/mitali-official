import React, { useState } from "react";
import Hero from "./partials/Hero";
import Service from "./partials/Service";
import Partner from "./partials/Partner";
import Support from "./partials/Support";
import HowService from "./partials/HowService";
import Gallery from "./partials/Gelery";
import PopUp from "../popup";
import { useStateValue } from "../../context/StateProvider";

const Homepage = () => {
  const [{ isContactFormOpen }, dispatch] = useStateValue();

  const formPopupOpen = (e) => {
    dispatch({ type: "setContactInfo", item: true });
  };
  const closePopup = (e) => {
    dispatch({ type: "setContactInfo", item: false });
  };

  return (
    <div className="">
      <Hero formPopupOpen={formPopupOpen} />
      <PopUp isOpen={isContactFormOpen} onClose={closePopup} />

      <Support />
      <Service />
      <Partner />
      <HowService />
      <Gallery />
    </div>
  );
};

export default Homepage;
