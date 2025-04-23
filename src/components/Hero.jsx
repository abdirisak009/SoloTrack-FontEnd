import React from 'react';
import Banner from '../assets/images/banner.jpg';

export const Hero = () => {
  return (
    <div className="pt-2 overflow-hidden px-0">
      <h1 className="text-3xl md:text-5xl font-bold text-black text-center leading-snug md:leading-tight px-4 sm:px-6 md:px-10">
        Nutrition tracking <br />
        for{' '}
        <span className="bg-[#FAA432] text-white px-3 py-1 rounded shadow-sm inline-block">
          real life
        </span>
      </h1>
      <img
        className="w-full md:h-[80vh] object-cover mx-auto mt-3 md:mt-6 rounded-lg shadow-md"
        src={Banner}
        alt="Nutrition Banner"
      />
    </div>
  );
};

export default Hero;
