import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectsSubPage.css";

const ProjectsSubPage = () => {
    const projectTopics = [
      { title: "The Diagnostics and Response Strategies for Malaria", link: "src/components/projects/diagnostics-response-malaria.js" },
      { title: "\"Grand Theft Autonomous\" - Can-Grabbing Robot", link: "src/components/projects/grand-theft-autonomous.js" },
      { title: "Cloclé Multifunction Clothes Caring Machine", link: "src/components/projects/clocle-multifunction-machine.js" },
    ];

    return (
      <div className="project-page">
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
    );
  };
  
export default ProjectsSubPage;