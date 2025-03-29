import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "JMO Exports has been instrumental in helping us source high-quality spices from India. Their attention to detail and reliability is unmatched.",
    author: "Michael Johnson",
    position: "Procurement Manager, Global Foods Inc.",
    avatar: "/images/testimonials/1.jpg"
  },
  {
    quote: "Working with JMO has streamlined our import process significantly. Their documentation is always accurate and their shipments arrive on time, every time.",
    author: "Sarah Williams",
    position: "Director of Operations, Textile World",
    avatar: "/images/testimonials/2.jpg"
  },
  {
    quote: "The team at JMO understands international trade regulations better than anyone we've worked with. They've saved us countless hours of paperwork.",
    author: "David Chen",
    position: "CEO, Eastern Imports LLC",
    avatar: "/images/testimonials/3.jpg"
  }
];

const Testimonials = () => {
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
    <section id="testimonials" className="py-20 bg-navy-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-blue-400">Testimonials</span>
          </motion.h2>
          <motion.p variants={item} className="max-w-2xl mx-auto text-lg text-gray-300">
            What our international partners say about working with us
          </motion.p>
          <motion.div variants={item} className="w-20 h-1 bg-blue-500 mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-navy-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex text-yellow-400 text-xl mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="fill-current" />
                ))}
              </div>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-blue-400 opacity-20 text-4xl" />
                <p className="text-gray-300 italic mb-6 pl-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-400"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;