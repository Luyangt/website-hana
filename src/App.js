import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Shared components
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";

// Research Pages
import ResearchSubPage from "./components/research/ResearchSubPage.js";
import InkDevelopment from "./components/research/InkDevelopment.js";
import ThreeDPrinting from "./components/research/Intelligent-3D-printing.js";
import UnderactuatedTails from "./components/research/UnderactuatedTails.js";
import Lattice from "./components/research/Lattice.js";
import Thermodynamic from "./components/research/Thermodynamic.js";
import IronBased from "./components/research/IronBased.js";
import ElectronicsFree from "./components/research/ElectronicsFree-soft-robots.js";
import ModularStimuli from "./components/research/Modular-Stimuli-Responsive-Valve.js";
import PneumaticActuators from "./components/research/PneumaticActuators.js";

// Activities Pages
import ActivitiesMainPage from "./components/Activities/ActivitiesMainPage.js";
import China_from_china from "./components/Activities/China_from_china.js";
import Chinese_new_year_gala from "./components/Activities/Chinese_new_year_gala.js";

// Projects Pages
import ProjectsSubPage from "./components/projects/ProjectsSubPage.js";
import ClothesCaringMachine from "./components/projects/Clocle-multifunction-machine.js";
import GrandTheftAutonomous from "./components/projects/Grand-theft-autonomous.js";
import BitcoinExplore from "./components/projects/BitcoinExplore.js";
import Nanofabrication from "./components/projects/Nanofabrication.js";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main */}
        <Route path="/" element={<MainPage />} />

        {/* Research */}
        <Route path="/research" element={<ResearchSubPage />} />
        <Route path="/research/ink-3D-printing" element={<InkDevelopment />} />
        <Route path="/research/Intelligent-3D-printing" element={<ThreeDPrinting />} />
        <Route path="/research/underactuated-tails" element={<UnderactuatedTails />} />
        <Route path="/research/lattice" element={<Lattice />} />
        <Route path="/research/thermodynamic" element={<Thermodynamic />} />
        <Route path="/research/iron-based" element={<IronBased />} />
        <Route path="/research/electronics-free-soft-robots" element={<ElectronicsFree />} />
        <Route path="/research/modular-stimuli-responsive-valve" element={<ModularStimuli />} />
        <Route path="/research/pneumatic-actuators" element={<PneumaticActuators />} />

        {/* Activities */}
        <Route path="/activities" element={<ActivitiesMainPage />} />
        <Route path="/activities/China_from_china" element={<China_from_china />} />
        <Route path="/activities/Chinese_new_year_gala" element={<Chinese_new_year_gala />} />

        {/* Projects */}
        <Route path="/projects" element={<ProjectsSubPage />} />
        <Route path="/projects/Clocle-multifunction-machine" element={<ClothesCaringMachine />} />
        <Route path="/projects/Grand-theft-autonomous" element={<GrandTheftAutonomous />} />
        <Route path="/projects/BitcoinExplore" element={<BitcoinExplore />} />
        <Route path="/projects/Nanofabrication" element={<Nanofabrication />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;