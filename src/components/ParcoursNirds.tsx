import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { NirdLevels, ParcoursNirds } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ParcoursNirdCard = ({ ParcoursNird }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1a2332", // tertiary - Bleu nuit moyen
        color: "#fff",
        boxShadow: "0 3px 0 #8C3267", // Bordure inférieure Ocean
        border: "1px solid rgba(0, 209, 178, 0.1)", // Bordure subtile Ocean
      }}
      contentArrowStyle={{
        borderRight: "7px solid #8C3267", // Flèche Ocean
      }}
      date={ParcoursNird.date}
      dateClassName="text-white-100"
      iconStyle={{
        background: ParcoursNird.iconBg || "#8C3267", // Ocean par défaut
        boxShadow: "0 0 0 4px #0a1929, 0 0 0 8px #8C3267", // Double bordure avec glow
      }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={ParcoursNird.icon}
            alt={`${ParcoursNird.company_name} logo`}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {ParcoursNird.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {ParcoursNird.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc marker:text-secondary">
        {ParcoursNird.points.map((point, index) => (
          <li
            key={`ParcoursNird-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ParcoursNird = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Les étapes clés de la transformation NIRD
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Parcours NIRD
        </h2>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline lineColor="#8C3267">
          {NirdLevels.map((ParcoursNird, index) => (
            <ParcoursNirdCard
              key={`ParcoursNird-${index}`}
              ParcoursNird={ParcoursNird}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(ParcoursNird, "parcours-nird");
