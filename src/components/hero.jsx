import React, { useState } from 'react';

function Hero() {
    const [isLoading, setIsLoading] = useState(false);

    const handleJoinWaitlist = () => {
      setIsLoading(true);
      // Simulate loading delay before redirect (e.g., 1.5 seconds)
      setTimeout(() => {
        window.location.href = 'https://lysa-dev.vercel.app/';
      }, 1500);
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
          onClick={handleJoinWaitlist}
          disabled={isLoading}
          aria-label="Join the LYSA waitlist"
        >
          {isLoading ? 'Loading...' : 'Join Waitlist'}
        </button>
            </div>
        </section>
    );
}

export default Hero;