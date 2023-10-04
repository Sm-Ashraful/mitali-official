import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Homepage from "@/components/Home";
import PopUpCelebrate from "@/components/popup/celebrating";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [popupOpen, setPopupOpen] = useState();
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    setPopupOpen(true);
  }, []);

  useEffect(() => {
    // Function to check if the viewport width is less than a certain threshold (e.g., 768 pixels for typical mobile devices)
    const checkIfMobile = () => {
      const isMobile = window.innerWidth < 768; // You can adjust this threshold as needed
      setMobileView(isMobile);
    };

    // Initial check when the component mounts
    checkIfMobile();

    // Add a resize event listener to re-check if the viewport size changes
    window.addEventListener("resize", checkIfMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <Homepage />
      <PopUpCelebrate
        isOpen={popupOpen}
        onClose={closePopup}
        mobileView={mobileView}
      />
    </>
  );
}
