import { useState } from "react";
import React from "react";
import HeaderTop from "./partials/HeaderTop";
import Navigation from "./partials/Navigation";

import { motion } from "framer-motion";
import Sidebar from "./partials/Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <motion.div>
      <HeaderTop />
      <Navigation
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </motion.div>
  );
};

export default Navbar;
