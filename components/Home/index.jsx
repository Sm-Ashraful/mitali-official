import React, { useState } from "react";
import Hero from "./partials/Hero";
import Branding from "./partials/brand";
import Service from "./partials/Service";
import Partner from "./partials/Partner";
import Support from "./partials/Support";
import HowService from "./partials/HowService";
import Gallery from "./partials/Gelery";
import PopUp from "../popup";
import ArrangeAMeeting from "../arrang-meeting";

const Homepage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isArrangeMeetingOpen, setIsArrangeMeetingOpen] = useState(false);

  const formPopupOpen = (e) => {
    setOpenPopup(true);
  };
  const closePopup = (e) => {
    setOpenPopup(false);
  };
  return (
    <div className="">
      <Hero
        formPopupOpen={formPopupOpen}
        setIsArrangeMeetingOpen={setIsArrangeMeetingOpen}
      />
      <PopUp isOpen={openPopup} onClose={closePopup} />
      {isArrangeMeetingOpen && (
        <ArrangeAMeeting setIsArrangeMeetingOpen={setIsArrangeMeetingOpen} />
      )}

      <Support />
      <Service />
      <Partner />
      <HowService />
      <Gallery />
    </div>
  );
};

export default Homepage;
