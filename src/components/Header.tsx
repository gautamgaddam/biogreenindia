import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-green-600">
            BioEcoGreen India
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600">
              About
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-green-600">
              Products
            </Link>
            <Link to="/why-us" className="text-gray-600 hover:text-green-600">
              Why Us
            </Link>
            <Link
              to="/green-solutions"
              className="text-gray-600 hover:text-green-600"
            >
              Green Solutions
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
