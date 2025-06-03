// ./components/copyca.jsx
import React, { useState } from 'react';

function CopyCa() {
  const [copied, setCopied] = useState(false);
  const textToCopy = ""; // Replace with the actual text/link you want to copy

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    });
  };

  return (
    <section className="copyca">
      <div className="container">
        <h2>Copy CA</h2>
        <div className="copyca-content">
          <div className="input-wrapper">
            <input
              type="text"
              className="input-field copyca-input"
              value={textToCopy}
              readOnly
            />
            <button
              className="cta-button copyca-button"
              onClick={handleCopy}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CopyCa;
