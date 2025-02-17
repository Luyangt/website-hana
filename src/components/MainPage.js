import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">

      {/* Introduction Section */}
      <section className="introduction">
        <h2>About Me</h2>
        <p>Hi, I'm Yucong Hua (花育聪), a fourth-year Ph.D. student in Mechanical Engineering and Applied Mechanics (MEAM) at the University of Pennsylvania. My work focuses on soft robotics, advanced 3D printing, and intelligent fabrication technologies.
I combine mechanics, nano fabrication, hardware design, and AI-based image processing to develop innovative soft robotic systems and manufacturing techniques. I also enjoy applying my skills to engineering projects, from automation systems to material innovations.
Beyond research, I actively participate in cultural and educational initiatives. I work as an international teacher at the Penn Museum, teaching ”china form China”, and I organized the 2024 Greater Philadelphia Area Chinese New Year Gala as chief director.
</p>
      </section>

      
       {/* Research/Project Areas or Content Grid */}
      <section className="research-areas">
        <h2>AERAS OF RESEARCH</h2>
        <div className="modules">
          <div className="module">
            <img src="/images/research1.png" alt="Research 1" />
            <p>Intelligent Soft Materials</p>
          </div>
          <div className="module">
            <img src="/images/research2.png" alt="Research 2" />
            <p>Soft Robotics</p>
          </div>
          <div className="module">
            <img src="/images/research3.png" alt="Research 3" />
            <p>Origami Systems</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MainPage;