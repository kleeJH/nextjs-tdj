import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const Admission = () => {
  return (
    <>
      <div className="">
        <p className={styles.sectionSubText}>FIND OUT MORE</p>
        <h2 className={styles.sectionHeadText}>Admission.</h2>
      </div>
    </>
  );
};

export default SectionWrapper(Admission, "admission");
