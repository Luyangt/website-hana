import React from "react";
import "../../styles/Projects/BitcoinExplore.css";

const BitcoinExplore = () => {
  return (
    <div className="bitcoin-overall-container">
      <div className="bitcoin-explore">
        {/* Hero / Header Section */}
        <div className="bitcoin-header-section">
          <div className="bitcoin-header-text">
            <div className="bitcoin-title-section">
              <h1>Data analysis Project</h1>
              <h2>Bitcoin explore</h2>
            </div>
            <div className="bitcoin-header-content">
              <div className="bitcoin-header-paragraph">
                <p>
                In the <strong>Spring 2021 semester</strong>, I enrolled in the <strong>Big Data Analytics</strong> course taught by 
                <strong> Professors Susan B. Davidson and Zachary G. Ives</strong>. This course provided a comprehensive overview of the data science pipeline,
                covering stages from <strong>data acquisition and cleaning</strong> to <strong>machine learning</strong> and <strong>data visualization</strong>, 
                utilizing tools like <strong>Pandas and SQL</strong>.
                </p>
                <p>
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
              <div className="bitcoin-header-image">
                <img 
                  src="/images/Projects/Bitcoin/header-picture.png" 
                  alt="Clothes Caring Machine"
                />
                <p className="bitcoin-header-p1">Time series model prediction of Bitcoin price trends and the conclusion</p>
                <p className="bitcoin-header-p2">
                In the long run, we are confident towards crytocurrencies and predict that the prices of Bitcoin and 
                Ethereum will continue to rise. And we are expected to see the prices of both double again within 2 years. 
                However, the price increases of these two crytocurrencies are based on different logic. 
                The value of Bitcoin is based on its scarcity, and the value of Ethereum is based on its technicality.
                If Ethereum could produce revolutionary applications, its price may even be comparable to Bitcoin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards / Grid Section */}
        <div className="bitcoin-project-cards">
          {/* Card 1 */}
          <div className="bitcoin-card">
            <img
              src="/images/Projects/Bitcoin/Picture1.png"
              alt="Relationship between key U.S. economic indicators and Bitcoin prices" 
            />
            <p class="bitcoin-card bitcoin-card1-p">
            Relationship between key U.S. <br /> economic indicators and Bitcoin prices</p>
          </div>

          {/* Card 2 */}
          <div className="bitcoin-card">
            <img
              src="/images/Projects/Bitcoin/Picture2.png"
              alt="Correlation between Bitcoin prices and other assets like gold and Ethereum (ETH)"
            />
            <p className="bitcoin-card bitcoin-card2-p">Correlation between Bitcoin prices<br /> 
              and other assets like gold and Ethereum (ETH)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinExplore;