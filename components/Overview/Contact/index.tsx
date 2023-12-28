import React from "react";

import SectionWrapper from "@components/basic/SectionWrapper";
import { ContactCard } from "@components/basic/InteractiveCard";

import { styles } from "@styles/sharedStyles";

const Contact = () => {
  return (
    <>
      <div className="">
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h2 className={styles.sectionHeadText}>Contact Us.</h2>
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-10">
        <ContactCard
          title="Phone"
          description="Call us via 1800-XXX-XXXX"
          icon="/assets/icons/phone.svg"
        />
        <ContactCard
          title="Whatsapp"
          description="Msg us via 1800-XXX-XXXX"
          icon="/assets/icons/whatsapp.svg"
        />
        <ContactCard
          title="Facebook"
          description="Call us via Facebook!"
          icon="/assets/icons/facebook.svg"
        />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
