import React from "react";
import "../../styles/Projects/grand-theft-autonomous.css";


const GrandTheftAutonomous = () => {
  return (
    <div className="grand-theft-container">
      {/* Hero / Header Section */}
      <div className="header-section">
        {/* Image on the left */}
      <img src="/images/Projects/Grand Theft Autonomous/Picture1.png" 
            alt="Grand Theft Autonomous"
            className="header-img"
      />
       {/* Text on the right */}
       <div className="header-text">
        <div className="title-section">
            <h1>Autonomous Robotics Project</h1>
            <h4>"Grand Theft Autonomous" - Can-Grabbing Robot</h4>
        </div>
        <p>
        During the <strong>Fall 2022-2023 semester</strong>, I took the <strong>Design of Mechatronic Systems</strong> course taught by <strong>Prof. Mark Yim</strong>. 
        This course introduced key components commonly used in mechatronic systems, including <strong>microprocessors, motors, servos, and sensors</strong>
       , and provided insights into the process of building integrated mechatronic systems.
        For the <strong>final project</strong>, we were tasked with designing <strong>a wheeled robot</strong> capable of <strong>autonomous wall following</strong> and 
        <strong>target detection</strong>. To achieve these functionalities, we:
        </p>
        <ul>
            <li>Selected ESP32 as the robot's controller</li>
            <li>Used two motors with encoders for precise motion control</li>
            <li>Implemented wall-following functionality using ToF and ultrasonic sensors</li>
            <li>Powered the system with a lithium battery</li>
        </ul>
        <p>
        By the end of the project, our robot successfully met all the design requirements and demonstrated stable 
        performance in autonomous navigation and target interaction.
        </p>
       </div>
      </div>

      {/* Cards / Grid Section */}
      <div className="project-cards">
        {/* Card 1 */}
        <div className="card">
          <video controls className="card-video">
            <source
              src="/images/Projects/Grand Theft Autonomous/IMG_7127_575BE7AA-FB41-43A7-8E8B-6041E31DBE30.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Card 2 */}
        <div className="card">
          <video controls className="card-video">
            <source
              src="/images/Projects/Grand Theft Autonomous/1320.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default GrandTheftAutonomous;