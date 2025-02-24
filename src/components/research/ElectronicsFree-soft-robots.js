import React from "react";
import "../../styles/Research/ElectronicsFree-soft-robots.css";

const ElectronicsFree = () => {
  return (
    <div className="ef-overall-container">
      <div className="ef-container">
        {/* Hero / Header Section */}
        <div className="ef-header-section">
          <div className="ef-header-text">
            <div className="ef-title-section">
              <h1>
                Distributed and embodied control of electronics-free soft robots
              </h1>
            </div>
            <p>
              This project explores an <strong>electronics-free approach</strong> for achieving <strong>autonomous control in soft robots</strong>, 
              where the <strong>material composition and structural design</strong> inherently embody the <strong>sensing, control, and actuation feedback loop</strong>.
            </p>
            <p>
              <strong>Modular Control Units with Responsive Materials</strong>
              <br />
              We designed multiple <strong>modular control units</strong>, each regulated by <strong>responsive materials</strong> such as 
              <strong> liquid crystal elastomers (LCEs)</strong>. These modules allow the robot to <strong>sense and respond</strong> to various external stimuli, including 
              <strong>Light, heat, and solvent</strong>. As a result, the robot can autonomously adjust its trajectory based on environmental conditions.
            </p>
            <p>
              <strong>Logical Evaluations for Complex Responses</strong>
              <br />
              By combining multiple types of <strong>control modules</strong>, the robot can perform <strong>logical evaluations</strong>, 
              enabling <strong>multi-step decision-making</strong>. For example, it can be programmed to execute an action 
              <strong>only when multiple environmental events occur simultaneously</strong>.
            </p>
            <p>
              <strong>Impact and Applications</strong>
              <br />
              This <strong>embodied control framework</strong> provides a new pathway for <strong>autonomous, electronics-free soft robots</strong> capable 
              of operating in <strong>uncertain or dynamic environments</strong>. Such systems could be applied in areas like 
              <strong>biomedical engineering, environmental sensing, and adaptive robotic systems</strong>.
            </p>
          </div>
            {/* Image on the left */}
            <div className="ef-header-img">
              <img
                src="/images/Research/ElectronicsFree-soft-robots/header.png"
                alt="ElectronicsFree-soft-robots"
              />
            </div>
        </div>

        {/* Project Cards Section */}
      </div>
    </div>
  );
};

export default ElectronicsFree;