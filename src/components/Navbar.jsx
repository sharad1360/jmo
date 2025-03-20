import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/images/jmo-logo.png" alt="JMO Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold">JMO</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <ul
          className={`absolute lg:static bg-gray-900 lg:bg-transparent w-full lg:w-auto left-0 top-16 lg:flex items-center space-x-6 lg:space-x-8 p-6 lg:p-0 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-[500px] lg:translate-y-0"
          }`}
        >
          {["Home", "Products", "Services", "About", "Contact"].map((item) => (
            <li key={item} className="text-center lg:text-left">
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-lg hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
