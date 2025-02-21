import React from "react";
import "../../styles/Research/PneumaticActuators.css";


const PneumaticActuators = () => {
  return (
    <div className="pa-container">
      {/* Hero / Header Section */}
      <div className="pa-header-section">
        {/* Image on the left */}
        <div className="pa-header-img">
            <img src="/images/Research/PneumaticActuators/Picture1.png" 
                alt="Modular pneumatic actuators for versatile soft robotic application" 
            />
        </div>
      
       {/* Text on the right */}
       <div className="pa-header-text">
          <div className="pa-title-section">
        <h1>Modular pneumatic actuators for versatile soft robotic application</h1>
        </div>
            <p>
                Pneumatic actuators are one of the most fundamental <strong>driving mechanisms</strong> in soft robotics. 
                However, most existing designs are tailored for <strong>specific actuation responses</strong>, making them 
                <strong>non-redeployable</strong> after use.
            </p>

            <p>
                <strong>Modular Approach to Soft Actuation</strong><br/>
                To address this limitation, we decompose soft actuator deformations into three fundamental motion units: 
                <strong>Bending, Twisting, and Extension</strong>. Instead of designing <strong>one-time-use actuators</strong>, 
                we treat these fundamental deformations as <strong>modular functional units</strong>. By 
                <strong>reconfiguring and combining these modules</strong>, actuators can be <strong>quickly repurposed and reprogrammed</strong> 
                for different robotic applications. Additionally, we introduce <strong>responsive modules</strong> that react to 
                <strong>external environmental changes</strong>, further enhancing the adaptability of the system.
            </p>

            <p>
                <strong>Implementation and Impact</strong><br/>
                Through systematic studies of these modules, we successfully assembled <strong>various soft actuators</strong> 
                using modular pneumatic units, achieving diverse <strong>pneumatic-driven functionalities</strong>. 
                This modular approach <strong>expands the applicability</strong> of soft actuators, increases their 
                <strong>versatility</strong>, and <strong>reduces design and manufacturing costs</strong>, offering a promising strategy 
                for <strong>scalable and adaptive soft robotic systems</strong>.
            </p>
        </div>
      </div>
    </div>


  );
};

export default PneumaticActuators;