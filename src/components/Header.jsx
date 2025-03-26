import React from 'react'
import logo from '../assets/images/logo.png'
const Header = () => {
  return (
    <>
       <div className="bg-[#D8EFE3] rounded-full p-4 flex items-center justify-between w-full mt-10 px-20 py-8 text-2xl">
      {/* Logo Section */}
      <img src={logo} className="w-[170px]"/>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-black font-normal ">
        <a href="#" className="hover:text-green-600">Weight Loss</a>
        <a href="#" className="hover:text-green-600">Nutrition & Diet</a>
        <a href="#" className="hover:text-green-600">Recipes & Cooking</a>
        <a href="#" className="hover:text-green-600">Lifestyle & Mindset</a>
      </nav>

      {/* Sign In */}
      <a href="#" className="font-bold hover:text-green-600">SignIn</a>
    </div>
  ;

    </>
  )
}

export default Header
