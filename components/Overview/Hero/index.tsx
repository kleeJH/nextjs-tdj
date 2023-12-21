"use client";
import Config from "@config";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { useRouter } from "next/navigation";

import BackgroundGrid from "@components/basic/GridBackground";
import TiltCard from "@components/basic/TiltCard";
import ShinyButton from "@components/basic/ShinyButton";

import { styles } from "@styles/sharedStyles";
import "./Hero.css";

const Hero = () => {
  const router = useRouter();

  const cards = [
    {
      icon: Config.hero.picture1,
      motionProps: {
        initial: {
          y: -80,
          x: 40,
          opacity: 0,
        },
        animate: {
          y: -70,
          opacity: 1,
        },
      },
    },
    {
      icon: Config.hero.picture1,
      motionProps: {
        initial: {
          y: 60,
          x: 0,
          opacity: 0,
        },
        animate: {
          y: 50,
          opacity: 1,
        },
      },
    },
    {
      icon: Config.hero.picture1,
      motionProps: {
        initial: {
          y: -40,
          x: -30,
          opacity: 0,
        },
        animate: {
          y: -30,
          opacity: 1,
        },
      },
    },
  ];
  return (
    <div className="container relative min-h-[calc(90vh)] max-nav:pt-16 overflow-hidden">
      <div className="absolute inset-10 -z-30 overflow-hidden rounded-full opacity-70 nav:hidden">
        <BackgroundGrid />
      </div>

      <div className="relative grid justify-center items-center grid-cols-1 nav:grid-cols-2 gap-10 nav:gap-24">
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
              <h1 className={`${styles.heroHeadYearText}`}>Since 1974</h1>
            </div>
          </div>
          <p
            className={`${styles.heroSubText} nav:text-left text-center max-nav:px-20 max-sm:w-[315px] max-sm:px-0`}
          >
            Joyful learning, lasting memories. Nurturing young minds with love.
            A place where little explorers blossom! Every child&apos;s adventure
            begins here.
          </p>
          <motion.div
            whileHover={{
              scale: [1, 1.1, 1],
              transition: { duration: 1, repeat: 2 },
            }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <ShinyButton
              buttonText="Start Exploring!"
              callbackFunc={() => {
                router.replace("/#about");
              }}
              icon={<Compass aria-hidden="true" className="h-4 w-4" />}
            />
          </motion.div>
        </div>

        <div className="relative hidden sm:flex sm:flex-row justify-center items-center overflow-visible h-[500px] nav:h-[600px] w-full">
          <div className="hidden nav:flex absolute -inset-40 top-1/2 -z-30 -translate-y-1/2 translate-x-[-30px] overflow-hidden rounded-full">
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
