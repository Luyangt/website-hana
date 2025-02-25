import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
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

        {/* Research Topics Link Section */}
      <div className="research-topics-link">
        <h2 className="research-topics-title">RESEARCH OVERVIEW</h2>
        <div className="research-topics-list">
          {/* First Row: 4 Cards */}
          <div className="topic-row">
            <Link smooth to="/research/Intelligent-3D-printing" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Development of Intelligent 3D Printing System</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="/research/InkDevelopment" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Ink Development for Direct Ink Writing (DIW) 3D Printing</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="/research/ElectronicsFree-soft-robots" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Electronics-Free Soft Robotics</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="/research/Modular-Stimuli-Responsive-Valve" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Modular Stimuli-Responsive Valves for Pneumatic Soft Robots</h3>
                </div>
              </div>
            </Link>
          </div>
          {/* Second Row: 5 Cards */}
          <div className="topic-row">
            <Link smooth to="/research/PneumaticActuators" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Pneumatic Actuators for Soft Robotics</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="/research/UnderactuatedTails" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Dynamics and Design of Underactuated Tails for Motion Stability</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="/research/Lattice" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Lattice Structures for Soft Robotics</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="/research/Thermodynamic" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Thermodynamic Soft Robotics</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="/research/IronBased" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <div className="topic-text">
                  <h3>Iron-Based Soft Robotics</h3>
                </div>
              </div>
            </Link>
          </div>
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