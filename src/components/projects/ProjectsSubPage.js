import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Projects/ProjectsSubPage.css";
import ClothesCaringMachine from "./Clocle-multifunction-machine.js";
import GrandTheftAutonomous from "./Grand-theft-autonomous";
import BitcoinExplore from "./BitcoinExplore";
import Nanofabrication from "./Nanofabrication";


const ProjectsSubPage = () => {
    const projectTopics = [
      { title: "\"Grand Theft Autonomous\" - Can-Grabbing Robot", link: "src/components/projects/Grand-theft-autonomous.js" },
      { title: "Data analysis: Bitcoin", link: "src/components/projects/BitcoinExplore.js" },
      { title: "Cloclé Multifunction Clothes Caring Machine", link: "src/components/projects/Clocle-multifunction-machine.js" },
      { title: "Nanofabrication", link: "src/components/projects/Nanofabrication.js"}
    ];

    return (
      <div className="project-container">
        <div className="project-header">
          <div className="project-header-text">
            <h1 className="project-title">Project</h1>
            <p>
              Brief description of the project and its importance....
            </p>
          </div>

          <div className="project-header-image">
              <img src="/images/Projects/banner.png" alt="Project Header Image" />
          </div>
        </div>
          
      <div className="project-topics-link">
        <div className="project-topics-list">
            {projectTopics.map((topic, index) => (
                <Link to={topic.link} key={index} className="topic-link">
                  <div className="topic-item">{topic.title}</div>
                </Link>
            ))}
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
      </div>
    </div>
    );
  };
  
export default ProjectsSubPage;