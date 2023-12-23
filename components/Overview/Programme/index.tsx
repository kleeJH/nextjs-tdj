import React from "react";
import { Collapse, CollapseProps } from "antd";
import SectionWrapper from "@components/basic/SectionWrapper";
import { InteractiveCard } from "@components/basic/InteractiveCard";

import { styles } from "@styles/sharedStyles";
import "./Programme.css";

const Programme = () => {
  const subjects = [
    "Languages: BM, Mandarin & English",
    "Practical Life & Sensorial Activities",
    "Mathematics",
    "Art and Craft",
    "Music and Movement",
    "Character Building",
    "Physical Education",
    "Story Telling",
    "Science",
    "Coding",
    "Brain Gym",
    "Field trips",
    "Right brain stimulation",
  ];

  const subjectCollapseItems: CollapseProps["items"] = [
    {
      key: 1,
      label: (
        <h4
          className={`flex items-center ${styles.collapseItemTitleText} hover:text-textDefault`}
        >
          We Offer
        </h4>
      ),
      children: (
        <ul className={`${styles.withinSectionSubText} italic`}>
          {subjects.map((subject) => (
            <li key={subject}>* {subject}</li>
          ))}
        </ul>
      ),
    },
  ];

  const halfDayProgramme = [
    {
      title: "Nursery",
      description: "For 3+ years old",
      skills: [
        "Three languages",
        "Reading and introduction to prewriting",
        "Numeracy",
        "Basic shapes and arts",
        "Songs and movements",
        "Sensorial activities",
        "Story telling",
        "Science and Coding",
        "Building confidence",
        "Fine and gross motor skills",
      ],
    },
    {
      title: "Kindergarten 1",
      description: "For 4+ to 5 years old",
      skills: [
        "Three languages, communication and self-expression",
        "Reading and writing",
        "Mathematics",
        "Develop creativity in arts and songs",
        "Story telling",
        "Science and Coding",
        "Building confidence",
        "Fine and gross motor skills",
        "Social competency",
      ],
    },
    {
      title: "Kindergarten 2",
      description: "For 5+ to 6 years old",
      skills: [
        "Three languages, communication and self-expression",
        "Reading and writing",
        "Advance Mathematics",
        "Develop creativity in arts and critical thinking skills",
        "Science and Coding",
        "Develop positive character, independence and build self-confidence",
        "Gross motor skills",
      ],
    },
  ];

  const fullDay = [
    {
      title: "Tuition",
      description:
        "Provide support and guidance towards the English, Malay, Chinese and Mathematics subjects.",
      time: "Weekdays from 12:30 p.m. to 2:30 p.m.",
      ageGroup: "some age group",
    },
    {
      title: "Kids Interactive Programme (KIP)",
      description: "Provide homework guidance and tuition.",
      time: "Weekdays from 8:00 a.m. to 5:30 p.m.",
      ageGroup:
        "Age from as young as 3 years old and up to primary school students",
    },
    {
      title: "Speech and Drama class (optional)",
      description: "drama stuff",
      time: "Every Wednesday (4 times a month) with a duration of 1 hour each session",
      ageGroup: "some age group",
    },
  ];
  const fullDayCollapseItems: CollapseProps["items"] = fullDay.map(
    (prog, index) => ({
      key: index,
      label: (
        <h4
          className={`flex items-center ${styles.collapseItemTitleText} hover:text-textDefault`}
        >
          {prog.title}
        </h4>
      ),
      children: (
        <div className="flex flex-col gap-5">
          <div className={`${styles.withinSectionSubText} flex flex-col gap-2`}>
            <div className="px-4 py-1 border border-accent text-center">
              <span className={`blue-pink-text-gradient font-bold`}>
                Description
              </span>
            </div>
            <span>{prog.description}</span>
          </div>

          <div className={`${styles.withinSectionSubText} flex flex-col gap-2`}>
            <div className="px-4 py-1 border border-accent text-center">
              <span className={`blue-pink-text-gradient font-bold`}>Time</span>
            </div>
            <span>{prog.time}</span>
          </div>

          <div className={`${styles.withinSectionSubText} flex flex-col gap-2`}>
            <div className="px-4 py-1 border border-accent text-center">
              <span className={`blue-pink-text-gradient font-bold`}>
                Age Group
              </span>
            </div>
            <span>{prog.ageGroup}</span>
          </div>
        </div>
      ),
    })
  );

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>WHAT WE DO</p>
        <h2 className={styles.sectionHeadText}>Our Programme.</h2>
      </div>

      <div className="flex flex-col w-fit">
        <p className={`${styles.withinSectionSubText} mt-3`}>
          TDJ adopts National Curriculum, Montessori, Multiple Intelligences,
          Thematic, and Digital literacy in our teachings. We respect the
          children&apos;s need for learning through concrete and hands-on
          experiences. Our classrooms are well equipped with educational
          materials to engage the children&apos;s interest in learning.
        </p>

        <Collapse
          items={subjectCollapseItems}
          style={{ marginTop: "2rem", maxWidth: "48rem" }}
        />
      </div>

      <h2 className={styles.withinSectionHeadText}>Half Day Programme</h2>
      <p className={`${styles.withinSectionSubText} mt-3`}>
        Some information about half day. Depending on the situation, student
        need to attend their respective session. Do note that there are limited
        spaces for either sessions. <br />
        <br />
        There are two sessions available:
      </p>

      <div className="flex flex-col justify-start gap-3 my-5 w-full">
        <div
          className={`${styles.withinSectionSubText} flex flex-row gap-2 items-center`}
        >
          <span
            className={`blue-pink-text-gradient font-bold px-4 py-1 border border-accent text-center`}
          >
            Morning Session
          </span>
          <span>8:00 a.m. to 12:00 noon</span>
        </div>
        <div
          className={`${styles.withinSectionSubText} flex flex-row gap-2 items-center`}
        >
          <span
            className={`blue-pink-text-gradient font-bold px-2 py-1 border border-accent text-center`}
          >
            Afternoon Session
          </span>
          <span>12:30 p.m. to 4:30 p.m.</span>
        </div>
      </div>

      <p className={`${styles.withinSectionSubText} mt-10`}>
        Below are curriculum that each student within their age group will have:
      </p>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-10">
        {halfDayProgramme.map((prog) => (
          <InteractiveCard
            key={prog.title}
            title={prog.title}
            description={prog.description}
          >
            <div className="mt-3">
              <span className="text-accent font-semibold">
                The curriculum emphasises skills in:
              </span>
              <ul
                className={`${styles.listItemText} flex-wrap mt-2 list-disc space-y-1 w-[180px] h-[280px]`}
              >
                {prog.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </InteractiveCard>
        ))}
      </div>

      <h2 className={styles.withinSectionHeadText}>
        Full Day and Enrichment Programmes
      </h2>
      <p className={`${styles.withinSectionSubText} mt-3`}>
        Our schoool also provides programmes that can enrich your child&apos;s
        education and experience.
      </p>
      <p className={`${styles.withinSectionSubText} mt-10`}>
        Below are the programmes that we offer:
      </p>
      <Collapse
        items={fullDayCollapseItems}
        style={{ marginTop: "2rem", maxWidth: "48rem" }}
      />
    </>
  );
};

export default SectionWrapper(Programme, "programme");
