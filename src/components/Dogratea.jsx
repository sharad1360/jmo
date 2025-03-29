import { useState } from "react";

const Dogratea = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showSideImages, setShowSideImages] = useState(false);

  const product = {
    name: "Dogra Tea",
    mainImage: "/images/dogratea.jpg", // Main product image
    sideImages: ["/images/dogratea-side1.jpg", "/images/dogratea-side2.jpg"], // Side images
    indication: "Best Remedy for cold, influenza, headache, cough, and throat diseases, etc.",
    description: "Dogra Tea is a premium blend sourced from the finest tea estates. It offers a rich aroma and a strong, refreshing taste.",
  };

  return (
    <section id="popular-product" className="flex flex-col md:flex-row items-center justify-center py-10 space-x-8">
      {/* Left Side: Main Image & Buttons */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Popular Product</h2>

        {/* Product Image */}
        <img
          src={product.mainImage}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />

        {/* Buttons */}
        <div className="mt-4 space-x-4">
          <button
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "View Details"}
          </button>

          <button
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            onClick={() => setShowSideImages(!showSideImages)}
          >
            {showSideImages ? "Hide Side Images" : "Show Side Images"}
          </button>
        </div>
      </div>

      {/* Right Side: Details & Side Images */}
      <div className="flex flex-col items-start">
        {/* Show Details Only When Clicked */}
        {showDetails && (
          <div className="mt-6 bg-white shadow-lg p-6 rounded-lg text-gray-800 max-w-md">
            <p><strong>Indication:</strong> {product.indication}</p>
            <p className="mt-4"><strong>Description:</strong> {product.description}</p>
          </div>
        )}

        {/* Display Side Images if Button Clicked */}
        {showSideImages && (
          <div className="mt-6 flex space-x-6">
            {product.sideImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Side view ${index + 1}`}
                className="w-48 h-48 object-cover rounded-lg shadow-md border border-gray-300"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dogratea;
