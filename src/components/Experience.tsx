import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1a2332", // tertiary - Bleu nuit moyen
        color: "#fff",
        boxShadow: "0 3px 0 #008CBA", // Bordure inférieure Ocean
        border: "1px solid rgba(0, 209, 178, 0.1)", // Bordure subtile Ocean
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #008CBA" // Flèche Ocean
      }}
      date={experience.date}
      dateClassName="text-white-100"
      iconStyle={{ 
        background: experience.iconBg || "#008CBA", // Ocean par défaut
        boxShadow: "0 0 0 4px #0a1929, 0 0 0 8px #008CBA", // Double bordure avec glow
      }}
      icon={
        <div className='flex items-center justify-center w-full h-full'>
          <img
            src={experience.icon}
            alt={`${experience.company_name} logo`}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 ml-5 space-y-2 list-disc marker:text-secondary'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='flex flex-col mt-20'>
        <VerticalTimeline lineColor="#008CBA">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");