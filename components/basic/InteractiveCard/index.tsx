"use client";

import React from "react";
import { useEffect, useState, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { useIsMobile } from "@utils/useIsMobile";
import Image from "next/image";

import "./InteractiveCard.css";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

interface CardProps {
  className?: string;
  description?: string | undefined;
  hasHeading?: boolean;
  height?: string;
  title?: string | undefined;
  variants?: Variants;
  width?: string;
}

// Ref: https://github.com/typehero/typehero/blob/main/apps/web/src/app/%5Blocale%5D/_components/feature-card.tsx
const InteractiveCard = ({
  className = "",
  children = <></>,
  description = undefined,
  hasHeading = true,
  height = "w-fit",
  title = undefined,
  variants = undefined,
  width = "w-fit",
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
      className={`animated-feature-cards relative w-fit h-fit drop-shadow-md ${className}`}
      onMouseMove={handleMouseMovement}
      variants={variants}
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

interface ContactCardProps {
  title: string;
  description: string;
  icon: string;
}

const ContactCard = ({ title, description, icon }: ContactCardProps) => {
  function getRandomInt(min: number, max: number) {
    return Math.max(min, Math.floor(Math.random() * max));
  }

  return (
    <InteractiveCard
      title={title}
      description={description}
      width="w-[300px]"
      height="h-[300px]"
      className="group"
    >
      {Array.from(Array(30).keys()).map((key) => (
        <Image
          key={key}
          src={icon}
          alt="Icon"
          style={{
            left: getRandomInt(20, 250),
            animationDelay: `${getRandomInt(200, 5000)}ms`,
          }}
          className={`opacity-0 absolute bottom-[0px] group-hover:block group-hover:animate-float transition max-sm:animate-float`}
          width={getRandomInt(20, 45)}
          height={20}
        />
      ))}
    </InteractiveCard>
  );
};

export { InteractiveCard, ContactCard };
