import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.js";

// Shared components
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";

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
        
        {/* Activities */}
        <Route path="/activities" element={<ActivitiesMainPage />} />
       

        {/* Projects */}
        <Route path="/projects" element={<ProjectsSubPage />} />
    

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;