import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Research/ResearchSubPage.css";


const SubPage = () => {
    const researchTopics = [
      { title: "Development of Intelligent 3D Printing System", link: "/research/intelligent-3D-printing" },
      { title: "Actuators and Control Systems Design for Soft Robotics", link: "/research/actuators-soft-robotics" },
      { title: "Ink Development for Direct Ink Writing (DIW) 3D Printing", link: "/research/ink-3D-printing" },
      { title: "Fabrication of Microscale Kirigami Skin", link: "/research/fabrication-skin" },
      { title: "Thermodynamic and Kinetic Study of Austenite Phase Transformation", link: "/research/thermodynamic-transformation" },
    ];

    return (
      <div className="research-page">
        <h1>Research</h1>
        <div className="content">
          <div className="topics">
            {researchTopics.map((topic, index) => (
              <Link to={topic.link} key={index} className="topic-link">
                <div className="topic-item">{topic.title}</div>
              </Link>
            ))}
          </div>
          <div className="image">
            <img src="/images/research-image.png" alt="Research Visualization" />
          </div>
        </div>
      </div>
    );
  };
  
export default SubPage;