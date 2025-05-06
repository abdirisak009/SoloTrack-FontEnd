import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-[#D8EFE3] rounded-full p-4 flex items-center justify-between w-full mt-10 px-20 py-8 text-2xl">
        {/* Logo Section */}

        <Link to="/ " className="hover:text-green-600">
          <img src={logo} className="w-[170px]" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-black font-normal ">
          <li>
            <Link to="/WeightLoss" className="hover:text-green-600">
              Weight Loss
            </Link>
          </li>
          <li>
            <Link to="/Nutrition" className="hover:text-green-600">
              Nutrition & Diet
            </Link>
          </li>
          <li>
            <Link to="/RecipeCooking  " className="hover:text-green-600">
              Recipes & Cooking
            </Link>
          </li>
          <li>
            <Link to="/LifestyleMindset" className="hover:text-green-600">
              Lifestyle & Mindset
            </Link>
          </li>
        </ul>

        {/* Sign In */}
        <Link to="/Signup" className="font-bold hover:text-green-600">
          SignIn
        </Link>
      </div>
      ;
    </>
  );
};

export default Header;
