const services = [
    {
      name: "Shipping Solutions",
      image: "/images/shipping.jpg",
      description: "Reliable and efficient shipping to ensure your goods reach anywhere in the world.",
    },
    {
      name: "Global Reach",
      image: "/images/global-reach.jpg",
      description: "Extensive network of partners and destinations across all continents.",
    },
    {
      name: "Custom Packaging",
      image: "/images/custom-packaging.jpg",
      description: "Specialized packaging to maintain the quality of your goods during transit.",
    },
  ];
  
  const Services = () => {
    return (
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-gray-100 shadow-lg rounded-lg p-6">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  