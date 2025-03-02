import React from "react";
import "../../styles/Projects/ClocleMultifunction.css";

const ClothesCaringMachine = () => {
  return (
    <div className="clocle-overall-container">
      <div className="clocle-container">

        {/* Hero / Header Section */}
        <div className="clocle-header-section">
          <div className="clocle-header-text">
            <div className="clocle-title-section">
              <h1>Product Design Project</h1>
              <h2>Cloclé Multifunction Clothes Caring Machine</h2>
            </div>
            <div className="clocle-header-content">
              <div className="clocle-header-paragraph">
                <p>
                  In the summer of 2020, I enrolled in the Product Design course at the University of Pennsylvania, 
                  taught by Dr. Clay Burns, the Product Design Director at S'well. 
                  Throughout this course, we delved into the comprehensive process of product design, which encompassed:
                </p>
                <ul>
                  <li>Needs assessment</li>
                  <li>Market research</li>
                  <li>Clarification of design concepts</li>
                  <li>Identification and research of potential users</li>
                  <li>Setting technical specifications</li>
                  <li>Product design</li>
                  <li>Prototyping</li>
                  <li>Product iteration and optimization</li>
                  <li>Patent application</li>
                  <li>Environmental impact assessment</li>
                  <li>Product marketing</li>
                  <li>Product launch</li>
                </ul>
                <p>
                  This immersive experience highlighted the distinct focuses of scientific research and product design, 
                  allowing me to acquire a diverse set of skills. For our project, we designed and developed a Multifunction Clothes 
                  Caring Machine named Cloclé to address the heightened demand for garment disinfection during the pandemic.
                </p>
              </div>
              <div className="clocle-header-img">
                <img 
                  src="/images/Projects/Clothes Caring Machine/Picture3.png" 
                  alt="Clothes Caring Machine"
                  className="clocle-header-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards / Grid Section */}
        <div className="clocle-project-cards">

          <div className="clocle-card">
            <img
              src="/images/Projects/Clothes Caring Machine/Picture1.png"
              alt="Clothes Caring Machine design image"
            />
            <h3 className="clocle-card-explain">Clothes Caring Machine Advertising image</h3>
          </div>
          <div className="clocle-card">
            <img
              src="/images/Projects/Clothes Caring Machine/Picture2.png"
              alt="Clothes Caring Machine Advertising image"
            />
            <h3 className="clocle-card-explain">Clothes </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothesCaringMachine;