import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("#1", "#1", form.current, "Ntd2eXdyjI6nIAJWz") // Using your provided IDs & public key
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 px-6 py-3 rounded-full text-black font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
