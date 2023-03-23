import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProjectPage from "./components/Projects/ProjectPage";

function App() {
  return (
    <div className="App">
      <div id="trailer"></div>
      <Header />
      <Home />
      <ProjectPage />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}

export default App;
