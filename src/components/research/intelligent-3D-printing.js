import React from "react";
import "../../styles/Research/3DPrinting.css";


const ThreeDPrinting = () => {
  return (
    <div className="threeD-container">
      {/* Hero / Header Section */}
      <div className="threeD-header-section">
        {/* Image on the left */}
        <div className="threeD-header-img">
            <img src="/images/Research/3D Printing/Picture2.png" 
                alt="an Intelligent 3D Printing System" 
            />
            <h4>Building an Intelligent 3D Printing System</h4>
        </div>
      
       {/* Text on the right */}
       <div className="threeD-header-text">
          <div className="threeD-title-section">
        <h1>3D Printing System Development</h1>
        </div>
        <p>
            In addition to developing <strong>3D printing inks</strong>, I was also responsible for the <strong>maintenance and customization</strong> of the laboratory’s 3D printers to meet the specific needs of our research group.
        </p>
        <p>
            <strong>Customization of FDM Printer for DIW Printing</strong>: I started by modifying a <strong>MakerGear M2 FDM printer</strong>, removing its FDM components and integrating a <strong>pneumatic control system</strong> to convert it into a <strong>DIW (Direct Ink Writing)</strong> printer.
        </p>
        <p>
            <strong>Building an Intelligent 3D Printing System</strong>: Later, I worked on designing a <strong>custom 3D printing system</strong> based on an <strong>Aerotech gantry platform</strong>, incorporating <strong>pneumatic control units</strong>, <strong>temperature control systems</strong>, and <strong>real-time monitoring with cameras</strong>.
        </p>
        <p>
            I implemented <strong>computer vision-based quality control</strong> by deploying a <strong>camera system on the printer</strong> to monitor DIW print quality. The printer was programmed to <strong>adjust printing parameters in real-time</strong> based on detected quality variations. This involved <strong>circuit design, mechanical structure design, C-based Arduino programming, Python programming, and AI techniques such as CNN and Transformer-based computer vision models</strong>.
        </p>
        <p>
            <strong>Multi-Channel Pneumatic Control for Soft Robotics</strong>: To facilitate the control of <strong>soft robotic actuators</strong>, I developed a <strong>multi-channel pneumatic control system</strong>. This system used <strong>solenoid valves and PWM control</strong> to regulate output air pressure dynamically.
        </p>
        <p>
            <strong>Exploring Advanced DIW Printing Techniques</strong>: Beyond system development, I also experimented with <strong>advanced DIW printing methods</strong>, including <strong>implanted 3D printing</strong>, <strong>sacrificial core-shell 3D printing</strong>, and <strong>multi-material printing</strong>.
        </p>
        <p>
            These efforts contributed to expanding the capabilities of <strong>DIW 3D printing</strong> for a range of applications in <strong>soft robotics, functional materials, and complex geometries</strong>.
        </p>
        </div>
      </div>

      {/* Cards / Grid Section */}
      <div className="threeD-project-cards">
        {/* Card 1 */}
        <div className="threeD-card">
            <img 
                src="/images/Research/3D Printing/Picture1.png"
                alt="Customization of FDM Printer for DIW Printing"
                className="card1-img1">
            </img>
         </div>
         {/* Card 2 */}
         <div className="threeD-card">
          <img
            src="/images/Research/3D Printing/Picture3.png"
            alt="Computer vision-assisted print quality inspection and adjustment system"
            className="threeD-card-img"
          />
        </div>
        {/* Card 3 */}
        <div className="threeD-card">
          <img
            src="/images/Research/3D Printing/Picture4.png"
            alt="Multi-Channel Pneumatic Control for Soft Robotics"
            className="threeD-card-img"
          />
        </div>
        {/* Card 4 */}
        <div className="threeD-card">
          <img
            src="/images/Research/3D Printing/Picture5.png"
            alt="Exploring Advanced DIW Printing Techniques"
            className="threeD-card-img"
          />
        </div>

      </div>
    </div>
  );
};

export default ThreeDPrinting;