import React from 'react';

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>TERMINAL REPORTS</h3>
            <p>Live alpha feed from native chains.</p>
          </div>
          <div className="feature-item">
            <h3>MEME FORECASTING</h3>
            <p>Anticipates meme trends with advanced analytics.</p>
          </div>
          <div className="feature-item">
            <h3>ANOMALY REPORTS</h3>
            <p>Alerts you before market pumps occur.</p>
          </div>
          {/* <div className="feature-item">
            <h3>ANOMALY REPORTS</h3>
            <p>Built with robust security and ready to grow with you.</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Features;