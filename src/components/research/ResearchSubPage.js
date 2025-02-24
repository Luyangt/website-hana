import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Research/ResearchSubPage.css";
import InkDevelopment from "./InkDevelopment";
import ThreeDPrinting from "./Intelligent-3D-printing";
import ElectronicsFree from "./ElectronicsFree-soft-robots";
import ModularStimuli from "./Modular-Stimuli-Responsive-Valve";
import PneumaticActuators from "./PneumaticActuators";
import UnderactuatedTails from "./UnderactuatedTails";
import Lattice from "./Lattice";
import Thermodynamic from "./Thermodynamic";
import IronBased from "./IronBased";

const ResearchSubPage = () => {
    const researchTopics = [
      { title: "Development of Intelligent 3D Printing System", link: "/research/Intelligent-3D-printing" },
      { title: "Ink Development for Direct Ink Writing (DIW) 3D Printing", link: "/research/InkDevelopment" },
      { title: "Electronics-Free Soft Robotics", link: "/research/ElectronicsFree-soft-robots" },
      { title: "Modular Stimuli-Responsive Valves for Pneumatic Soft Robots", link: "/research/Modular-Stimuli-Responsive-Valve" },
      { title: "Pneumatic Actuators for Soft Robotics", link: "/research/PneumaticActuators" },
      { title: "Dynamics and Design of Underactuated Tails for Motion Stability", link: "/research/UnderactuatedTails" },
      { title: "Lattice Structures for Soft Robotics", link: "/research/Lattice" },
      { title: "Thermodynamic Soft Robotics", link: "/research/Thermodynamic" },
      { title: "Iron-Based Soft Robotics", link: "/research/IronBased" },
      
    ];

    return (
      <div className="research-container">
        <div className="research-header">
          <div className="research-header-text">
            <h1 className="research-title">Research</h1>
            <p>
              Brief description of the research and its importance....
            </p>
          </div>
          
          <div className="research-header-image">
              <img src="/images/Research/research-banner2.png" alt="Research Header Image" />
          </div>
        </div>

        <div className="research-topics-link">
            <div className="research-topics-list">
              {researchTopics.map((topic, index) => (
                <Link to={topic.link} key={index} className="research-topic-link">
                  <div className="research-topic-item">{topic.title}</div>
                </Link>
              ))}
            </div>
        </div>

        <div className="research-main-content">

          <section className="research-section">
            <ElectronicsFree />
          </section>

          <section className="research-section">
            <ModularStimuli />
          </section>

          <section className="research-section">
            <PneumaticActuators />
          </section>
    
          <section className="research-section">
            <InkDevelopment />
          </section>


          <section className="research-section">
            <ThreeDPrinting />
          </section>

          <section className="research-section">
            <UnderactuatedTails />
          </section>

          <section className="research-section">
            <Lattice />
          </section>

          <section className="research-section">
            <Thermodynamic />
          </section>

          <section className="research-section">
            <IronBased />
          </section>

      </div>
    </div>
    );
};

export default ResearchSubPage;