import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import ResearchSubPage from "./components/research/ResearchSubPage.js";
import ProjectsSubPage from "./components/projects/ProjectsSubPage.js";
import Activity from "./components/Activities/ActivitiesMainPage.js";
import InkDevelopment from "./components/research/InkDevelopment.js";
import ThreeDPrinting from "./components/research/Intelligent-3D-printing.js";
import ClothesCaringMachine from "./components/projects/Clocle-multifunction-machine.js";
import GrandTheftAutonomous from "./components/projects/Grand-theft-autonomous.js";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/research" element={<ResearchSubPage />} />
        <Route path="/projects" element={<ProjectsSubPage />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/research/ink-3D-printing" element={<InkDevelopment />} />
        <Route path="/research/Intelligent-3D-printing" element={<ThreeDPrinting />} />
        <Route path="/projects/Clocle-multifunction-machine" element={<ClothesCaringMachine />} />
        <Route path="/projects/Grand-theft-autonomous" element={<GrandTheftAutonomous />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;