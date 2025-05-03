// // import React, { useState } from 'react';
// // import emailjs from '@emailjs/browser';
// // import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

// // function Contact() {
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);

// //     // Send email using EmailJS
// //     emailjs
// //       .sendForm(
// //         'service_9btp5ua', // Replace with your EmailJS Service ID
// //         'template_yzsynoo', // Replace with your EmailJS Template ID
// //         e.target,
// //         'n426AtBQ_MBWbrM4I' // Replace with your EmailJS Public Key
// //       )
// //       .then(
// //         (result) => {
// //           setIsLoading(false);
// //           e.target.reset(); // Reset form fields
// //           alert('Message sent successfully!');
// //         },
// //         (error) => {
// //           setIsLoading(false);
// //           console.error('EmailJS error:', error.text);
// //           alert('Failed to send message. Please try again.');
// //         }
// //       );
// //   };

// //   return (
// //     <section className="contact">
// //       <div className="container">
// //         <h2>Contact Us</h2>
// //         <p>Have questions? Reach out to our team!</p>
// //         <form className="contact-form" onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             name="name" // Must match the template variable in EmailJS
// //             placeholder="Name"
// //             className="input-field"
// //             required
// //           />
// //           <input
// //             type="email"
// //             name="email" // Must match the template variable in EmailJS
// //             placeholder="Email"
// //             className="input-field"
// //             required
// //           />
// //           <textarea
// //             name="message" // Must match the template variable in EmailJS
// //             placeholder="Message"
// //             className="input-field textarea"
// //             required
// //           ></textarea>
// //           <button
// //             type="submit"
// //             className={`cta-button ${isLoading ? 'loading' : ''}`}
// //             disabled={isLoading}
// //             aria-label="Send message to LYSA team"
// //           >
// //             {isLoading ? 'Sending...' : 'Send Message'}
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Contact;

// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

// function Contact() {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     emailjs
//       .sendForm(
//         'service_9btp5ua', // Replace with your EmailJS Service ID
//         'template_yzsynoo', // Replace with your EmailJS Template ID
//         e.target,
//         'n426AtBQ_MBWbrM4I' // Replace with your EmailJS Public Key
//       )
//       .then(
//         () => {
//           setIsLoading(false);
//           toast.success('Message sent successfully!', {
//             position: 'top-right',
//             autoClose: 3000, // Close after 3 seconds
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//           e.target.reset(); // Reset form fields
//         },
//         (error) => {
//           setIsLoading(false);
//           toast.error('Failed to send message. Please try again.', {
//             position: 'top-right',
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//           });
//           console.error('EmailJS error:', error.text);
//         }
//       );
//   };

//   return (
//     <section className="contact">
//       <div className="container">
//         <h2>Contact Us</h2>
//         <p>Have questions? Reach out to our team!</p>
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="input-field"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="input-field"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             className="input-field textarea"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className={`cta-button ${isLoading ? 'loading' : ''}`}
//             disabled={isLoading}
//             aria-label="Send message to LYSA team"
//           >
//             {isLoading ? 'Sending...' : 'Send Message'}
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_9btp5ua', // Replace with your EmailJS Service ID
        'template_yzsynoo', // Replace with your EmailJS Template ID
        e.target,
        'n426AtBQ_MBWbrM4I' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsLoading(false);
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'custom-toast custom-toast-success',
          });
          e.target.reset();
        },
        (error) => {
          setIsLoading(false);
          toast.error('Failed to send message. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'custom-toast custom-toast-error',
          });
          console.error('EmailJS error:', error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our team!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <textarea
            name="message"
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="custom-toast-container"
        />
      </div>
    </section>
  );
}

export default Contact;
