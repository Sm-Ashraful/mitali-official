import React, { useLayoutEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";

import ArrangeMeeting from "../arrang-meeting";
import Sidebar from "../Navbar/partials/Sidebar";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  const [mobileView, setMobileView] = useState(false);
  useLayoutEffect(() => {
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
  return (
    <div>
      <Head>
        <title>Mitali International</title>
        <meta
          name="description"
          content="Hony hut is for Honey, Pill, Liquid Shots, Condoms, Raw paper etc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/honeyhut logo.png" />
      </Head>
      <main
        className={`relative min-h-screen max-w-[1992px] mx-auto ${roboto.className}`}
      >
        <ArrangeMeeting mobileView={mobileView} />
        <Navbar />
        <Sidebar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
