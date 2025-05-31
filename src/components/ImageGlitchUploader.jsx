import React, { useState, useRef } from 'react';
import './ImageGlitchUploader.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageGlitchUploader = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isGlitched, setIsGlitched] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const fileInputRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload a valid image file!', {
          className: 'custom-toast custom-toast-error',
          progressClassName: 'Toastify__progress-bar',
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setIsRotating(true);
        setIsGlitched(false); // Reset glitch effect on new upload
        toast.success('Image uploaded successfully!', {
          className: 'custom-toast custom-toast-success',
          progressClassName: 'Toastify__progress-bar',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle apply glitch effect
  const handleApplyGlitch = () => {
    if (!imageSrc) {
      toast.error('No image uploaded!', {
        className: 'custom-toast custom-toast-error',
        progressClassName: 'Toastify__progress-bar',
      });
      return;
    }
    setIsGlitched(true);
    toast.success('Glitch effect applied!', {
      className: 'custom-toast custom-toast-success',
      progressClassName: 'Toastify__progress-bar',
    });
  };

  // Reset rotation after animation
  const handleAnimationEnd = () => {
    setIsRotating(false);
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      {/* SVG Filter for Green Tint */}
      <svg className="filters" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="green-tint">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                     1 1 1 0 0
                     0 0 0 0 0
                     0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="custom-toast-container"
      />
      <div className="hero">
        <div className="hero-text">
          <h1>Glitch Image Processor</h1>
          <p>Upload an image and apply a retro green glitch effect!</p>
          <div className="input-wrapper">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <button className="cta-button" onClick={triggerFileInput}>
              Upload Image
            </button>
            <button className="cta-button" onClick={handleApplyGlitch}>
              Apply Glitch
            </button>
          </div>
        </div>
      </div>
      {imageSrc && (
        <div className="image-container" style={{ textAlign: 'center', marginTop: '20px' }}>
          <img
            src={imageSrc}
            alt="Uploaded"
            className={`uploaded-image ${isRotating ? 'rotate' : ''} ${isGlitched ? 'glitch' : ''}`}
            onAnimationEnd={handleAnimationEnd}
            style={{
              maxWidth: '100%',
              maxHeight: '400px',
              border: '2px solid #00ff00',
              boxShadow: '0 0 10px #00ff00',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGlitchUploader;
