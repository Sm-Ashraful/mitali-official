import { useEffect, useState } from "react";
import React from "react";
import HeaderTop from "./partials/HeaderTop";
import Navigation from "./partials/Navigation";

import { motion } from "framer-motion";
import Sidebar from "./partials/Sidebar";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isHomePage, setIsHomepage] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname !== "/") {
      setIsHomepage(false);
    } else {
      setIsHomepage(true);
    }
  }, [router.pathname]);

  return (
    <motion.div>
      {isHomePage && <HeaderTop />}
      <Navigation isHomePage={isHomePage} />
    </motion.div>
  );
};

export default Navbar;
