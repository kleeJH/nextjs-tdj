import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";
import DownloadPdfButton from "@components/basic/DownloadPdfButton";

import { styles } from "@styles/sharedStyles";

const Admission = () => {
  return (
    <>
      <p className={styles.sectionSubText}>FIND OUT MORE</p>
      <h2 className={styles.sectionHeadText}>Admission.</h2>

      <p className={`${styles.withinSectionSubText} mt-3 mb-10`}>
        We are fostering a nurturing environment that encourages curiosity,
        creativity, and a love for learning. If you envision a vibrant and
        supportive educational journey for your child, we invite you to take the
        first step by downloading our enrollment PDF form below. Simply fill out
        the form and submit it to us effortlessly via WhatsApp. We look forward
        to welcoming your family into our community and embarking on this
        exciting educational adventure together.
      </p>

      <DownloadPdfButton />
    </>
  );
};

export default SectionWrapper(Admission, "admission");
