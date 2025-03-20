const AboutUs = () => {
    return (
      <section id="about" className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            {/* Left Side - Text Content */}
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed">
                <strong>2024 Jaunt Merchandise Overseas Pvt Ltd (JMO)</strong> is a premier export company based in India 
                with a mission to connect Indian products with global markets. With our expertise, quality assurance, 
                and reliable service, we have earned the trust of clients worldwide.
              </p>
            </div>
  
            {/* Right Side - Image */}
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="/images/aboutus.jpg"
                alt="Company"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  