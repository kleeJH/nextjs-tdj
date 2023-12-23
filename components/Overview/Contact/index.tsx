import React from "react";

import SectionWrapper from "@components/basic/SectionWrapper";
import {PhoneCard, WhatsAppCard, FacebookCard} from "@components/basic/InteractiveCard";

import { styles } from "@styles/sharedStyles";

const Contact = () => {
  return (
    <>
      <div className="">
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h2 className={styles.sectionHeadText}>Contact Us.</h2>
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-10">
        <PhoneCard />
        <WhatsAppCard />
        <FacebookCard />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
