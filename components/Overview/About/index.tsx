import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const About = () => {
  return (
    <>
      <div className="">
        <p className={styles.sectionSubText}>WHO WE ARE</p>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
