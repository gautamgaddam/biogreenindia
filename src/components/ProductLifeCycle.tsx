import React from "react";

const ProductLifecycle: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Bio EcoGreen Products</h2>
        <div className="flex justify-center">
          <img
            src="/product-lifecycle.png"
            alt="Product Lifecycle"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;
