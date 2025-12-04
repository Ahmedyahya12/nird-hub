import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar } from "./components";

import VideoBackground from "./components/VideoBackground";
import ParcoursNirds from "./components/ParcoursNirds";

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
          {/* <About /> */}
          <ParcoursNirds />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
