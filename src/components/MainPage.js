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
        <p>Your introduction goes here.</p>
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