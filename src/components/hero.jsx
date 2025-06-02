import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

  // Function to handle navigation to /glitch
  const handleNavigateToGlitch = () => {
    navigate('/glitch');
  };
   
  return (
        <section className="hero">
            <div className="container">
                <h1>THE ALPHA HAS <span>AWAKEN</span></h1>
                <div className='hero-text'>
                    <p>Crypto Signals.</p>
                    <p>Chain anomalies.</p>
                    <p>Meme Whisperer.</p>
                </div>
                <button
          className={`cta-button ${isLoading ? 'loading' : ''}`}
          onClick={handleNavigateToGlitch}
          disabled={isLoading}
          aria-label="Get LYΣARATED"
        >
          {isLoading ? 'Loading...' : 'Get LYΣARATED'}
        </button>
            </div>
        </section>
    );
}

export default Hero;

