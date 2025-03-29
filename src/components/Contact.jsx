import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      form.current.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-blue-400">Our Team</span>
          </motion.h2>
          <motion.p variants={item} className="max-w-2xl mx-auto text-lg text-gray-300">
            Get in touch to discuss your export requirements
          </motion.p>
          <motion.div variants={item} className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-navy-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-blue-400 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Headquarters</h4>
                    <p className="text-gray-300">V.P.O Mangla, Mehla, Tehsil & District Chamba, Himachal Pradesh, India, 176310</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-blue-400 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-gray-300">jauntmerchandise@gmail.com</p>
                    {/* <p className="text-gray-300">jauntmerchandise@gmail.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhoneAlt className="text-blue-400 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-300">+91 78078 77421 (India)</p>
                    <p className="text-gray-300">+91 82196 53695 (India)</p>
                    <p className="text-gray-300">+1 Coming Soon (USA)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-700">
                <div className="flex items-start space-x-4 mb-4">
                  <FaClock className="text-blue-400 text-xl mt-1 flex-shrink-0" />
                  <h4 className="font-semibold">Business Hours</h4>
                </div>
                <div className="text-gray-300 space-y-2 ml-10">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="bg-navy-800 rounded-xl p-8"
            >
              <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                <motion.div variants={item}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    Product/Service Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="spices">Spices & Seasonings</option>
                    <option value="agriculture">Agricultural Commodities</option>
                    <option value="textiles">Textiles & Apparel</option>
                    <option value="handicrafts">Handicrafts & Decor</option>
                    <option value="industrial">Industrial Components</option>
                    <option value="pharma">Pharmaceuticals</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                  ></textarea>
                </motion.div>

                <motion.div variants={item}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <FaPaperPlane />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-900/50 border border-green-500 rounded-lg text-green-300 text-center"
                  >
                    Thank you! Your message has been sent successfully. We'll contact you shortly.
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;