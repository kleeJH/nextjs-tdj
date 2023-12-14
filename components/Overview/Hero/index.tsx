import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const Hero = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>TEMP PLACEMENT</p>
        <h2 className={styles.sectionHeadText}>Hero.</h2>
      </div>
    </>
  );
};

export default SectionWrapper(Hero, "hero");
