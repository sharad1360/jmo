import { motion } from 'framer-motion';

const products = [
  { 
    name: "Spices & Seasonings", 
    image: "/images/products/spices.jpg", 
    description: "Premium quality Indian spices including turmeric, chili, cumin, coriander, and blended masalas.",
    highlights: [
      "100% natural and organic options",
      "Custom grinding and packaging",
      "HACCP certified processing"
    ]
  },
  { 
    name: "Agricultural Commodities", 
    image: "/images/products/grains.jpg", 
    description: "High-quality rice, wheat, pulses, and other staples from India's fertile regions.",
    highlights: [
      "Sourced directly from farmers",
      "Strict quality control",
      "Bulk and retail packaging"
    ]
  },
  { 
    name: "Textiles & Apparel", 
    image: "/images/products/textiles.jpg", 
    description: "Traditional and contemporary Indian textiles including cotton, silk, and handmade fabrics.",
    highlights: [
      "OEKO-TEX certified options",
      "Custom designs available",
      "Ethically produced"
    ]
  },
  { 
    name: "Handicrafts & Decor", 
    image: "/images/products/handicrafts.jpg", 
    description: "Exquisite Indian handicrafts including woodwork, metalware, and home decor items.",
    highlights: [
      "Artisan-made products",
      "Fair trade practices",
      "Unique cultural designs"
    ]
  },
  { 
    name: "Industrial Components", 
    image: "/images/products/industrial.jpg", 
    description: "Precision engineering components and auto parts from India's manufacturing hubs.",
    highlights: [
      "ISO certified manufacturers",
      "Just-in-time delivery",
      "Custom fabrication"
    ]
  },
  { 
    name: "Pharmaceuticals", 
    image: "/images/products/pharma.jpg", 
    description: "Generic pharmaceuticals and herbal medicines meeting international standards.",
    highlights: [
      "WHO-GMP certified",
      "Strict quality protocols",
      "Regulatory compliance"
    ]
  },
];

const Products = () => {
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-navy-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-400">Product Portfolio</span>
          </motion.h2>
          <motion.p variants={item} className="max-w-2xl mx-auto text-lg text-gray-300">
            Premium Indian products that meet international quality standards
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
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-navy-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="border-t border-navy-700 pt-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">KEY FEATURES:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {product.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {highlight}
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

export default Products;