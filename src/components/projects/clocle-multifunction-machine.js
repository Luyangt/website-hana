import React from "react";
import "../../styles/Projects/ClocleMultifunction.css";


const ClothesCaringMachine = () => {
  return (
    <div className="Clothes-Caring-Machine-container">
      {/* Hero / Header Section */}
      <div className="header-section">
        {/* Image on the left */}
      <img src="/images/Projects/Clothes Caring Machine/Picture3.png" 
            alt="Clothes Caring Machine"
            className="header-img"
      />
       {/* Text on the right */}
       <div className="header-text">
        <div className="title-section">
            <h1>Product Design Project</h1>
            <h4>Cloclé Multifunction Clothes Caring Machine</h4>
        </div>
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
      </div>

      {/* Cards / Grid Section */}
      <div className="project-cards">
        {/* Card 1 */}
        <div className="card">
          <img
            src="/images/Projects/Clothes Caring Machine/Picture1.png"
            alt="I'm designing the clothes caring machine model" 
          />
          <h3>I'm designing the clothes caring machine model</h3>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="/images/Projects/Clothes Caring Machine/Picture2.png"
            alt="Clothes Caring Machine Advertising image"
          />
          <h3>Clothes Caring Machine Advertising image</h3>
        </div>
      </div>
    </div>
  );
};

export default ClothesCaringMachine;