import { useEffect, useState } from "react";
import React from "react";
import HeaderTop from "./partials/HeaderTop";
import Navigation from "./partials/Navigation";

import { motion } from "framer-motion";
import Sidebar from "./partials/Sidebar";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHomePage, setIsHomepage] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname !== "/") {
      setIsHomepage(false);
    }
  }, [router.pathname]);

  return (
    <motion.div>
      {isHomePage && <HeaderTop />}
      <Navigation
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        isHomePage={isHomePage}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </motion.div>
  );
};

export default Navbar;
