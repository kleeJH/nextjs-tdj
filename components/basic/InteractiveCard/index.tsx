"use client";

import React from "react";
import { useEffect, useState, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { useIsMobile } from "@utils/useIsMobile";

import "./InteractiveCard.css";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

interface CardProps {
  title?: string | undefined;
  description?: string | undefined;
  hasHeading?: boolean;
  width?: string;
  height?: string;
}

// Ref: https://github.com/typehero/typehero/blob/main/apps/web/src/app/%5Blocale%5D/_components/feature-card.tsx
const InteractiveCard = ({
  title = undefined,
  description = undefined,
  hasHeading = true,
  width = "w-fit",
  height = "w-fit",
  children = <></>,
}: CardProps & {
  children?: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();

  const handleMouseMovement = ({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) => {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="animated-feature-cards relative w-fit h-fit drop-shadow-md"
      onMouseMove={handleMouseMovement}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div
        className={`group relative border border-textLink ${width} ${height} overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 md:hover:border-transparent`}
      >
        <div className="m-6 w-full sm:m-10">
          {hasHeading && (
            <div className="flex w-5/6 flex-col gap-3 sm:w-4/6 md:w-4/5 xl:w-4/6">
              <h2 className="text-xl font-bold text-textDefault tracking-tight md:text-xl">
                {title}
              </h2>
              <p className="text-sm leading-5 text-zinc-600 dark:text-zinc-400 sm:text-base sm:leading-7 w-full">
                {description}
              </p>
            </div>
          )}
          {mounted ? children : null}
        </div>
      </div>
    </motion.div>
  );
};

const PhoneCard = () => {
  return (
    <div>
      <motion.img />
      <InteractiveCard
        title={"Phone"}
        description={"Call Us!"}
        width="w-[300px]"
        height="h-[300px]"
      ></InteractiveCard>
    </div>
  );
};

const WhatsAppCard = () => {
  return (
    <InteractiveCard title={"WhatsApp"} description={"Call Us!"}>
      <></>
    </InteractiveCard>
  );
};

const FacebookCard = () => {
  return (
    <InteractiveCard title={"Facebook"} description={"Call Us!"}>
      <></>
    </InteractiveCard>
  );
};

export { InteractiveCard, PhoneCard, WhatsAppCard, FacebookCard };
