"use client";
import Config from "@config";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BackgroundGrid from "@components/basic/GridBackground";
import TiltCard from "@components/basic/TiltCard";

import { styles } from "@styles/sharedStyles";
import "./Hero.css";

const Hero = () => {
  const cards = [
    {
      icon: Config.hero.picture1,
      motionProps: {
        initial: {
          y: -20,
          x: 0,
          opacity: 0,
        },
        animate: {
          y: -30,
          opacity: 1,
        },
      },
    },
    {
      icon: Config.hero.picture1,
      motionProps: {
        initial: {
          y: 100,
          x: -50,
          opacity: 0,
        },
        animate: {
          y: 110,
          opacity: 1,
        },
      },
    },
    {
      icon: Config.hero.picture1,
      motionProps: {
        initial: {
          y: 0,
          x: -90,
          opacity: 0,
        },
        animate: {
          y: -10,
          opacity: 1,
        },
      },
    },
  ];
  return (
    <div className="container relative min-h-[calc(80vh)] max-nav:pt-16 overflow-hidden">
      <div className="absolute inset-10 -z-30 overflow-hidden rounded-full opacity-70 nav:hidden">
        <BackgroundGrid />
      </div>
      <div className="relative grid justify-center items-center nav:grid-cols-2 gap-24">
        <div className="flex flex-col gap-5 justify-center items-center nav:items-start">
          <h1 className={`${styles.heroWelcomeText}`}>Welcome!</h1>
          <div className="flex w-fit flex-row justify-center items-center gap-5 nav:pr-5">
            <motion.span
              whileInView={{
                rotate: [0, -5, 10, 0],
                transition: { duration: 1 },
              }}
              whileHover={{
                rotate: [0, -5, 10, 0],
                transition: { duration: 1, repeat: Infinity },
              }}
              className="max-sm:w-32"
            >
              <Image
                src={Config.logoHighDef}
                alt="TDJ's Logo"
                width={170}
                height={170}
                className="px-4 py-2 drop-shadow-md"
              />
            </motion.span>
            <div className="flex flex-col justify-center items-center">
              <h1 className={`${styles.heroHeadText} stretch`}>Tadika</h1>
              <h1 className={`${styles.heroHeadText}`}>Desa Jaya</h1>
            </div>
          </div>
          <p
            className={`${styles.heroSubText} nav:text-left text-center max-nav:px-20 max-sm:w-[315px] max-sm:px-0`}
          >
            Joyful learning, lasting memories. Nurturing young minds with love.
            A place where little explorers blossom! Every child&apos;s adventure
            begins here.
          </p>
        </div>

        <div className="relative hidden nav:flex nav:flex-row justify-center items-center overflow-visible h-[600px] w-full">
          <div className="absolute -inset-40 top-1/2 -z-30 -translate-y-1/2 translate-x-[-30px] overflow-hidden rounded-full">
            <BackgroundGrid />
          </div>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              animate={Object.assign({}, card.motionProps.animate, {
                transition: {
                  duration: 0.4,
                },
              })}
              initial={card.motionProps.initial}
              whileHover={{
                zIndex: 100,
                scale: 1.1,
              }}
            >
              <TiltCard index={index} icon={card.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <motion.div
  animate={{ rotate: 180 }}
  transition={{ repeat: Infinity, duration: 2 }}
/> */
}
