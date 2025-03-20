const products = [
    { name: "Chilli", image: "/images/chilli.jpg", description: "Fresh and dried chilies from the best farms." },
    { name: "Turmeric", image: "/images/turmeric.jpg", description: "Premium turmeric with vibrant color and aroma." },
    { name: "Fennel", image: "/images/fennel.jpg", description: "High-quality fennel seeds with medicinal value." },
  ];
  
  const Products = () => {
    return (
      <section id="products" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Other Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white shadow-md p-4 rounded-lg">
                <img src={product.image} alt={product.name} className="rounded-md mb-3 w-full h-48 object-cover" />
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Products;
  