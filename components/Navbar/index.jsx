import React from "react";
import HeaderTop from "./partials/HeaderTop";
import Navigation from "./partials/Navigation";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div>
      <HeaderTop />
      <Navigation />
    </motion.div>
  );
};

export default Navbar;
