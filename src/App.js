import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import ResearchSubPage from "./components/research/ResearchSubPage.js";
import ProjectsSubPage from "./components/projects/ProjectsSubPage.js";
import Activities from "./components/Activities/ActivitiesMainPage";
import Actuators from "./components/research/actuators-soft-robotics";
import Ink from "./components/research/ink-3D-printing";
import Fabrication from "./components/research/fabrication-skin";
import Thermodynamic from "./components/research/thermodynamic-transformation";
import Intelligent from "./components/research/intelligent-3D-printing";
import Clocle from "./components/projects/clocle-multifunction-machine";
import GrandTheft from "./components/projects/grand-theft-autonomous";
import Malaria from "./components/projects/diagnostics-response-malaria";



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/research" element={<ResearchSubPage />} />
        <Route path="/projects" element={<ProjectsSubPage />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/research/actuators-soft-robotics" element={<Actuators />} />
        <Route path="/research/ink-3D-printing" element={<Ink />} />
        <Route path="/research/fabrication-skin" element={<Fabrication />} />
        <Route path="/research/thermodynamic-transformation" element={<Thermodynamic />} />
        <Route path="/research/intelligent-3D-printing" element={<Intelligent />} />
        <Route path="/projects/clocle-multifunction-machine" element={<Clocle />} />
        <Route path="/projects/grand-theft-autonomous" element={<GrandTheft />} />
        <Route path="/projects/diagnostics-response-malaria" element={<Malaria />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
