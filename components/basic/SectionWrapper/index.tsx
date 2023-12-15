

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@utils/motion";
import { styles } from "@styles/sharedStyles";

const SectionWrapper = (Component: () => JSX.Element, idName: string) =>
  function HigherOrderComponent() {
    return (
      <section
        className={`container ${styles.paddingY}`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
