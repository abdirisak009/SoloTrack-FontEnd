import React from "react";
import SUB from "../assets/images/SUB-01.jpg"
import LOGO from "../assets/images/logo.png"

const SignUp = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-6xl bg-[#F9FBFC] shadow-lg rounded-lg overflow-hidden">
                {/* Image */}
                <div className="hidden md:block md:w-1/2 p-3">
                    <img src={SUB} alt="Sign Up"   className="h-full w-full object-cover"   />
                </div>

                {/* Form  */}
                <div className="w-full p-8 md:w-1/2 ">

                {/* Logo */}
                    <div className="flex justify-center">
                       <img src={LOGO}  alt="Logo"  className="w-60"/>
                    </div>
                    
                    <p className=" text-[15px]  text-gray-600 text-center mt-2">  Create yourS account and begin your health journey </p>

                    <form className="mt-6 space-y-4">
                        <div className="flex gap-4">
                            <input type="text"  id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  " placeholder="First name" />
                            <input type="text"  id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Last name"/>
                        </div>

                        <div>
                            <input type="email"  id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm "placeholder="Email address"/>
                        </div>

                        <div>
                           <input type="password"  id="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Password" />
                        </div>

                        <div>
                            <input type="password"  id="confirmPassword"  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"   placeholder="Confirm password" />
                        </div>
                    </form>
                   
                        <p className="mt-4 text-[15px] font-medium text-gray-600 "> <input type="checkbox" /> i agree to the <span className="text-[#14A24A] ">Terms of Service</span> and <span className="text-[#14A24A]">Privacy Policy</span>   </p>
                                 
                     <button type="submit" className="w-full bg-[#F37224] text-white py-2 px-4 rounded-full hover:bg-[#14A24A] mt-4 " > Create Account </button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;