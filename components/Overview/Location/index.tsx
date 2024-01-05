"use client";

import Config from "@config";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { notification } from "antd";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";
import "./Location.css";

const Location = () => {
  const [api, contextHolder] = notification.useNotification();

  const [showCopyButton, setShowCopyButton] = useState<boolean>(false);

  const openNotification = () => {
    navigator.clipboard.writeText(
      `${Config.personal.address.street} ${Config.personal.address.residential} ${Config.personal.address.postalTown} ${Config.personal.address.stateCountry}`
    );
    api.success({
      message: "Address has been copied!",
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
      <div className="mb-10">
        <p className={styles.sectionSubText}>WHERE WE ARE</p>
        <h2 className={styles.sectionHeadText}>Locate Us.</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-14 justify-start items-center">
        <div className="card-border-gradient rounded-xl w-full md:w-3/5 h-96 p-1 shadow-md shadow-foreground">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.52899924272!2d101.6224636113175!3d3.217510852713465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4671bc8fae11%3A0x35f80d5ab94f270!2sTadika%20Desa%20Jaya!5e0!3m2!1sen!2smy!4v1702712483830!5m2!1sen!2smy"
            className="border-0 w-full h-full rounded-xl dark:invert-[90%] dark:hue-rotate-180"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="w-full md:w-2/5 h-fit md:h-96 px-5 flex flex-col gap-8 items-center">
          <h4 className={`${styles.withinSectionAddressHeadText} text-left`}>
            Find us at
          </h4>
          <motion.div
            className="relative envelope rounded-xl w-[80%] max-lg:w-full max-md:w-[80%] max-sm:w-full h-fit p-2 border-black border-[1px] shadow-3xl"
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => {
              setShowCopyButton(true);
            }}
            onHoverEnd={() => {
              setShowCopyButton(false);
            }}
          >
            <motion.button
              whileInView={{
                rotate: [0, -120, 120, -120, 0],
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.8 }}
              className={`absolute top-5 right-5 square-button !bg-accent !border-primary ${
                showCopyButton ? "" : "md:hidden"
              }`}
              onClick={openNotification}
            >
              <Copy aria-hidden="true" className="h-3 w-3" />
            </motion.button>
            <div className="bg-foreground p-5 rounded-xl border-black border-[1px]">
              <p className={styles.withinSectionAddressText}>
                {Config.personal.address.street} <br />
                {Config.personal.address.residential} <br />
                {Config.personal.address.postalTown}
                <br />
                {Config.personal.address.stateCountry}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Location, "location");
