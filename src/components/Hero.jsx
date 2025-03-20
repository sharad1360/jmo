const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url(/images/hero-bg.jpg)" }} // ✅ Ensure correct path
    >
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Your Global Export Partner
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Connecting India to the World
        </p>
        <a
          href="#services"
          className="mt-6 inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full text-lg shadow-md transition-transform hover:scale-105"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
