import React from "react";
import "../styles/Activity.css"; 

const Activity = () => {
  const activities = [
    { name: "Contest and Conference", id: "conference" },
    { name: "Teaching Assistant", id: "teaching-assitant" },
    { name: "Workshop: China from China", id: "china" },
    { name: "Chief Director - Grand Philadelphia Area Chinese New Year Gala", id: "gala" },
  ];

  return (
    <div className="activity-page">
      <div className="summary">
            {/* Navigation at the top-left */}
        <div className="activity-nav">
            <h1>Activities</h1>
            <ul>
            {activities.map((activity, index) => (
                <li key={index}>
                <a href={`#${activity.id}`} className="activity-link">
                    {activity.name}
                </a>
                </li>
            ))}
            </ul>
        </div>
        {/* Image at the top-right */}
        <div className="top-image">
                <img src="/images/activity-image.png" alt="Activities Visualization" />
        </div>
      </div>
      

      {/* Activity Sections */}
      <div className="activity-content">
        <section id="conference" className="activity-section">
            <h2>Contest and Conference</h2>
            <p>
                I have participated in various contests and conferences.
            </p>
        </section>

        <section id="teaching-assistant" className="activity-section">
            <h2>Teaching Assistant</h2>
            <p>
                I have worked as a teaching assistant for various courses.
            </p>
        </section>

        <section id="china" className="activity-section">
            <h2>Workshop: China from China</h2>
            <p>
                I have attended a workshop on China from China.
            </p>
        </section>
        
        <section id="gala" className="activity-section">
            <h2>Chief Director - Grand Philadelphia Area Chinese New Year Gala</h2>
            <p>
                I have served as the Chief Director for the Grand Philadelphia Area Chinese New Year Gala.
            </p>
        </section>
      </div>

    

    </div>
  );
};

export default Activity;