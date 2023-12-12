"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Drawer } from "antd";
import { motion } from "framer-motion";
import LocaleSwitch from "./locale-button";
import ThemeSwitch from "./theme-button";

const MobileNavigation = () => {
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState<boolean>(false);

  const showDrawer = () => {
    setToggleMobileDrawer(true);
  };

  const onClose = () => {
    setToggleMobileDrawer(false);
  };

  return (
    <>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <motion.div
          className="square-button"
          whileTap={{ scale: 0.8 }}
          onClick={showDrawer}
        >
          <AlignJustify aria-hidden="true" className="h-5 w-5" />
        </motion.div>
      </div>

      <Drawer
        title=""
        placement="right"
        onClose={onClose}
        open={toggleMobileDrawer}
        width={200}
        extra={
          <div className="flex justify-end items-center gap-3 md:gap-5">
            <LocaleSwitch />
            <ThemeSwitch />
          </div>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
