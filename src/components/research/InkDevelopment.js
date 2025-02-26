import React from "react";
import "../../styles/Research/InkDevelopment.css";

const InkDevelopment = () => {
  return (
    <div className="ink-overall-container">
      <div className="ink-container">
        {/* Hero / Header Section */}
        <div className="ink-header-section">
          <div className="ink-title-section">
            <h1>Ink Development for Direct Ink Writing (DIW) 3D Printing</h1>
          </div>
          <div className="ink-header-content">
            <div className="ink-header-text">
              <p>
                Direct Ink Writing (DIW) is an additive manufacturing technique that utilizes materials exhibiting <strong>shear-thinning</strong> properties. In this process, a material's viscosity decreases under applied shear stress, allowing it to flow through a narrow nozzle when pressure is applied. Once extruded, the material quickly solidifies, enabling the construction of complex structures layer by layer.
              </p>
              <p>
                During my tenure at the Architected Materials Lab, I experimented with a diverse range of inks. Beyond standard silicone rubber, I explored materials such as <strong>magnetic soft composites, liquid crystal elastomers, hydrogels, epoxy resins, conductive soft materials</strong>, and even unconventional mixtures like <strong>cookie dough and sticky rice blended with cotton</strong>. Additionally, we developed a recyclable <strong>eggshell-based soft material</strong> intended for use as a customized fertilizer.
              </p>
            </div>
            <div className="ink-header-image">
              <video controls className="card-video">
                <source
                  src="/images/Research/InkDevelopment/header.mp4"
                  type="video/mp4"
                />
              </video>
              </div>
        </div>
      </div>
      <div className="ink-large-image">
        <img
          src="/images/Research/InkDevelopment/Picture1.png"
          alt="Ink Development for Direct Ink Writing (DIW) 3D Printing"
        />
        <h3>Figure 1: Materials previously explored for Direct Ink Writing (DIW) 3D printing</h3>
      </div>

    </div>
  </div>
  );
};

export default InkDevelopment;