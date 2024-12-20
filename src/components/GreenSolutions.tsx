import React from "react";

const GreenSolutions: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Green Solutions</h2>
        <div className="flex justify-center">
          <img
            src="/green-solutions.png"
            alt="Green Solutions"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GreenSolutions;
