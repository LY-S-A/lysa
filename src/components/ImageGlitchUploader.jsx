import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageGlitchUploader = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isGlitched, setIsGlitched] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

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
        setIsGlitched(false);
        toast.success('Image uploaded successfully!', {
          className: 'custom-toast custom-toast-success',
          progressClassName: 'Toastify__progress-bar',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Apply CRT glitch effect
  const handleApplyGlitch = () => {
    if (!imageSrc) {
      toast.error('No image uploaded!', {
        className: 'custom-toast custom-toast-error',
        progressClassName: 'Toastify__progress-bar',
      });
      return;
    }
    setIsGlitched(true);
    toast.success('CRT glitch effect applied!', {
      className: 'custom-toast custom-toast-success',
      progressClassName: 'Toastify__progress-bar',
    });
  };

  // Handle rotation animation end
  const handleAnimationEnd = () => {
    setIsRotating(false);
  };

  // Trigger file input
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Share to X
  const handleShareToX = () => {
    if (!isGlitched) {
      toast.error('Apply the glitch effect before sharing!', {
        className: 'custom-toast custom-toast-error',
        progressClassName: 'Toastify__progress-bar',
      });
      return;
    }
    const tweetText = encodeURIComponent('Check out my retro CRT-glitched image! #CRTGlitch #Retro');
    const tweetUrl = `https://x.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
    toast.success('Opened X to share your image!', {
      className: 'custom-toast custom-toast-success',
      progressClassName: 'Toastify__progress-bar',
    });
  };

  // Download glitched image
  const handleDownload = () => {
    if (!isGlitched) {
      toast.error('Apply the glitch effect before downloading!', {
        className: 'custom-toast custom-toast-error',
        progressClassName: 'Toastify__progress-bar',
      });
      return;
    }
    const canvas = canvasRef.current;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.filter = 'url(#crt-blur) brightness(1.1)';
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0, 255, 0, 0.1) 2px, rgba(0, 255, 0, 0.1) 4px)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const link = document.createElement('a');
      link.download = 'crt-glitched-image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      toast.success('Image downloaded!', {
        className: 'custom-toast custom-toast-success',
        progressClassName: 'Toastify__progress-bar',
      });
    };
  };

  return (
    <div className="container">
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
          <filter id="crt-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
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
      <canvas ref={canvasRef} style={{ display: 'none' }} />
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
      <section className="hero">
        <div className="hero-text">
          <h1>CRT Glitch Image Processor</h1>
          <p>Upload an image and apply a retro green CRT glitch effect!</p>
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
              Apply CRT Glitch
            </button>
          </div>
          {isGlitched && (
            <div className="input-wrapper" style={{ marginTop: '10px' }}>
              <button className="cta-button" onClick={handleShareToX}>
                Share to X
              </button>
              <button className="cta-button" onClick={handleDownload}>
                Download Image
              </button>
            </div>
          )}
        </div>
      </section>
      {imageSrc && (
        <div className="image-container" style={{ textAlign: 'center', marginTop: '20px', position: 'relative' }}>
          <img
            src={imageSrc}
            alt="Uploaded"
            className={`uploaded-image ${isRotating ? 'rotate' : ''} ${isGlitched ? 'crt-glitch' : ''}`}
            onAnimationEnd={handleAnimationEnd}
          />
          {isGlitched && (
            <div
              className="scan-lines"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0, 255, 0, 0.1) 2px, rgba(0, 255, 0, 0.1) 4px)',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGlitchUploader;
