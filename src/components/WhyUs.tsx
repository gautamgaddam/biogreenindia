import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Us</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li className="flex items-center">
            <img
              src="/icons/eco-friendly.svg"
              alt="Eco-friendly"
              className="w-6 h-6 mr-2"
            />
            <span>100% Eco-friendly</span>
          </li>
          <li className="flex items-center">
            <img
              src="/icons/plastic-replacement.svg"
              alt="Plastic Replacement"
              className="w-6 h-6 mr-2"
            />
            <span>Plastic Replacement</span>
          </li>
          {/* Add more list items */}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
