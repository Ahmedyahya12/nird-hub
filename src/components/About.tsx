import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }} // <-- déplacé ici (correct)
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.76)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="object-contain w-16 h-16" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdution</p>
        <h2 className={styles.sectionHeadText}>Overiew</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray- text-[17px] max-w-3xl leading-[30px]"
      >
        I am a motivated Web Developer skilled in HTML, CSS, JavaScript,
        React.js, and backend tools like Node.js, PHP, and MySQL. I build clean,
        responsive applications and enjoy transforming ideas into functional
        solutions. I have worked on CRUD apps, dashboards, reservation systems,
        and AI-powered tools, with a strong focus on teamwork and Git/GitHub
        practices.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
