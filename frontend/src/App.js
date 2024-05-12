import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProjectPage from "./components/Projects/ProjectPage";
import { useEffect } from "react";

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts
    setIsVisible(true);
  }, []);

  return (
        <div className={`App animated-component ${isVisible ? "visible" : ""}`} id="top" >
          <div id="trailer"></div>
          <Header />
          <Home />
          <About />
          <ProjectPage />
          <Contact />
        </div>
  );
}

export default App;
