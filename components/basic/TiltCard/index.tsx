import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { fadeIn } from "@utils/motion";

const TiltCard = ({
  index,
  icon,
  className = "",
}: {
  index: number;
  icon: string | StaticImport;
  className?: string;
}) => {
  return (
    <Tilt className={`2xl:w-[240px] xl:w-[220px] sm:w-[200px] xs:w-[150px] w-[100px] ${className}`}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
        className="w-full card-border-gradient p-1 rounded-xl shadow-xm"
      >
        <Image
          src={icon}
          alt="Hero Picture"
          className=" w-fit h-fit object-contain rounded-xl"
        />
      </motion.div>
    </Tilt>
  );
};

export default TiltCard;
