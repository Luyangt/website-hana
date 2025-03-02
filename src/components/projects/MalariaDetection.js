import React from "react";
import "../../styles/Projects/MalariaDetection.css";

const MalariaDetection = () => {
    return (
        <div className="malaria-overall-container">
          <div className="malaria-container">
            {/* Header Section */}
            <div className="malaria-header-section">
                <div className="malaria-title-section">
                        <h1>Smart Malaria Detection and Prevention System </h1>
                </div>
                <div className="malaria-header-content">
                    <div className="malaria-header-paragraph">
                        <p>
                            Through extensive research, our team identified a <strong>pressing need</strong> for{" "}
                            <strong>low-cost and efficient malaria prevention systems</strong> in tropical
                            countries. Leveraging our <strong>in-situ pathogen capture technology</strong>, we
                            developed an <strong>affordable malaria detection chip</strong> and a{" "}
                            <strong>portable diagnostic device</strong> that seamlessly connects with smartphones.
                        </p>

                        <p>
                            By integrating these components, we created a{" "}
                            <strong>smart tropical disease prevention system</strong>, achieving a cost of{" "}
                            <strong>less than $10 per test</strong>, making{" "}
                            <strong>rapid and accessible malaria diagnostics</strong> a reality for
                            resource-limited regions.
                        </p>
                    </div>
                    <div className="malaria-header-image">
                     <img 
                        src="/images/Projects/MalariaDetection/header.png" 
                        alt="Malaria Detection"
                        className="malaria-header-img"
                     />
                    </div>
                </div>

                
            </div>

            <div className="malaria-large-image">
                <img 
                    src="/images/Projects/MalariaDetection/Picture1.png" 
                    alt="Malaria Detection"
                    className="malaria-large-img"
                />
            </div>

          </div>
    </div>
    );
};
export default MalariaDetection;