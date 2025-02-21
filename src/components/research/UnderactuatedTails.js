import React from "react";
import "../../styles/Research/UnderactuatedTails.css";


const UnderactuatedTails = () => {
  return (
    <div>
       <div className="ut-container">
      {/* Image Section */}
      <div className="ut-container-img">
              <img src="/images/Research/UnderactuatedTails/Picture1.png" 
                  alt="Dynamics and Design of Underactuated Tails">
              </img>
        </div>
        
        {/* Text on the right */}
        <div className="ut-container-content">
            <h1>Dynamics and Design of Underactuated Tails for Motion Stability</h1>
            <div className="ut-text">
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
          </div>
      </div>
    </div>
  );
};

export default UnderactuatedTails;