import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../../styles/Research/ResearchSubPage.css";
import InkDevelopment from "./InkDevelopment";
import ThreeDPrinting from "./IntelligentPrinting";
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
          <div className="topic-row" id="topic-row-1">
          <Link smooth to="#ElectronicsFree-soft-robots" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="/images/Research/ElectronicsFree-soft-robots/header.png" 
                 alt="ElectronicsFree-soft-robots" 
                />
                <div className="topic-text">
                  <h3>Electronics-Free Soft Robotics</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="#Modular-Stimuli-Responsive-Valve" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="/images/Research/Modular-Stimuli-Responsive-Valve/link.png" 
                 alt="Modular Stimuli-Responsive Valves for Pneumatic Soft Robots" 
                />
                <div className="topic-text">
                  <h3>Modular Stimuli-Responsive Valves for Pneumatic Soft Robots</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="#PneumaticActuators" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="/images/Research/PneumaticActuators/header.png" 
                 alt="Pneumatic Actuators for Soft Robotics" 
                />
                <div className="topic-text">
                  <h3>Modular Pneumatic Actuators</h3>
                </div>
              </div>
            </Link>
            
            <Link smooth to="#Lattice" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="/images/Research/Lattice/link.png" 
                 alt="Lattice Structures for Soft Robotics" 
                />
                <div className="topic-text">
                  <h3>Pneumatic Smart Lattice</h3>
                </div>
              </div>
            </Link>
            <Link smooth to="#InkDevelopment" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="images/Research/InkDevelopment/link.png" 
                 alt="Ink Development for Direct Ink Writing (DIW) 3D Printing" 
                />
                <div className="topic-text">
                  <h3>Ink Development for Direct Ink Writing 3D Printing</h3>
                </div>
              </div>
            </Link>

            
            
            
          </div>
          {/* Second Row: 5 Cards */}
          <div className="topic-row" id="topic-row-2">
          <Link smooth to="#Intelligent-3D-printing" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="/images/Research/3D Printing/header.png" 
                 alt="Grand Theft Autonomous" 
                />
                <div className="topic-text">
                  <h3>Intelligent 3D Printing System</h3>
                </div>
              </div>
            </Link>
          
            <Link smooth to="#UnderactuatedTails" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="/images/Research/UnderactuatedTails/link.png" 
                 alt="Dynamics and Design of Underactuated Tails for Motion Stability" 
                />
                <div className="topic-text">
                  <h3>Underactuated Tails </h3>
                </div>
              </div>
            </Link>
            <Link smooth to="#IronBased" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="/images/Research/IronBased/header.png" 
                 alt="Thermodynamic Soft Robotics" 
                />
                <div className="topic-text">
                  <h3>Electrodeposition of Steel</h3>
                </div>
              </div>
            </Link>
            
            <Link smooth to="#Thermodynamic" className="research-topic-link">
              <div className="research-topic-item">
                <div className="card-top-border"></div>
                <img 
                 src="/images/Research/Thermodynamic/header.png" 
                 alt="Thermodynamic Soft Robotics" 
                />
                <div className="topic-text">
                  <h3>Thermodynamic of Steel</h3>
                </div>
              </div>
            </Link>
            
          </div>
        </div>
      </div>

        <div className="research-main-content">

          <section id="ElectronicsFree-soft-robots" className="research-section">
            <ElectronicsFree />
          </section>

          <section id="Modular-Stimuli-Responsive-Valve" className="research-section">
            <ModularStimuli />
          </section>

          <section id="PneumaticActuators" className="research-section">
            <PneumaticActuators />
          </section>

          <section id="Lattice" className="research-section">
            <Lattice />
          </section>
    
          <section id="InkDevelopment" className="research-section">
            <InkDevelopment />
          </section>

          <section id="Intelligent-3D-printing" className="research-section">
            <ThreeDPrinting />
          </section>

          <section id="UnderactuatedTails" className="research-section">
            <UnderactuatedTails />
          </section>

          <section id="Thermodynamic" className="research-section">
            <Thermodynamic />
          </section>

          <section id="IronBased" className="research-section">
            <IronBased />
          </section>

      </div>
    </div>
    );
};

export default ResearchSubPage;