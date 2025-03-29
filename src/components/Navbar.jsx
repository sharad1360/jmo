import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FaTimes, FaBars, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Products", path: "products" },
    { name: "Services", path: "services" },
    { name: "Testimonials", path: "testimonials" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-800/95 shadow-xl py-2' : 'bg-navy-900/90 py-4'} backdrop-blur-md`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <motion.img 
              src="/images/logo.png" 
              alt="JMO Logo" 
              className="w-10 h-10"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring" }}
            />
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              JMO Exports
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-40}
                  spy={true}
                  activeClass="text-blue-400"
                  className="relative text-lg font-medium group cursor-pointer flex items-center"
                >
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                    {item.name}
                  </span>
                  {item.submenu && (
                    <FaChevronDown className="ml-1 text-xs text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                  )}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none z-50 text-gray-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                smooth={true}
                duration={500}
                offset={-30}
                spy={true}
                activeClass="text-blue-400 bg-navy-700"
                className="block py-3 px-4 rounded-lg text-gray-300 hover:bg-navy-700 hover:text-blue-400 transition-colors flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <FaChevronDown className="text-xs" />
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;