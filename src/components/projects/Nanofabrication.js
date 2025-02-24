import React from "react";
import "../../styles/Projects/Nanofabrication.css";

const Nanofabrication = () => {
  return (
    <div className="nano-overall-container">
      <div className="nano-container">

      <div className="nano-header-section">
          {/* Title at the top */}
          <h1 className="nano-title-section">Nanofabrication &amp; Nano characterization</h1>

          {/* Body text and images below */}
          <div className="nano-body-text">
          <div className="nano-body-text-1">
            <img
                className="nano-img-right"
                src="/images/Projects/Nano/header1.png"
                alt="Design and fabrication of a MEMS system"
              />
              <p>
                In the <strong>Spring 2020 semester</strong>, I enrolled in the <strong>Nanofabrication &amp; Nanocharacterization </strong> course taught by <strong>Dr. George Patrick Watson.</strong>
              </p>
              {/* Image 1 (top-right) */}
              
              <p>
              This hands-on course provided practical experience with advanced nanofabrication 
              and characterization techniques through four key experiments:
              </p>
              
              <p>
              1. Microelectromechanical Systems (MEMS); 
               2. Directed Self-Assembly; 3. Quantum Dot Synthesis; 4. 2D Devices.
              </p>

            

              <p>
                Through these experiments, I gained knowledge in photolithography theory and methods, 
                and had the opportunity to design and execute related processes. 
                I also explored concepts related to <strong>directed self-assembly</strong> and <strong>quantum dots</strong>.
              </p>
            </div>
            <div className="nano-body-text-2">
              {/* Image 2 */}
              <img
                className="nano-img-left"
                src="/images/Projects/Nano/header2.png"
                alt="Another view of MEMS design"
              />
              <p>
                Due to the pandemic, I was unable to conduct the experiment on 2D devices in person. 
                However, Dr. Watson ingeniously structured the course to ensure we still acquired foundational 
                knowledge in 2D device technology. For my final project, I designed a 
                <strong> graphene-based DNA detection chip</strong>.
              </p>
              <p>
                In subsequent research, I applied the skills learned to <strong>microscale molding</strong>, 
                successfully scaling down common <strong>kirigami structures</strong> to the micrometer level. 
                Additionally, in various experiments, I frequently utilized 
                <strong> Physical Vapor Deposition (PVD)</strong> techniques to coat our samples with protective or 
                conductive metal layers.
              </p>
            </div>
            
            
          </div>
        </div>

        {/* Cards / Grid Section */}
        <div className="nano-project-cards">
          <div className="nano-card" id="nano-card1">
            <div className="card1-image1">
              <img
                src="/images/Projects/Nano/Picture1.png"
                alt="Microstructure design and fabrication for inducing material self-assembly"
              />
              <p>Figure 2: Microstructure design and fabrication for <strong>inducing material self-assembly</strong></p>
            </div>
            <div className="card1-image2">
              <img 
                src="/images/Projects/Nano/Picture2.png" 
                alt="Fluorescent quantum dots of different sizes produced by varying reaction times"
              />
              <p>Figure 3: Fluorescent quantum dots of different sizes produced by varying reaction times</p>
            </div>
         </div>
          <div className="nano-card" id="nano-card2">
            <img
              src="/images/Projects/Nano/Picture3.png"
              alt="Mold used for fabricating microscale kirigami structures" 
            />
            <p>Figure 4: Mold used for fabricating <br/> <strong>microscale kirigami structures</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nanofabrication;