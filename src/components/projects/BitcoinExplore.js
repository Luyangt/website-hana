import React from "react";
import "../../styles/Projects/BitcoinExplore.css";


const BitcoinExplore = () => {
  return (
    <div className="BitcoinExplore">
      {/* Hero / Header Section */}
      <div className="header-section">
        <div className="title-section">
            <h1>Data analysis Project</h1>
            <h4>Bitcoin explore</h4>
        </div>

        <p>
        In the <strong>Spring 2021 semester</strong>, I enrolled in the <strong>Big Data Analytics</strong> course taught by 
        <strong>Professors Susan B. Davidson and Zachary G. Ives</strong>. This course provided a comprehensive overview of the data science pipeline,
        covering stages from <strong>data acquisition and cleaning</strong> to <strong>machine learning</strong> and <strong>data visualization</strong>, 
        utilizing tools like <strong>Pandas and SQL</strong>.
        <p>
         
        </p>
        For the <strong>final project</strong>, we conducted an in-depth study on <strong>Bitcoin's price dynamics</strong>, 
        especially considering its significant surge post-pandemic. Our approach included: 
        </p>
        
        <ul>
            <li><strong>Data Collection</strong>: Gathered Bitcoin trading volume data from major countries, focusing primarily on the United States.</li>
            <li><strong>Economic Indicators Analysis</strong>: Collected key U.S. economic indicators to examine their relationship with Bitcoin price fluctuations.</li>
            <li><strong>Correlation Studies</strong>: Analyzed the correlation between Bitcoin prices and other assets like <strong>gold</strong> and <strong>Ethereum (ETH)</strong>.</li>
            <li><strong>Sentiment Analysis</strong>: Scraped and analyzed comments from the <strong>Reddit</strong> platform related to Bitcoin to assess the impact of public sentiment on its price.</li>
        </ul>
        <p>
        Utilizing the identified correlations, we developed a <strong>time series model</strong> to predict future Bitcoin prices, incorporating factors such as historical Bitcoin
        prices, major U.S. economic indicators, gold prices, ETH prices, and Reddit discussion trends. 
        Our model projected that <strong>Bitcoin's price would double within two years</strong>. While the actual increase was less dramatic, 
        the upward trend aligned with our predictions.
        </p>
      </div>

      
      {/* Cards / Grid Section */}
      <div className="project-cards">
        {/* Card 1 */}
        <div className="card card1">
          <img
            src="/images/Projects/Bitcoin/Picture1.png"
            alt="Bitcoin trading volume data from major countries" 
          />
          
        </div>

        {/* Card 2 */}
        <div className="card card2">
          <img
            src="/images/Projects/Bitcoin/Picture2.png"
            alt="Relationship between key U.S. economic indicators and Bitcoin prices"
          />
        
        </div>

        {/* Card 3 */}
        <div className="card card3">
        <img src="/images/Projects/Bitcoin/最长的照片.png" 
                alt="Reddit platform comments related to Bitcoin"
        />
        </div>

        {/* Card 4 */}
        <div className="card card4">
          <img
            src="/images/Projects/Bitcoin/Picture3.png"
            alt="Correlation between Bitcoin prices and other assets like gold and Ethereum (ETH)" 
          />
          
        </div>

        {/* Card 5 */}
        <div className="card card5">
          <img
            src="/images/Projects/Bitcoin/Picture5.png"
            alt="Time series model prediction of Bitcoin price trends and the conclusion" 
          />
          
        </div>

      </div>
    </div>
  );
};

export default BitcoinExplore;