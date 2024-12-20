import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center">
        {/* <p className="text-gray-600">
          We are eager to work with you in making Mother Earth plastic free and
          give an Eco-friendly environment for future generations.
        </p> */}
        <p>&copy; 2023 BioEcoGreen India. All rights reserved.</p>
        <img
          src="/logo.png"
          alt="BioEcoGreen India Logo"
          className="mx-auto mt-4"
        />
      </div>
    </footer>
  );
};

export default Footer;
