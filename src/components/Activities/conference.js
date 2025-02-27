import React from "react";
import "../../styles/Activity/Conference.css";


const Conference = () => {
    return (
      <div className="cf-overall-container">
        <div className="cf-container">
          <div className="cf-title-section">
            <h1>Presenter at Philly material day</h1>
          </div>
          <div className="cf-image">
            <img src="/images/Activities/Conference/Picture1.png" alt="philly material day"></img>
          </div>
          <div className="cf-paragraph">
            <p>
            As a member of the <strong>Architected Materials Lab</strong>, I also participate in Philly Materials Day, 
            an annual public outreach event that introduces the world of materials science to the community. 
            </p>
            <p>
            The event, organized by local universities and research institutions, 
            is designed to engage people of all ages—especially young students—through interactive demonstrations and hands-on activities.
            </p>
            <p>
            During this event, our group explains <strong>mechanical instabilities</strong> using simple experiments and everyday products. 
            We encourage children to think about <strong>how instabilities can be applied in engineering and why they matter</strong>. 
            Additionally, we showcase our lab's research and demonstrate how it relates to fundamental instability principles,
            helping young visitors develop an early understanding of scientific research.
            </p>
          </div>
        </div> 
      </div>
    );
  };

export default Conference;
