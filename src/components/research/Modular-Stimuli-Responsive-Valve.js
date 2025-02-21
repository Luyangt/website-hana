import React from "react";
import "../../styles/Research/Modular-Stimuli-Responsive-Valve.css";


const ModularStimuli = () => {
  return (
    <div>
       <div className="msrv-first-container">
        {/* Image on the left */}
        <div className="msrv-first-container-img">
              <img src="/images/Research/Modular-Stimuli-Responsive-Valve/Picture1.png" 
                  alt="Modular Stimuli-Responsive Valves for Pneumatic Soft Robots">
              </img>
        </div>
        
        {/* Text on the right */}
        <div className="msrv-first-container-content">
              <h1>Modular Stimuli-Responsive Valves for Pneumatic Soft Robots</h1>
              <div>
                  <p>
                      This project presents <strong>modular responsive valves</strong> that enable <strong>autonomous airflow regulation</strong> 
                      in <strong>pneumatic soft robots</strong>, responding dynamically to <strong>environmental stimuli</strong> such as: 
                      <strong>Light, Water, or Mechanical forces</strong>.
                  </p>

                  <p>
                      <strong>Autonomous Logic and Advanced Operations</strong><br/>
                      By integrating multiple types of <strong>responsive valves</strong>, we can construct <strong>autonomous logic gates</strong> 
                      and achieve <strong>higher-level logical operations</strong>, allowing soft robots to 
                      <strong>process and respond to complex environmental cues</strong>.
                  </p>

                  <p>
                      <strong>Integration with Pneumatic Soft Robots</strong><br/>
                      We demonstrate that these <strong>responsive valves</strong> can be seamlessly integrated into 
                      <strong>pneumatic soft robotic systems</strong>, enabling functionalities such as 
                      <strong>Autonomous morphing</strong> and <strong>Self-regulated navigation</strong>.
                  </p>

                  <p>
                      <strong>Impact and Applications</strong><br/>
                      This <strong>modular valve framework</strong> provides a pathway toward 
                      <strong>autonomous pneumatic robots</strong> capable of adapting to their surroundings 
                      without the need for traditional electronics, making them suitable for 
                      <strong>biomedical applications, environmental monitoring, and adaptive robotics</strong>.
                  </p>

                  <p>
                      I presented this project on 2024 GRC <strong>Multifunctional Materials and Structures</strong> with a poster.
                  </p>
              </div>
          </div>
      </div>
      <div className="msrv-second-container">
          <img src="/images/Research/Modular-Stimuli-Responsive-Valve/Picture2.png" alt="conference"></img>
      </div>
    </div>
  );
};

export default ModularStimuli;