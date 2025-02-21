import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Research/ResearchSubPage.css";
import InkDevelopment from "./InkDevelopment";
import ThreeDPrinting from "./intelligent-3D-printing";

const ResearchSubPage = () => {
    const researchTopics = [
      { title: "Development of Intelligent 3D Printing System", link: "/research/intelligent-3D-printing" },
      { title: "Actuators and Control Systems Design for Soft Robotics", link: "/research/actuators-soft-robotics" },
      { title: "Ink Development for Direct Ink Writing (DIW) 3D Printing", link: "/research/ink-3D-printing" },
      { title: "Fabrication of Microscale Kirigami Skin", link: "/research/fabrication-skin" },
      { title: "Thermodynamic and Kinetic Study of Austenite Phase Transformation", link: "/research/thermodynamic-transformation" },
    ];

    return (
      <div className="research-container">
        <div className="research-header">
          <h1 className="research-title">Research</h1>
          <div className="research-content-wrapper">
            <div className="research-topics-list">
              {researchTopics.map((topic, index) => (
                <Link to={topic.link} key={index} className="research-topic-link">
                  <div className="research-topic-item">{topic.title}</div>
                </Link>
              ))}
            </div>
            <div className="research-image-container">
              <img src="/images/research-image.png" alt="Research Visualization" className="research-hero-image" />
            </div>
          </div>
        </div>

        <div className="research-main-content">
          <section className="research-section">
            <InkDevelopment />
          </section>
        </div>

        <div className="research-main-content">
          <section className="research-section">
            <ThreeDPrinting />
          </section>
        </div>
      </div>
    );
};

export default ResearchSubPage;