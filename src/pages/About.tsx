import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            The Bio EcoGreen India deals in Bio-Compostable products around the
            globe which are specialised in highly functional and eco-friendly
            products.
          </p>
          <p className="text-lg mb-4">
            Our Vision is to make "make Mother Earth plastic free and give an
            Eco-friendly environment to future generations".
          </p>
        </div>
        <div>
          <img
            src="/about-image.jpg"
            alt="About Us"
            className="w-full h-auto rounded shadow"
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At BioEcoGreen India, our mission is to provide sustainable and
          eco-friendly alternatives to traditional plastic products. We strive
          to reduce the environmental impact caused by plastic waste and promote
          a greener future for generations to come.
        </p>
        <p className="text-lg mb-4">
          We are committed to developing innovative bio-compostable products
          that meet the highest standards of quality and functionality. Our
          products are designed to decompose naturally, leaving no harmful
          residues in the environment.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Sustainability</li>
          <li>Innovation</li>
          <li>Quality</li>
          <li>Customer Satisfaction</li>
          <li>Environmental Responsibility</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
