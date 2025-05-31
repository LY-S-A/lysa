import React, { useState, useRef } from 'react';
import './ImageGlitchUploader.css';

const ImageGlitchUploader = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const canvasRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        applyCRTEffect(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Apply CRT effect
  const applyCRTEffect = (src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw original image
      ctx.drawImage(img, 0, 0);

      // Apply stronger green-tinted scanlines
      ctx.fillStyle = 'rgba(0, 255, 0, 0.15)'; // Increased opacity for stronger green
      for (let y = 0; y < canvas.height; y += 3) { // Tighter scanlines
        ctx.fillRect(0, y, canvas.width, 2);
      }

      // Apply RGB split with stronger green dominance
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Reduce red and blue channels to emphasize green
        data[i] *= 0.6; // Dim red channel
        data[i + 2] *= 0.6; // Dim blue channel
        // Enhance green channel with slight noise
        data[i + 1] = Math.min(255, data[i + 1] * (1 + (Math.random() * 0.2 - 0.1)));
        // Add random green noise for CRT effect
        if (Math.random() < 0.05) {
          data[i + 1] = Math.min(255, data[i + 1] + (Math.random() * 50));
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Add stronger vignette effect with green tint
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.8 // Tighter vignette
      );
      gradient.addColorStop(0, 'rgba(0, 255, 0, 0)'); // Green-tinted center
      gradient.addColorStop(1, 'rgba(0, 100, 0, 0.7)'); // Darker green edges
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle green noise overlay
      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < 0.1) { // 10% chance to add noise
          data[i + 1] = Math.min(255, data[i + 1] + (Math.random() * 30));
        }
      }
      ctx.putImageData(imageData, 0, 0);

      setProcessedImage(canvas.toDataURL('image/png'));
    };
  };

  // Handle download
  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'crt-effect-image.png';
      link.click();
    }
  };

  // Handle share to X
  const handleShareToX = async () => {
    if (processedImage) {
      try {
        const response = await fetch(processedImage);
        const blob = await response.blob();
        const file = new File([blob], 'crt-effect-image.png', { type: 'image/png' });

        if (navigator.share) {
          await navigator.share({
            files: [file],
            title: 'CRT Effect Image',
            text: 'Check out my retro CRT effect image! #CRTEffect #RetroVibes',
            url: window.location.href,
          });
        } else {
          alert('Web Share API not supported. Please download and share manually.');
        }
      } catch (error) {
        console.error('Error sharing to X:', error);
        alert('Failed to share the image. Please download and share manually.');
      }
    }
  };

  return (
    <section className={`crt-section ${!imageSrc ? 'crt-section--fullscreen' : ''}`}>
      <div className="container">
        {!imageSrc ? (
          <div className="hero-content">
            <h1>CRT Image Processor</h1>
            <p>Upload an image to apply a retro CRT effect!</p>
            <div className="input-wrapper">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="input-field"
                id="image-upload"
              />
            </div>
          </div>
        ) : (
          <>
            <h2>CRT Image Processor</h2>
            <div className="input-wrapper">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="input-field"
                id="image-upload"
              />
            </div>
            <div className="image-grid">
              <div className="image-preview">
                <h3>Original Image</h3>
                <img src={imageSrc} alt="Original" />
              </div>
              <div className="image-preview">
                <h3>CRT Effect</h3>
                <canvas ref={canvasRef} className="crt-canvas" />
              </div>
            </div>
            {processedImage && (
              <div className="action-buttons">
                <button onClick={handleDownload} className="cta-button">
                  Download Image
                </button>
                <button onClick={handleShareToX} className="cta-button">
                  Share to X
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ImageGlitchUploader;


