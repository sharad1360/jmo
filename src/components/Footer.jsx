import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
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

  const quickLinks = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Products", path: "#products" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  const productCategories = [
    "Spices & Seasonings",
    "Agricultural Commodities",
    "Textiles & Apparel",
    "Handicrafts & Decor",
    "Industrial Components",
    "Pharmaceuticals"
  ];

  const socialIcons = [
    { icon: <FaTwitter className="text-xl" />, url: "https://twitter.com/jmoexports" },
    { icon: <FaFacebookF className="text-xl" />, url: "https://facebook.com/jmoexports" },
    { icon: <FaLinkedinIn className="text-xl" />, url: "https://www.linkedin.com/company/jaunt-merchandise-overses-pvt-ltd/" },
    { icon: <FaInstagram className="text-xl" />, url: "https://instagram.com/jmoexports" }
  ];

  return (
    <footer className="bg-navy-950 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <motion.div variants={item}>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/logo.png" alt="JMO Logo" className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">JMO Exports</span>
            </div>
            <p className="mb-4">
              Your trusted partner for exporting premium Indian products to global markets.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={social.url.split('.')[1]} // twitter, facebook, etc.
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>V.P.O Mangla, Mehla, Tehsil & District Chamba, Himachal Pradesh, India, 176310</span>
              </p>
              <p className="flex items-start">
                <FaEnvelope className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>jauntmerchandise@gmail.com</span>
              </p>
              <p className="flex items-start">
                <FaPhoneAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>+91 78078 77421, +91 82196 53695</span>
              </p>

            </address>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-navy-800 mt-12 pt-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Jaunt Merchandise Overseas Pvt Ltd. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;