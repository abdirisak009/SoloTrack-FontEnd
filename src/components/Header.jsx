import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#D8EFE3] rounded p-4 flex items-center justify-between w-full  px-4 md:px-12 py-3 mb-8 font-bold text-xl foont-bold cursor-pointer">
        {/* Logo Section */}
        <Link to="/" className="hover:text-green-600">
          <img src={logo} className="w-[120px] md:w-[170px]" alt="Logo" />
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-6 text-black">
          <li>
            <Link to="/WeightLoss" className="hover:text-green-800">
              Weight Loss
            </Link>
          </li>
          <li>
            <Link to="/Nutrition" className="hover:text-green-800">
              Nutrition & Diet
            </Link>
          </li>
          <li>
            <Link to="/RecipeCooking" className="hover:text-green-800">
              Recipes & Cooking
            </Link>
          </li>
          <li>
            <Link to="/LifestyleMindset" className="hover:text-green-800">
              Lifestyle & Mindset
            </Link>
          </li>
        </ul>

        {/* Sign In (Desktop) */}
        <Link to="/Signup" className="hidden lg:block font-bold hover:text-green-800">
          SignIn
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#D8EFE3] w-full mt-4 p-6 rounded-3xl">
          <ul className="flex flex-col space-y-4 text-black font-normal">
            <li>
              <Link to="/WeightLoss" className="hover:text-green-600" onClick={toggleMenu}>
                Weight Loss
              </Link>
            </li>
            <li>
              <Link to="/Nutrition" className="hover:text-green-600" onClick={toggleMenu}>
                Nutrition & Diet
              </Link>
            </li>
            <li>
              <Link to="/RecipeCooking" className="hover:text-green-600" onClick={toggleMenu}>
                Recipes & Cooking
              </Link>
            </li>
            <li>
              <Link to="/LifestyleMindset" className="hover:text-green-600" onClick={toggleMenu}>
                Lifestyle & Mindset
              </Link>
            </li>
            <div className="mt-4 pt-4 border-t border-gray-400">
              <Link to="/Signup" className="block font-bold hover:text-green-600" onClick={toggleMenu}>
                SignIn
              </Link>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;