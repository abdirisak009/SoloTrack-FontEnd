import React from 'react'

const Weightlosing = () => {
  return (
<>
<div className="bg-[#0D9B4D] py-8">
  <h1 className="text-white text-3xl font-bold text-center mb-10">
    Weight Loss Made Easy
  </h1>
  <div className="flex flex-col md:flex-row justify-around px-8 flex-wrap gap-8">
    <div className="flex flex-col items-center w-72 text-center gap-4">
      <img
        src="../Last11.png"
        className="w-44 h-44 object-contain rounded-xl shadow-lg"
        alt="Set your Goals"
      />
      <h2 className="text-white text-2xl font-bold">Set Your Goals</h2>
      <p className="text-gray-300">
        Tell us what you want to achieve and <br /> receive personalized more goals.
      </p>
    </div>

    <div className="flex flex-col items-center w-72 text-center gap-4">
      <img
        src="../Last22.png"
        className="w-44 h-44 object-contain rounded-xl shadow-lg"
        alt="Track your Food"
      />
      <h2 className="text-white text-2xl font-bold">Track Your Food</h2>
      <p className="text-gray-300">
        Learn about the foods you’re eating <br /> and keep your calories within your Ea-
      </p>
    </div>

    <div className="flex flex-col items-center w-72 text-center gap-4">
      <img
        src="../Last333.png"
        className="w-44 h-44 object-contain rounded-xl shadow-lg"
        alt="Lose Weight"
      />
      <h2 className="text-white text-2xl font-bold">Lose Weight</h2>
      <p className="text-gray-300">
        Reach your goals and continue to set <br /> new ones for a happier, healthier you.
      </p>
    </div>
  </div>
</div>


</>

  )
}

export default Weightlosing;