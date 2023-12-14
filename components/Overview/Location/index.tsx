import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const Location = () => {
  return (
    <>
      <div className="">
        <p className={styles.sectionSubText}>WHERE WE ARE</p>
        <h2 className={styles.sectionHeadText}>Location.</h2>
      </div>
    </>
  );
};

export default SectionWrapper(Location, "location");
