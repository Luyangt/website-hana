import React from "react";
import "../../styles/Research/Thermodynamic.css";


const Thermodynamic = () => {
  return (
    <div className="thermo-container">
      {/* Hero / Header Section */}
      <div className="thermo-header-section">
        {/* Image on the left */}
        <div className="thermo-header-img">
            <img src="/images/Research/Thermodynamic/Picture2.png" 
                alt="Thermodynamic" 
            />
            
        </div>
      
       {/* Text on the right */}
       <div className="thermo-header-text">
          <div className="thermo-title-section">
        <h1>Thermodynamic Study of Reverse Austenite Transformation in Iron-Based Alloys</h1>
        </div>
            <p>
                Precise control of <strong>phase transformations in steel</strong> is crucial for optimizing its 
                <strong>mechanical properties and performance</strong>. Among these transformations, 
                <strong>reverse austenite transformation</strong> plays a key role in tailoring 
                <strong>microstructure stability and toughness</strong> in advanced alloys.
            </p>

            <p>
                Reverse austenite transformation occurs when <strong>supersaturated martensite (α′)</strong> 
                reverts to <strong>austenite (γ)</strong> during <strong>tempering or aging</strong>. 
                This transformation follows two distinct mechanisms: 
                <strong>Shear-driven transformation</strong> – forming <strong>needle-like austenite</strong> 
                between martensite laths; and <strong>Diffusion-driven transformation</strong> – forming 
                <strong>blocky austenite</strong> along prior austenite grain boundaries.
            </p>

            <p>
                To study <strong>shear-driven transformation</strong>, we apply 
                <strong>first-principles calculations based on density functional theory (DFT)</strong>, 
                focusing on <strong>crystallographic pathways and thermodynamics</strong>, 
                moving beyond conventional <strong>Bain, KS, and NW models</strong>. 
                For <strong>diffusion-driven transformation</strong>, we employ 
                <strong>full transformation kinetics</strong> and <strong>interface dynamics models</strong> 
                to describe the thermodynamics and predict microstructural evolution.
            </p>

            <p>
                This study provides a <strong>deeper understanding of phase transformation mechanisms</strong>, 
                offering insights for <strong>precise microstructure control</strong> in advanced steel alloys.
            </p>
        </div>
      </div>

      {/* Cards / Grid Section */}
      <div className="thermo-project-cards">
        {/* Card 1 */}
        <div className="thermo-card">
          <img
            src="/images/Research/Thermodynamic/Picture1.png"
            alt="Two typical martensite morphologies and their distributions"
            className="thermo-card-img1"
          />
        </div>
        {/* Card 2 */}
        <div className="thermo-card">
          <img
            src="/images/Research/Thermodynamic/Picture2.png"
            alt="First-principles study of crystallographic evolution in shear-driven martensite transformation"
            className="thermo-card-img"
          />
        </div>
        {/* Card 3 */}
        <div className="thermo-card">
          <img
            src="/images/Research/Thermodynamic/Picture3.png"
            alt="Traditional thermodynamic analysis of microstructural evolution in diffusion-driven martensite transformation"
            className="thermo-card-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Thermodynamic;