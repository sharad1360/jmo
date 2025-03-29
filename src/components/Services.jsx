import { motion } from 'framer-motion';
import { 
  FaGlobe, 
  FaSearch, 
  FaCheckCircle, 
  FaShip, 
  FaChartLine, 
  FaTags 
} from 'react-icons/fa';

const services = [
  {
    name: "Export Management",
    icon: <FaGlobe className="text-blue-400 text-3xl" />,
    description: "End-to-end export solutions including documentation, logistics, and compliance management.",
    details: [
      "Customs clearance assistance",
      "Export documentation preparation",
      "Regulatory compliance guidance"
    ]
  },
  {
    name: "Sourcing & Procurement",
    icon: <FaSearch className="text-blue-400 text-3xl" />,
    description: "Identifying and vetting reliable Indian manufacturers for your specific requirements.",
    details: [
      "Supplier verification",
      "Quality audits",
      "Sample collection"
    ]
  },
  {
    name: "Quality Assurance",
    icon: <FaCheckCircle className="text-blue-400 text-3xl" />,
    description: "Comprehensive quality control processes to ensure product standards are met.",
    details: [
      "Pre-shipment inspections",
      "Laboratory testing",
      "Quality certification"
    ]
  },
  {
    name: "Logistics Solutions",
    icon: <FaShip className="text-blue-400 text-3xl" />,
    description: "Efficient shipping and freight forwarding by air, sea, or land.",
    details: [
      "Door-to-door delivery",
      "Customs brokerage",
      "Cargo insurance"
    ]
  },
  {
    name: "Market Research",
    icon: <FaChartLine className="text-blue-400 text-3xl" />,
    description: "Insights into international markets to help position your products effectively.",
    details: [
      "Competitor analysis",
      "Pricing strategies",
      "Distribution channels"
    ]
  },
  {
    name: "Brand Development",
    icon: <FaTags className="text-blue-400 text-3xl" />,
    description: "Assistance with packaging design and branding for international markets.",
    details: [
      "Labeling compliance",
      "Multilingual packaging",
      "Brand positioning"
    ]
  },
];

const Services = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-navy-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-400">Export Services</span>
          </motion.h2>
          <motion.p variants={item} className="max-w-2xl mx-auto text-lg text-gray-300">
            Comprehensive solutions to streamline your international trade operations
          </motion.p>
          <motion.div variants={item} className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-navy-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="border-t border-navy-600 pt-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">SERVICE INCLUDES:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;