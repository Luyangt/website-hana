import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Projects/ProjectsSubPage.css";
import ClothesCaringMachine from "./Clocle-multifunction-machine.js";
import GrandTheftAutonomous from "./Grand-theft-autonomous";
import BitcoinExplore from "./BitcoinExplore";
import Nanofabrication from "./Nanofabrication";


const ProjectsSubPage = () => {
    const projectTopics = [
      { title: "The Diagnostics and Response Strategies for Malaria", link: "src/components/projects/diagnostics-response-malaria.js" },
      { title: "\"Grand Theft Autonomous\" - Can-Grabbing Robot", link: "src/components/projects/Grand-theft-autonomous.js" },
      { title: "Cloclé Multifunction Clothes Caring Machine", link: "src/components/projects/Clocle-multifunction-machine.js" },
    ];

    return (
      <div className="project-page">
        <div className="header">
          <h1>Project</h1>
          <div className="content">
            <div className="topics">
              {projectTopics.map((topic, index) => (
                <Link to={topic.link} key={index} className="topic-link">
                  <div className="topic-item">{topic.title}</div>
                </Link>
              ))}
            </div>
            <div className="image">
              <img src="/images/project-image.png" alt="Project Visualization" />
            </div>
          </div>
        </div>

       {/* Project Sections */}
        <div className="project-content">

          <section id="Nanofabrication" className="project-section">
            <Nanofabrication />\
          </section>

          <section id="grand-theft-autonomous" className="project-section">
            <GrandTheftAutonomous />
          </section>\

          <section id="clothes-caring-machine" className="project-section">
            <ClothesCaringMachine />
          </section>\

          <section id="bitcoin" className="project-section">
            <BitcoinExplore />
          </section>\
        
        </div>
      </div>
    );
  };
  
export default ProjectsSubPage;