import React from "react";
import SectionWrapper from "@components/basic/SectionWrapper";

import { styles } from "@styles/sharedStyles";

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>WHO WE ARE</p>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
      </div>

      <h2 className={styles.withinSectionHeadText}>Founder</h2>
      <p className={`${styles.withinSectionSubText} mt-3`}>
        In 1974, Madam Wong founded this warm and inviting preschool with a
        heartfelt commitment to offering an affordable and quality learning
        environment for young children. A former school teacher, Madam
        Wong&apos;s passion for educating children and extensive experience in
        early childhood education have left a lasting impact on the lives of
        many youngsters in Kepong, Selayang, and Sungai Buloh.
      </p>

      <h2 className={styles.withinSectionHeadText}>Principal</h2>
      <p className={`${styles.withinSectionSubText} mt-3`}>
        Meet our esteemed Preschool Principal, Ms. Lim. She&apos;s a dedicated
        professional with a Master&apos;s in Early Childhood Education and over
        two decades of experience. Ms. Lim is devoted to creating a nurturing
        educational setting that fosters the growth of every child. Her passion
        for early childhood education enriches the learning journey for each
        student as she collaborates with her dedicated team to ensure TDJ offers
        a cutting-edge curriculum, promoting intellectual, social, and emotional
        development.
      </p>

      <h2 className={styles.withinSectionHeadText}>Our Vision</h2>
      <p className={`${styles.withinSectionSubText} mt-3`}>
        At Tadika Desa Jaya, our vision is to cultivate a safe and inspiring
        learning environment where curiosity thrives, creativity is celebrated,
        and each student discovers their unique potential. We aim to inspire
        young minds to develop robust cognitive, social, and emotional skills,
        guiding them to become well-rounded individuals and future leaders.
      </p>

      <h2 className={styles.withinSectionHeadText}>Our Mission</h2>
      <p className={`${styles.withinSectionSubText} mt-3`}>
        We are committed to providing a nurturing and stimulating environment
        where every child&apos;s curiosity is sparked, and the joy of learning
        is ignited. Constantly evaluating our teaching methods, we nurture a
        love for learning, fostering the social, emotional, and intellectual
        growth of each child. At TDJ, we are laying the foundation for a
        lifetime of discovery and success.
      </p>
    </>
  );
};

export default SectionWrapper(About, "about");
