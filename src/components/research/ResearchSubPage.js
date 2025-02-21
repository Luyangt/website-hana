import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Research/ResearchSubPage.css";
import InkDevelopment from "./InkDevelopment";
import ThreeDPrinting from "./Intelligent-3D-printing";
import ElectronicsFree from "./ElectronicsFree-soft-robots";

const ResearchSubPage = () => {
    const researchTopics = [
      { title: "Development of Intelligent 3D Printing System", link: "/research/Intelligent-3D-printing" },
      { title: "Ink Development for Direct Ink Writing (DIW) 3D Printing", link: "/research/InkDevelopment" },
      { title: "Electronics-Free Soft Robotics", link: "/research/ElectronicsFree-soft-robots" },
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

        <div className="research-main-content">
          <section className="research-section">
            <ElectronicsFree />
          </section>
        </div>


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