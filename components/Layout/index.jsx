import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";

const Layout = ({ children }) => {
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
      <main className="min-h-screen max-w-[1440px]">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
