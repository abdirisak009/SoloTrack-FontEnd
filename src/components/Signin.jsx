import React from "react";
import SUP from "../assets/images/Login_Brand-01.jpg";
import LOGO from "../assets/images/logo.png";

const Signin = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl bg-[#F9FBFC] shadow-lg rounded-lg overflow-hidden">
        {/* Image S */}
        <div className="hidden md:block md:w-1/2 p-3">
          <img src={SUP} alt="Sign Up" className="h-full w-full object-cover" />
        </div>

        {/* Form  */}
        <div className="w-full p-8 md:w-1/2  ">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={LOGO} alt="Logo" className="w-60" />
          </div>

          <p className=" text-[15px]  text-gray-600 text-center mt-2">
            Sign in to your account to countinue your health journey{" "}
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm "
                placeholder="Email address"
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Password"
              />
            </div>
          </form>

          <div className="flex justify-between items-center mt-6">
            <p className="   text-[15px] font-medium text-gray-600 ">
              <input type="checkbox" /> Remember me
            </p>
            <p className="  text-[15px] font-medium text-[#14A24A]">
              Forget your password
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#14A24A]  text-white py-2 px-4 rounded-full hover:bg-[#F37224] mt-6 "
          >
            Sign in
          </button>

          <div className="flex items-center gap-2 mt-6">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500 text-sm">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {/* icon */}
            <button className="py-1 px-15  border border-gray-300 rounded-lg hover:bg-gray-100 transition text-gray-500">
              <i class="fa-brands fa-google"></i>
            </button>

            {/* icon*/}
            <button className="py-1 px-15  border border-gray-300 rounded-lg hover:bg-gray-100 transition text-gray-500">
              <i class="fa-brands fa-facebook"></i>
            </button>

            {/* icon */}
            <button className="py-1 px-15 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-gray-500">
              <i class="fa-brands fa-x-twitter"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
