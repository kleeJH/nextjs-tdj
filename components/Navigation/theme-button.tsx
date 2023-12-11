"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="rounded-lg p-2 duration-300 focus:outline-none focus-visible:ring-2 bg-secondary hover:bg-accent border-solid border-[1px] border-accent"
          onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
          type="button"
        >
          {resolvedTheme === "dark" && (
            <Moon aria-hidden="true" className="h-5 w-5" />
          )}
          {resolvedTheme === "light" && (
            <Sun aria-hidden="true" className="h-5 w-5" />
          )}
        </motion.button>
      ) : null}
    </>
  );
};

export default ThemeSwitch;
