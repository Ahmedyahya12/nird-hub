import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/index";
const Hero = () => {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto" aria-label="Hero section">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5" aria-hidden="true">
          {/* Cercle Ocean avec effet glow */}
          <div className="w-5 h-5 rounded-full bg-secondary shadow-glow" />
          {/* Gradient Ocean */}
          <div className="w-1 h-40 sm:h-80 ocean-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="ocean-text-gradient">Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="hidden sm:block" />
            interfaces and web applications
          </p>
        </div>
      </div>
      

      
      {/* Scroll indicator avec Ocean - Accessible */}
      <div className="absolute flex items-center justify-center w-1/2 xs:bottom-10 bottom-32">
        <a 
          href="#about" 
          onClick={handleScrollToAbout}
          aria-label="Scroll down to about section"
          className="focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary rounded-3xl"
        >
          <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-accent transition-all duration-300 hover:shadow-glow">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary shadow-glow"
              aria-hidden="true"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;