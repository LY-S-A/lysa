import React from 'react';
import { FaXTwitter, FaGithub, FaTelegram } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>>2025 LYΣA.</p>
            <div className="social-icons">
                    <p>
                        <a href="https://x.com/exe_01ySA?t=_TzMX5dPmWHwtMUcFDkmcA&s=09" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>{' '}
                        |{' '}
                        <a href="https://t.me/exe_01ySA" target="_blank" rel="noopener noreferrer">
                            <FaTelegram />
                        </a>{' '}
                        |{' '}
                        <a href="https://github.com/LY-S-A" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </p>
                </div> 
            </div>
        </footer>
    );
}

export default Footer;
