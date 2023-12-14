import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const Programme = () => {
  return (
    <>
      <div className="">
        <p className={styles.sectionSubText}>WHAT WE DO</p>
        <h2 className={styles.sectionHeadText}>Our Programme.</h2>
      </div>
    </>
  );
};

export default SectionWrapper(Programme, "programme");
