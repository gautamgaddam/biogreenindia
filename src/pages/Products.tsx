import React from "react";

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded p-6">
          <img
            src="/product1.jpg"
            alt="Product 1"
            className="w-full h-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Compostable Garbage Rolls</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <img
            src="/product2.jpg"
            alt="Product 2"
            className="w-full h-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">
            Compostable Customised Carry Bags
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Add more product cards */}
      </div>
    </div>
  );
};

export default ProductsPage;
