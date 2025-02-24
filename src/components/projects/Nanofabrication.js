import React from "react";
import "../../styles/Projects/Nanofabrication.css";

const Nanofabrication = () => {
  return (
    <div className="nano-overall-container">
      <div className="nano-container">
        <div className="nano-header-section">
          <img 
            src="/images/Projects/Nano/Picture1.png"
            alt="Design and fabrication of a MEMS system" 
            className="nano-header-img"
          />
          <div className="nano-header-text">
            <div className="nano-title-section">
              <h1>Project: Nanofabrication & Nano characterization</h1>
            </div>
            <p>
              In the <strong>Spring 2020 semester</strong>, I enrolled in the <strong>Nanofabrication & Nanocharacterization</strong> course taught by <strong>Dr. George Patrick Watson</strong>. 
              This hands-on course provided practical experience with advanced nanofabrication 
              and characterization techniques through four key experiments:
            </p>
            <ol>
              <li>Microelectromechanical Systems (MEMS)</li>
              <li>Directed Self-Assembly</li>
              <li>Quantum Dot Synthesis</li>
              <li>2D Devices</li>
            </ol>
            <p>
              Through these experiments, I gained knowledge in photolithography theory and methods, 
              and had the opportunity to design and execute related processes. 
              I also explored concepts related to <strong>directed self-assembly</strong> and <strong>quantum dots</strong>.
            </p>
            <p>
              Due to the pandemic, I was unable to conduct the experiment on 2D devices in person. 
              However, Dr. Watson ingeniously structured the course to ensure we still acquired foundational knowledge in 2D device
              technology. For my final project, I designed a <strong>graphene-based DNA detection chip</strong>.
            </p>
            <p>
              In subsequent research, I applied the skills learned to <strong>microscale molding</strong>, successfully scaling down common 
              <strong>kirigami structures</strong> to the micrometer level. Additionally, in various experiments, 
              I frequently utilized <strong>Physical Vapor Deposition (PVD)</strong> techniques to coat our samples with protective or 
              conductive metal layers.
            </p>
          </div>
        </div>

        {/* Cards / Grid Section */}
        <div className="nano-project-cards">
          <div className="nano-card nano-card1">
            <img
              src="/images/Projects/Nano/Picture2.png"
              alt="Microstructure design and fabrication for inducing material self-assembly"
            />
          </div>

          <div className="nano-card nano-card2">
            <img 
              src="/images/Projects/Nano/Picture3.png" 
              alt="Fluorescent quantum dots of different sizes produced by varying reaction times"
            />
          </div>

          <div className="nano-card nano-card3">
            <img
              src="/images/Projects/Nano/Picture5.png"
              alt="Mold used for fabricating microscale kirigami structures" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nanofabrication;