import React from "react";
import "../styles/MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="main-page-overall-container">
      <div className="main-page-container">
        <div className="main-page-header">
          <video id="background-video" loop autoPlay muted>
            <source src="/images/MainPage/video1.mp4"></source>
          </video>
          {/* <h1 className="header-title">Printing soft and living matter across multiple scales</h1> */}
        </div>
      

      {/* Introduction Section */}
      <div className="introduction">
        <div className="introduction-header">
          <h2 className="introduction-title">About Me</h2>
        </div>
        <div className="introduction-content">
          <div className="introduction-content-image">
            <img src="/images/MainPage/header.png" alt="Profile" />
          </div>
          <div className="introduction-content-paragraph">
            <p>
              Hi, I’m <strong>Yucong Hua (花育聪)</strong>, a fourth-year Ph.D. student in 
              <strong> Mechanical Engineering and Applied Mechanics (MEAM) </strong> at the 
              <strong> University of Pennsylvania</strong>. My work focuses on 
              <strong> soft robotics, advanced 3D printing, and intelligent fabrication technologies.</strong>
            </p>

            <p>
              I combine <strong>mechanics, nano fabrication, hardware design, and AI-based image processing </strong>  
               to develop innovative soft robotic systems and manufacturing techniques. I also enjoy applying my 
              skills to <strong>engineering projects</strong>, from automation systems to material innovations.
            </p>

            <p>
              Beyond research, I actively participate in <strong>cultural and educational initiatives.</strong> 
              I work as an <strong>international teacher at the Penn Museum</strong>, teaching 
              <em>"china form China"</em>, and I organized the 
              <strong> 2024 Greater Philadelphia Area Chinese New Year Gala</strong> as chief director.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="gallery">
        <img src="/images/MainPage/Picture1.png" alt="working in lab"></img>
        <img src="/images/MainPage/Picture2.png" alt="driving towing machine"></img>
        <img src="/images/MainPage/Picture3.png" alt="in Chinese traditional clothe"></img>
      </div> */}

      
      <div className="mainpage-topics-link">
        <h2 className="mainpage-topics-title">QUICK LINKS</h2>
        <div className="mainpage-topics-list">
          <Link to="/research" className="topic-link">
            <div className="topic-card">
              <div className="card-top-border" id="research"></div>
              <img src="/images/Research/ElectronicsFree-soft-robots/header.png" alt="Research"  className="card-image"/>
              <div className="topic-text">
                <h3>Research</h3>
              </div>
            </div>
          </Link>

          <Link to="/projects" className="topic-link">
            <div className="topic-card">
              <div className="card-top-border" id="project"></div>
              <img src="/images/Projects/banner.png" alt="Research"  className="card-image" />
              <div className="topic-text">
                <h3>Project</h3>
              </div>
            </div>
          </Link>

          <Link to="/activities" className="topic-link">
            <div className="topic-card">
              <div className="card-top-border" id="activity"></div>
              <img src="/images/Activities/banner1.png" alt="Research"  className="card-image"/>
              <div className="topic-text">
                <h3>Activity</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      </div>
    </div>
  );
};

export default MainPage;