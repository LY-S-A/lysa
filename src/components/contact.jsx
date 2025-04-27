import React, { useState } from 'react';

function Contact() {
const[isLoading, setIsLoading] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent default form submission
  setIsLoading(true);
  // Simulate form submission (e.g., 1.5 seconds)
  setTimeout(() => {
    setIsLoading(false);
    // Optional: Reset form or show success message
    e.target.reset(); // Reset form fields
    alert('Message sent successfully!'); // Placeholder feedback
  }, 1500);
};

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our team!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <textarea placeholder="Message" className="input-field textarea"></textarea>
          <button
            type="submit"
            className={`cta-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
            aria-label="Send message to LYSA team"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;