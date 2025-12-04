import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Feedbacks,
  Tech,
  Works,
  Contact,
} from "./components";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        {/* <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0 ">
          <Contact />
        </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
