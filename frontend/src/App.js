import About from "./components/About/About";
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
      {/* <div className="background"></div> */}
    </div>
  );
}

export default App;
