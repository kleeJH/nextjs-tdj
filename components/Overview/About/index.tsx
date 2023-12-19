import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>WHO WE ARE</p>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
      </div>

      <div className="flex flex-col w-fit">
        <p className="mt-3 text-textDefault text-[17px] max-w-3xl leading-[30px]">
          In this section, I will be showcasing some of the projects that I have
          created throughout my learning experience. This section reflects some
          of my skills and experience while working with different and exciting
          technologies. Each projects will be briefly described and links to my
          code repository may be included within it.
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
