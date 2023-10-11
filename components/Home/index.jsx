import React, { useState } from "react";
import Hero from "./partials/Hero";
import Service from "./partials/Service";
import Partner from "./partials/Partner";
import Support from "./partials/Support";
import HowService from "./partials/HowService";
import Gallery from "./partials/Gelery";
import PopUp from "../popup";

const Homepage = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const formPopupOpen = (e) => {
    setOpenPopup(true);
  };
  const closePopup = (e) => {
    setOpenPopup(false);
  };

  return (
    <div className="">
      <Hero formPopupOpen={formPopupOpen} />
      <PopUp isOpen={openPopup} onClose={closePopup} />

      <Support />
      <Service />
      <Partner />
      <HowService />
      <Gallery />
    </div>
  );
};

export default Homepage;
