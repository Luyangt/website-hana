import React from "react";
import "../../styles/Research/Lattice.css";


const Lattice = () => {
  return (
    <div>
       <div className="lat-container">
        {/* Image Section */}
        <div className="lat-container-img">
              <img src="/images/Research/Lattice/Picture1.png" 
                  alt="Pneumatically Controlled Lattices with Tunable Buckling Behavior">
              </img>
        </div>
        
        {/* Text on the right */}
        <div className="lat-container-content">
            <h1>Pneumatically Controlled Lattices with Tunable Buckling Behavior</h1>
            <div className="lat-text">
            <p>
                Buckling instability limits the performance of lattice structures, primarily governed by <strong>nodal connectivity</strong>. 
                This project introduces a <strong>pneumatic control strategy</strong> to dynamically <strong>tune and reconfigure lattice buckling behavior</strong>, 
                providing a scalable method for structural adaptability.
            </p>

            <p>
                <strong>Pneumatic Actuation for Adaptive Lattice Control</strong><br/>
                By integrating <strong>pneumatic actuators</strong>, we enable <strong>post-manufacturing adjustments</strong> to nodal connectivity. 
                Inflating actuators with different strengths (<strong>strong, medium, weak</strong>) allows for 
                <strong>reversible transitions between bending-dominated and stretching-dominated lattices</strong>, 
                effectively altering mechanical response.
            </p>

            <p>
                <strong>Enhanced Buckling and Impact Resistance</strong><br/>
                Controlled air pressure modulation improves <strong>buckling resistance by up to 121.6%</strong> and enables 
                <strong>programmable post-buckling behavior</strong>. Under impact loads, these lattices demonstrate a 
                <strong>50.9% improvement in impact mitigation</strong>, showcasing their potential for <strong>adaptive structures</strong>.
            </p>

            <p>
                <strong>Versatility and Applications</strong><br/>
                This pneumatic approach is <strong>material-agnostic and topology-independent</strong>, making it applicable to a 
                wide range of <strong>lattice-based structures for aerospace, impact-resistant materials, and morphing architectures</strong>.
            </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Lattice;