import React from "react";
import "../../styles/Research/IronBased.css";

const IronBased = () => {
  return (
    <div className="iron-overall-container">
      <div className="iron-container">
        {/* Header Section */}
        <div className="iron-header-section">
          {/* Title at the very top */}
          <div className="iron-title-section">
            <h1>Thermodynamic Study of Reverse Austenite Transformation in Iron-Based Alloys</h1>
          </div>
          {/* Content: Text on the left, Image on the right */}
          <div className="iron-header-content">
            <div className="iron-header-text">
              <p>
                <strong>Composite electrodeposition</strong> is an effective technique for fabricating 
                <strong>nanocrystalline materials</strong>, offering advantages such as 
                <strong>smaller grain size, higher density, tunable composition, and lower cost</strong> 
                compared to traditional methods like <strong>ball milling, rapid solidification, and severe plastic deformation</strong>. 
                This study focuses on developing a <strong>(Ni-Fe)-ZrO₂ nanocrystalline thin film</strong> 
                through optimized electrodeposition processes.
              </p>
              <p>
                <strong>Development of (Ni-Fe)-ZrO₂ Composite Thin Films</strong><br/>
                Using <strong>zirconia (ZrO₂) as a secondary-phase particle</strong>, we explored key factors 
                influencing composite electrodeposition, including:
                <ul>
                    <li><strong>Deposition system and electrode configuration</strong> for uniform nanocrystalline growth</li>
                    <li><strong>Process and external field parameters</strong> to optimize grain structure and film density</li>
                    <li><strong>Pulse-reverse electrodeposition mechanisms</strong> for enhanced material properties</li>
                </ul>
              </p>
              <p>
                <strong>Enhanced Hardness and Material Performance</strong><br/>
                Through systematic optimization, we successfully fabricated <strong>(Ni-Fe)-ZrO₂ nanocrystalline thin films</strong>, 
                demonstrating <strong>higher hardness</strong> compared to conventional <strong>(Ni-Fe) thin films</strong>. 
                Additionally, we designed an optimized <strong>electrolytic cell</strong> for improved composite film deposition, 
                ensuring better material uniformity and reproducibility.
              </p>
              <p>
                <strong>Potential Applications</strong><br/>
                This research provides a <strong>low-cost pathway</strong> for producing 
                <strong>high-hardness nanocrystalline materials</strong>, with potential applications in 
                <strong>wear-resistant coatings, magnetic alloys, and advanced structural materials</strong>.
              </p>
            </div>
            <div className="iron-header-image">
              <img
                src="/images/Research/IronBased/header.png"
                alt="IronBased Header"
              />
              <h3>Figure1: Experiment apparatus of electrodeposition</h3>
            </div>
          </div>
        </div>

        <div className="iron-large-image">
          <img
            src="/images/Research/IronBased/Picture1.png"
            alt="Electrodeposition setup and electrolyte formulation"
          />
          <h3>Figure 2: Iron-based nanocrystalline thin film with zirconia (ZrO₂) nanoparticles</h3>
        </div>

       
      </div>
    </div>
  );
};

export default IronBased;