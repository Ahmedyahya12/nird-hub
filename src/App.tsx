import { BrowserRouter } from "react-router-dom";
import { About, Hero, Navbar } from "./components";
import Experience from "./components/Experience";
import VideoBackground from "./components/VideoBackground";
import OceanBodyMap from "./components/OceanBodyMap";
import OceanHumanMap from "./components/OceanBodyMap";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="relative min-h-screen">
          <VideoBackground />
          <Navbar />
          <Hero />
        </div>

        <div className="bg-gradient-to-b from-primary via-[#0a0a1f] to-primary">
          <About />
          <Experience />
          <OceanBodyMap />
          {/* <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
