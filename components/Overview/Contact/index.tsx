"use client";

import Config from "@config";

import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "@components/basic/SectionWrapper";
import { ContactCard } from "@components/basic/InteractiveCard";

import { styles } from "@styles/sharedStyles";
import { notification } from "antd";

const Contact = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    navigator.clipboard.writeText(Config.socials["phone"].number);
    api.success({
      message: `Phone number has been copied!`,
      description: "",
      placement: "bottomLeft",
      duration: 3,
      style: { fontWeight: 500 },
      className: "bg-foreground",
    });
  };

  return (
    <>
      {contextHolder}
      <div className="">
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h2 className={styles.sectionHeadText}>Contact Us.</h2>
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-10">
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="cursor-pointer"
          onClick={openNotification}
        >
          <ContactCard
            title="Phone"
            description="Call us via +60362761557"
            icon="/assets/icons/phone.svg"
          />
        </motion.div>

        <motion.a
          whileTap={{ scale: 0.8 }}
          href={Config.socials["whatsapp"].href}
          target="_block"
        >
          <ContactCard
            title="WhatsApp"
            description="Book an appointment via +60162614308"
            icon="/assets/icons/whatsapp.svg"
          />
        </motion.a>

        <motion.a
          whileTap={{ scale: 0.8 }}
          href={Config.socials["facebook"].msgLink}
          target="_block"
        >
          <ContactCard
            title="Facebook"
            description="Message us via Facebook!"
            icon="/assets/icons/facebook.svg"
          />
        </motion.a>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
