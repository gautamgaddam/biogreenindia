import React from "react";
import WhyUs from "../components/WhyUs";
import ProductLifecycle from "../components/ProductLifeCycle";
import GreenSolutions from "../components/GreenSolutions";
import CompostableProducts from "../components/CompostableProducts";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to BioEcoGreen India</h1>
      <WhyUs />
      <ProductLifecycle />
      <GreenSolutions />
      <CompostableProducts />
    </div>
  );
};

export default HomePage;
