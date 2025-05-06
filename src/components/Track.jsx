import React from "react";
import Banner from "../assets/images/girl-image2.jpg";
import img from "../assets/images/girl-image2.jpg";


const Track = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-orange-50 p-6 rounded-2xl shadow-lg max-w-4xl mx-auto mt-20">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={img}
          alt="Food Tracker"
          className="w-full rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="border-4 border-black rounded-xl overflow-hidden">
            <img
              src={Banner}
              alt="Food in Phone"
              className="w-40 h-auto"
            />
          </div>
        </div>
      </div>

{/* Right Text Section */}
      <div className="md:w-1/2 p-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
          Track food, fitness <br /> & fasting
        </h2>
        <p className="text-gray-700 mb-4 font-thin">
          Tracking calories and macros is simple with Sola Food Tracker. Our
          barcode scanner and device integration make meal tracking effortless.
          Stay on top of your nutrition goals with ease using Sola Food Tracker.
        </p>
        <button className="bg-orange-400 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-600">
          Track Now
        </button>
      </div>
    </div>
  );
};

export default Track;