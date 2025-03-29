import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-navy-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-400">JMO Exports</span>
          </motion.h2>
          <motion.div variants={item} className="w-20 h-1 bg-blue-500 mx-auto" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6">
              <motion.p 
                className="text-lg leading-relaxed text-gray-300"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-blue-400 font-semibold">Jaunt Merchandise Overseas Pvt Ltd (JMO)</span> is a premier export company based in Mumbai, India, specializing in connecting Indian manufacturers with global markets.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed text-gray-300"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                Founded in 2024, we've established ourselves as a trusted partner for international trade, leveraging India's rich manufacturing capabilities and agricultural heritage.
              </motion.p>
              
              <motion.div 
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-navy-700 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-400">Our Mission</h4>
                  <p className="mt-2 text-sm text-gray-300">To deliver quality Indian products worldwide with integrity and efficiency.</p>
                </div>
                <div className="bg-navy-700 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-400">Our Vision</h4>
                  <p className="mt-2 text-sm text-gray-300">To be the most trusted export partner from India to global markets.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <img
              src="/images/about-office.jpg"
              alt="JMO Exports Office"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-lg shadow-lg hidden lg:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-100">Global Partners</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;