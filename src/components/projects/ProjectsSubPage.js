import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../../styles/Projects/ProjectsSubPage.css";
import ClothesCaringMachine from "./ClocleMultifunctionMachine.js";
import GrandTheftAutonomous from "./GrandTheftAutonomous.js";
import BitcoinExplore from "./BitcoinExplore";
import Nanofabrication from "./Nanofabrication";
import MalariaDetection from "./MalariaDetection.js";

const ProjectsSubPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <div className="project-header-text">
          <h1 className="project-title">Project</h1>
          <p>Brief description of the project and its importance....</p>
        </div>
        <div className="project-header-image">
          <img src="/images/Projects/banner.png" alt="Project Header Image" />
        </div>
      </div>

      <div className="project-topics-link">
        <h2 className="project-topics-title">PROJECT OVERVIEW</h2>

        {/* Single row of 4 cards */}
        <div className="project-topics-list">
          <Link smooth to="#grand-theft-autonomous" className="topic-link">
            <div className="topic-card">
              <div className="card-top-border"></div>
              <img 
                src="/images/Projects/Grand Theft Autonomous/header.png" 
                alt="Grand Theft Autonomous" 
              />
              <div className="topic-text">
                <h3>Grand Theft Autonomous<br/> Can-Grabbing Robot</h3>
              </div>
            </div>
          </Link>

          <Link smooth to="#clothes-caring-machine" className="topic-link">
            <div className="topic-card">
              <div className="card-top-border"></div>
              <img 
                src="/images/Projects/Clothes Caring Machine/Picture2.png" 
                alt="Cloclé Multifunction Clothes Caring Machine" 
              />
              <div className="topic-text">
                <h3>Cloclé Multifunction Clothes<br/> Caring Machine</h3>
              </div>
            </div>
          </Link>

          <Link smooth to="#bitcoin" className="topic-link">
            <div className="topic-card">
              <div className="card-top-border"></div>
              <img 
                src="/images/Projects/Bitcoin/for-link.png" 
                alt="Data Analysis: Bitcoin" 
              />
              <div className="topic-text">
                <h3>Data Analysis: Bitcoin</h3>
              </div>
            </div>
          </Link>

          <Link smooth to="#Nanofabrication" className="topic-link">
            <div className="topic-card">
              <div className="card-top-border"></div>
              <img 
                src="/images/Projects/Nano/header2.png" 
                alt="Nanofabrication" 
              />
              <div className="topic-text">
                <h3>Nanofabrication</h3>
              </div>
            </div>
          </Link>

          <Link smooth to="#malaria-detection" className="topic-link">
            <div className="topic-card">
              <div className="card-top-border"></div>
              <img 
                src="/images/Projects/MalariaDetection/link.png" 
                alt="MalariaDetection" 
              />
              <div className="topic-text">
                <h3>Malaria Detection System</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Project Sections */}
      <div className="project-main-content">
        <section id="grand-theft-autonomous" className="project-section">
          <GrandTheftAutonomous />
        </section>

        <section id="bitcoin" className="project-section">
          <BitcoinExplore />
        </section>

        <section id="clothes-caring-machine" className="project-section">
          <ClothesCaringMachine />
        </section>

        <section id="Nanofabrication" className="project-section">
          <Nanofabrication />
        </section>

        <section id="malaria-detection" className="project-section">
          <MalariaDetection />
        </section>
      </div>
    </div>
  );
};

export default ProjectsSubPage;