import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const Contact = () => {
  return (
    <>
      <div className="">
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h2 className={styles.sectionHeadText}>Contact Us.</h2>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
