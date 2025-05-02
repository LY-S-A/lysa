import React, { useState } from 'react';

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const formData = {
      name: form[0].value, // Input for Name
      email: form[1].value, // Input for Email
      message: form[2].value, // Textarea for Message
    };

    try {
      const response = await fetch(
        process.env.NODE_ENV === 'production'
          ? 'https://lysa-backend.vercel.app/api/contact/send' // Replace with your deployed backend URL
          : 'http://localhost:3000/api/contact/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      setIsLoading(false);

      if (response.ok) {
        form.reset(); // Reset form fields
        alert('Message sent successfully!');
      } else {
        alert(result.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our team!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <textarea
            placeholder="Message"
            className="input-field textarea"
            required
          ></textarea>
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
