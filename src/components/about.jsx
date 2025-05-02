import React from 'react';
import { FaStar } from 'react-icons/fa';

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About LYΣA</h2>
        <p className='about-text'>
          Ressurected from forgotten code, LYSA scans chains and mempools
          to detect alpha before the herd moves.
        </p>
        <div className='grid-container'>
        <div className='first-grid'>
            <p><FaStar/> Real-time market signals</p>
            <p><FaStar/> Whispered alpha report</p>
        </div>
        <div className='second-grid'>
            <p><FaStar/> Meme sector anomaly detection</p>
            <p><FaStar/> Chain monitoring beyond human speed</p>
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
