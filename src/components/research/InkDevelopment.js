import React from "react";
import "../../styles/Research/InkDevelopment.css";


const InkDevelopment = () => {
  return (
    <div className="ink-container">
      {/* Hero / Header Section */}
      <div className="ink-header-section">
        {/* Image on the left */}
        <div className="ink-header-img">
            <img src="/images/Projects/InkDevelopment/Picture1.png" 
                alt="Materials previously explored for Direct Ink Writing (DIW) 3D printing" 
            />
            <h4>Materials previously explored for Direct Ink Writing (DIW) 3D printing</h4>
        </div>
      
       {/* Text on the right */}
       <div className="ink-header-text">
        <div className="ink-title-section">
            <h1>Ink Development for Direct Ink Writing (DIW) 3D Printing</h1>
        </div>
        <p>
        Direct Ink Writing (DIW) is an additive manufacturing technique that utilizes materials exhibiting <strong>shear-thinning</strong> properties. 
        In this process, a material's viscosity decreases under applied shear stress, allowing it to flow through a narrow nozzle 
        when pressure is applied. Once extruded, the material quickly solidifies, 
        enabling the construction of complex structures layer by layer.
        </p>

        <p>
        During my tenure at the Architected Materials Lab, I experimented with a diverse range of inks. 
        Beyond standard silicone rubber, I explored materials such as <strong>magnetic soft composites, liquid crystal elastomers, 
        hydrogels, epoxy resins, conductive soft materials</strong>, and even unconventional mixtures 
        like <strong>cookie dough and sticky rice blended with cotton</strong>. Additionally, we developed a recyclable <strong>eggshell-based soft material</strong>
         intended for use as a customized fertilizer.
        </p>
       </div>
      </div>

      {/* Cards / Grid Section */}
      <div className="ink-project-cards">
         {/* Card 1 */}
         <div className="card card1">
            <img 
                src="/images/Projects/InkDevelopment/picture-a.png"
                alt="img1"
                className="card1-img1">
            </img>
            <img 
                src="/images/Projects/InkDevelopment/picture-b.png"
                alt="img2"
                className="card1-img3">
            </img>
         </div>
        {/* Card 2 */}
        <div className="card">
          <video controls className="card-video">
            <source
              src="/images/Projects/InkDevelopment/20201117_1.mp4"
              type="video/mp4"
            />
          </video>
          <p>Video 1: A soft robot fabricated with magnetic soft material</p>
        </div>

      </div>
    </div>
  );
};

export default InkDevelopment;