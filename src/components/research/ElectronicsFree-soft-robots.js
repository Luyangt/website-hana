import React from "react";
import "../../styles/Research/ElectronicsFree-soft-robots.css";

const ElectronicsFree = () => {
  return (
    <div className="ef-overall-container">
      <div className="ef-container">
        {/* Header Section */}
        <div className="ef-header-section">
          {/* Title at the very top */}
          <div className="ef-title-section">
            <h1>
              Distributed and embodied control of electronics-free soft robots
            </h1>
          </div>
          {/* Content: Text on the left, Image on the right */}
          <div className="ef-header-content">
            <div className="ef-header-text">
              <p>
                This project explores an <strong>electronics-free approach</strong>{" "}
                for achieving <strong>autonomous control in soft robots</strong>, where
                the <strong>material composition and structural design</strong> inherently
                embody the <strong>sensing, control, and actuation feedback loop</strong>.
              </p>
              <p>
                <strong>Modular Control Units with Responsive Materials</strong>
                <br />
                We designed multiple <strong>modular control units</strong>, each regulated
                by <strong>responsive materials</strong> such as{" "}
                <strong>liquid crystal elastomers (LCEs)</strong>. These modules allow the
                robot to <strong>sense and respond</strong> to various external stimuli,
                including <strong>light, heat, and solvent</strong>.
              </p>
              <p>
                <strong>Logical Evaluations for Complex Responses</strong>
                <br />
                By combining multiple types of <strong>control modules</strong>, the robot
                can perform <strong>logical evaluations</strong>, enabling{" "}
                <strong>multi-step decision-making</strong>.
              </p>
              <p>
                <strong>Impact and Applications</strong>
                <br />
                This <strong>embodied control framework</strong> provides a new pathway for{" "}
                <strong>autonomous, electronics-free soft robots</strong> capable of operating
                in <strong>uncertain or dynamic environments</strong>.
              </p>
            </div>
            <div className="ef-header-image">
              <img
                src="/images/Research/ElectronicsFree-soft-robots/iloveimg-compressed/header.png"
                alt="ElectronicsFree-soft-robots"
              />
            </div>
          </div>
        </div>


        <div className="ef-large-image">
          <img
            src="/images/Research/ElectronicsFree-soft-robots/iloveimg-compressed/Picture1.png"
            alt="ElectronicsFree-soft-robots"
          />
        </div>
      </div>
    </div>
  );
};

export default ElectronicsFree;