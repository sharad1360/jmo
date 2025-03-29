import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Changed from react-router-dom

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-navy-900/80 z-0" />
      <div 
        className="absolute inset-0 w-full h-full object-cover z-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(16, 42, 67, 0.9), rgba(16, 42, 67, 0.7)), url('/images/hero-bg.jpg')"
        }}
      />

      {/* Content */}
      <motion.div
        className="text-center px-6 max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Global Export Solutions
        </motion.h1>
        
        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-300 mb-8"
          variants={itemVariants}
        >
          Connecting Indian manufacturers with international markets through reliable export services
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link
            to="services" // Must match the section ID
            smooth={true}
            duration={500}
            offset={-40} // Same offset as navbar
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Our Services
          </Link>
          <Link
            to="contact" // Must match the section ID
            smooth={true}
            duration={500}
            offset={-40} // Same offset as navbar
            className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full text-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Link
          to="about" // Next section to scroll to
          smooth={true}
          duration={500}
          offset={-40}
          className="block w-8 h-8 border-b-2 border-r-2 border-blue-400 rotate-45 cursor-pointer"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
