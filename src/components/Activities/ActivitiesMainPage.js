import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../../styles/Activity/ActivityMainPage.css"; 
import Conference from "./conference";
import China_from_china from "./China_from_china";
import Chinese_new_year_gala from "./Chinese_new_year_gala";

const Activity = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        {/* Image at the top-right */}
        <div className="activity-header-image">
          <img src="/images/Activities/banner1.png" alt="Activities Visualization" />
        </div>
      </div>

      {/* Activity Overview */}
      <div className="activity-topics-link">
        <h2 className="activity-topics-title">ACTIVITY OVERVIEW</h2>
        <div className="activity-topics-list">
          <Link smooth to="#material-day" className="topic-link">
          <div className="topic-card">
            <div className="card-top-border"></div>
            <img 
                src="/images/Activities/Conference/Picture1.png" 
                alt="philly material day" 
            />
            <div className="topic-text">
              <h3>Presenter at Philly material day</h3>
            </div>
          </div> 
          </Link>

          <Link smooth to="#china" className="topic-link">
          <div className="topic-card">
            <div className="card-top-border"></div>
            <img 
                src="/images/Activities/China from China/header.png" 
                alt="Grand Theft Autonomous" 
            />
            <div className="topic-text">
              <h3>International educator at Penn Museum</h3>
            </div>
          </div> 
          </Link>

          <Link smooth to="#gala" className="topic-link">
          <div className="topic-card">
            <div className="card-top-border"></div>
            <img 
                src="/images/Activities/Gala/Picture1.png" 
                alt="gala" 
            />
            <div className="topic-text">
              <h3>Director of the Greater Philadelphia Chinese New Year Gala</h3>
            </div>
          </div> 
          </Link>
        </div>
      </div>

      
      {/* Activity Sections */}
      <div className="activity-main-content">
        <section id="material-day" className="activity-section">
            <Conference />
        </section>


        <section id="china" className="activity-section">
            <China_from_china />
            
        </section>
        
        <section id="gala" className="activity-section">
            <Chinese_new_year_gala />
        </section>
      </div>

    

    </div>
  );
};

export default Activity;