import React from "react";
import "../../styles/Research/Modular-Stimuli-Responsive-Valve.css";


const ModularStimuli = () => {
  return (
    <div className="msrv-overall-container">
       <div className="msrv-container">
        <div className="msrv-header-section">
            <div className="msrv-title-section">
                <h1>Modular Stimuli-Responsive Valves for Pneumatic Soft Robots</h1>
            </div>
            <div className="msrv-header-content">
                <div className="msrv-header-text">
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
            <div className="msrv-header-image">
                <img src="/images/Research/Modular-Stimuli-Responsive-Valve/header.png" 
                    alt="Modular Stimuli-Responsive Valves for Pneumatic Soft Robots">
                </img>
            </div>
          </div>
        </div>
        {/* Cards / Grid Section */}
        <div className="msrv-research-cards">
          <div className="msrv-card">
            <img
              src="/images/Research/Modular-Stimuli-Responsive-Valve/left.png"
              alt="Pneumatic display system showing the output of logic computation"
            />
            <h3>Pneumatic display system showing the output of logic computation</h3>
          </div>
          <div className="msrv-card">
            <img
              src="/images/Research/Modular-Stimuli-Responsive-Valve/right.png"
              alt="Rolling soft robot with responsive valves that could determine the motion trajectory based on the environment"
            />
            <h3>Rolling soft robot with responsive valves that could determine the motion trajectory based on the environment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModularStimuli;