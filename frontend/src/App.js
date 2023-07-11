import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProjectPage from "./components/Projects/ProjectPage";

function App() {
  return (
        <div className="App" id="top">
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
