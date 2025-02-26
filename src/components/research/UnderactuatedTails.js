import React from "react";
import "../../styles/Research/UnderactuatedTails.css";

const UnderactuatedTails = () => {
  return (
    <div className="ut-overall-container">
      <div className="ut-container">
        {/* Header Section */}
        <div className="ut-header-section">
          {/* Title at the very top */}
          <div className="ut-title-section">
            <h1>Dynamics and Design of Underactuated Tails for Motion Stability</h1>
          </div>
          {/* Content: Text on the left, Image on the right */}
          <div className="ut-header-content">
            <div className="ut-header-text">
              <p>
                Tails play a crucial role in <strong>stabilization, maneuverability, and posture control</strong> in animal locomotion. 
                Inspired by these functions, we investigate how <strong>underactuated tails</strong> can enhance the stability of 
                robotic systems subjected to external disturbances.
              </p>
              <p>
                <strong>Numerical and Experimental Study of Tail Dynamics</strong><br/>
                We study the <strong>nonlinear dynamics of tail motion</strong> using both <strong>numerical simulations and physical experiments</strong>. 
                Our simulations model tails as a <strong>series of rigid vertebrae</strong> connected by <strong>longitudinal, shear, and bending springs</strong>, 
                mimicking the biomechanics of natural tails. We analyze how <strong>different geometric and stiffness gradients</strong> 
                affect the <strong>dynamic response of the tail to impulse loading</strong>.
              </p>
              <p>
                <strong>Pulse Propagation and Stability Enhancement</strong><br/>
                Our results show that <strong>flexible tails can support stable wavefronts</strong> when subjected to sudden forces. 
                By incorporating a <strong>geometric gradient</strong> (gradually decreasing vertebra length) and a <strong>stiffness gradient</strong> 
                (reducing the stiffness of connecting tissues), we enhance <strong>lateral displacement and pulse velocity</strong> 
                along the tail, improving its ability to absorb and redistribute energy.
              </p>
              <p>
                <strong>Applications in Robotic Stability</strong><br/>
                These findings provide valuable insights for <strong>bio-inspired robotic design</strong>. The ability to manipulate 
                pulse propagation in flexible tails can be applied to <strong>robotic vehicles and legged robots</strong>, improving 
                their stability and control in <strong>dynamic and unstructured environments</strong>.
              </p>
            </div>
            <div className="ut-header-image">
              <img
                src="/images/Research/UnderactuatedTails/header.png"
                alt="Dynamics and Design of Underactuated Tails"
              />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default UnderactuatedTails;