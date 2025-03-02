import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.js";

// Shared components
import Header from "./components/Header";

import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

// Research Pages
import ResearchSubPage from "./components/research/ResearchSubPage.js";


// Activities Pages
import ActivitiesMainPage from "./components/Activities/ActivitiesMainPage.js";


// Projects Pages
import ProjectsSubPage from "./components/projects/ProjectsSubPage.js";



const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/projects/MalariaDetection" element={<MalariaDetection />} />
    

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;