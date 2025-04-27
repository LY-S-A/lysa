import React from 'react';
import { FaXTwitter, FaGithub, FaTelegram } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>>2025 LYΣA.</p>
            <div className="social-icons">
                    <p>
                        <a href="https://x.com/xai" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>{' '}
                        |{' '}
                        <a href="https://x.com/xai" target="_blank" rel="noopener noreferrer">
                            <FaTelegram />
                        </a>{' '}
                        |{' '}
                        <a href="https://x.com/xai" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </p>
                </div> 
            </div>
        </footer>
    );
}

export default Footer;
