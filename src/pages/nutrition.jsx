import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUtensils, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';


function NutritionGuide() {
  return (
    <>
   
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <title>Nutrition & Diet Guide</title>
      </head>
      <body className="font-sans antialiased">
      <Header/>
        {/* Header */}
        <header className="bg-green-700 text-white py-12 text-center">
          <h1 className="text-3xl font-bold">Nutrition & Diet Guide</h1>
          <p className="mt-2">Discover the benefits of balanced nutrition and explore diet options for a healthier life.</p>
          <button className="mt-4 bg-white text-green-500 font-semibold py-2 px-6 rounded-full">Get Started</button>
        </header>

        {/* Popular Diet Types */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Popular Diet Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mediterranean Diet */}
              <div className="bg-white shadow rounded-lg">
                <div className="h-40 mb-4">
                  <img src="src\assets\images\Mediterranean Diet.jpg" alt="Mediterranean Diet" className="w-full object-cover h-full" />
                </div>
                <h3 className="text-xl font-semibold px-3 ">Mediterranean Diet</h3>
                <p className="mt-2 text-gray-600 p-3 ">Emphasizes plant foods, olive oil, fish, and moderate wine consumption. Associated with heart health and longevity.</p>
                <div className="flex space-x-2 mt-2 px-6">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded ">Heart Healthy</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded "> Anti-Inflammatory</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded ">Sustainable</span>
                </div>
              </div>

              {/* Ketogenic Diet */}
              <div className="bg-white shadow rounded-lg">
                <div className="h-40 mb-4">
                  <img src="src\assets\images\Ketogenic Diet.jpg" alt="Ketogenic Diet" className="w-full object-cover h-full" />
                </div>
                <h3 className="text-xl font-semibold px-3 ">Ketogenic Diet</h3>
                <p className="mt-2 text-gray-600 p-3 ">Very low-carb, high-fat diet that shifts the body into ketosis. Popular for weight loss and metabolic health.</p>
                <div className="flex space-x-2 mt-2 px-6">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded ">Weight Loss</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded ">Blood Sugar Control</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded ">High Fat</span>
                </div>
              </div>

              {/* Plant-Based Diet */}
              <div className="bg-white p-6 shadow rounded-lg">
                <div className="h-40 mb-4">
                  <img src=" src\assets\images\Plant-Based Diet.jpg" alt="Plant-Based Diet" className="w-full object-cover h-full " />
                </div>
                <h3 className="text-xl font-semibold">Plant-Based Diet</h3>
                <p className="mt-2 text-gray-600">Focuses on foods derived from plants with minimal or no animal products. Supports environmental sustainability.</p>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Eco-Friendly</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">High Fiber</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Nutrient-Rich</span>
                </div>
              </div>
              {/* Paleo Diet */}
              <div className="bg-white shadow rounded-lg">
                <div className="h-40 mb-4">
                  <img src="src\assets\images\Paleo Diet.jpg" alt="Paleo Diet" className="w-full object-cover h-full" />
                </div>
                <h3 className="text-xl font-semibold px-3">Paleo Diet</h3>
                <p className="mt-2 text-gray-600 px-3">Based on foods presumed to be available to prehistoric humans. Excludes grains, dairy, and processed foods.</p>
                <div className="flex space-x-2 mt-2 px-6">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Whole Foods</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Gluten-Free</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Low Sugar</span>
                </div>
              </div>
              {/* Intermittent Fasting */}
              <div className="bg-white p-6 shadow rounded-lg">
                <div className="h-40 mb-4">
                  <img src="src\assets\images\Intermittent Fasting.jpg" alt="Intermittent Fasting" className="w-full object-cover h-full rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold">Intermittent Fasting</h3>
                <p className="mt-2 text-gray-600">Cycling between periods of eating and fasting. Various methods include 16/8, 5:2, and alternate-day fasting.</p>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Metabolic Health</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Flexible</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Autophagy</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-2">Understanding Macronutrients</h2>
          <p className="text-center text-gray-600 mb-8">
            The three main macronutrients—protein, carbohydrates, and fats—each play vital roles in your health
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <div className="flex flex-col mb-4">
                <div className="w-12 h-12 bg-green-300 text-green-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <h3 className="mt-2 font-semibold text-lg">Proteins</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Essential for building and repairing tissues, immune function, and enzyme production.
              </p>
              <p className="font-semibold text-green-400 mb-2">Good Sources:</p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Lean meats and poultry</li>
                <li>Fish and seafood</li>
                <li>Eggs and dairy</li>
                <li>Legumes and tofu</li>
                <li>Nuts and seeds</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <div className="flex flex-col mb-4">
                <div className="w-12 h-12 bg-green-300 text-blue-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faUtensils} />
                </div>
                <h3 className="mt-2 font-semibold text-lg">Carbohydrates</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Primary energy source for the body, especially the brain and during high-intensity exercise.
              </p>
              <p className="font-semibold text-green-400 mb-2">Good Sources:</p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Whole grains</li>
                <li>Fruits and vegetables</li>
                <li>Legumes and beans</li>
                <li>Sweet potatoes</li>
                <li>Quinoa and oats</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <div className="flex flex-col mb-4">
                <div className="w-12 h-12 bg-green-300 text-yellow-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <h3 className="mt-2 font-semibold text-lg">Fats</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Essential for hormone production, brain health, vitamin absorption, and cell membrane integrity.
              </p>
              <p className="font-semibold text-green-400 mb-2">Good Sources:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Avocados</li>
                <li>Olive oil and olives</li>
                <li>Nuts and seeds</li>
                <li>Fatty fish (salmon, sardines)</li>
                <li>Eggs and full-fat yogurt</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white text-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-12">
            
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Balanced Meal Planning</h2>
              <p className="text-gray-600 mt-2">Create nutritious, satisfying meals with these simple guidelines</p>
            </div>

        
            <div className="grid md:grid-cols-2 gap-6">
             
              <div className="bg-gray-50 p-6 shadow-lg rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">The Plate Method</h3>
                <div className="bg-gray-100 h-60 flex items-center justify-center rounded-lg mb-4">
                  <img  className="w-full object-cover h-full  " src="src\assets\images\Plate Method.jpg" alt="Plate Method" /> 
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                   
                    Fill half your plate with non-starchy vegetables - leafy greens, broccoli, peppers, etc.
                  </li>
                  <li className="flex items-start gap-2">
                  
                    Fill one quarter with protein - chicken, fish, tofu, beans, etc.
                  </li>
                  <li className="flex items-start gap-2">
                   
                    Fill one quarter with complex carbohydrates - brown rice, quinoa, sweet potato, etc.
                  </li>
                  <li className="flex items-start gap-2">
                  
                    Add a small amount of healthy fat - olive oil, avocado, nuts, etc.
                  </li>
                </ul>
              </div>

           
              <div className="bg-gray-50 p-6 shadow-lg rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Meal Prep Tips</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <h1 className="font-semibold text-lg">Batch cook staples</h1>
                    <p>Prepare grains, proteins, and roasted vegetables in advance for quick meal assembly throughout the week.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M20 6L9 17l-5-5"/> </svg>
                    <span><strong>Use the rainbow approach</strong><br/>Include a variety of colorful fruits and vegetables to ensure a wide range of nutrients.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M20 6L9 17l-5-5"/> </svg>
                    <span><strong>Invest in quality containers</strong><br/>Use glass containers with compartments to keep foods separate and maintain freshness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M20 6L9 17l-5-5"/> </svg>
                    <span><strong>Plan ahead</strong><br/>Set aside dedicated time each week for meal planning, shopping, and preparation.</span>
                  </li>
                </ul>
                <div className="bg-green-100 p-4 rounded-lg mt-6">
                  <p className="text-green-800 font-semibold">Pro Tip</p>
                  <p className="text-green-700">Freeze individual portions of soups, stews, and casseroles for quick, nutritious meals when you're short on time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-8">
            Common questions about nutrition and diet
          </p>

          <div className="space-y-4">
         
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How many calories should I eat per day?</h3>
              <p className="text-gray-600">
                Caloric needs vary based on age, sex, weight, height, and activity level. For general guidance, adult women typically need 1,600–2,400 calories per day, while adult men need about 2,000–3,000 calories. Use our calculator for personalized recommendations.
              </p>
            </div>

          
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What's the difference between simple and complex carbohydrates?</h3>
              <p className="text-gray-600">
                Simple carbs (like sugar and white flour) are quickly digested and can spike blood sugar. Complex carbs (like whole grains and vegetables) contain fiber, digest more slowly, and provide sustained energy without dramatic blood sugar fluctuations.
              </p>
            </div>
        
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Are fats really that bad for you?</h3>
              <p className="text-gray-600">
              Not all fats are bad! Healthy fats, like those found in avocados, nuts, and olive oil, are essential for many bodily functions. It's the saturated and trans fats you should limit.
              </p>
            </div>
          
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How much water should I drink?</h3>
              <p className="text-gray-600">
              A common recommendation is eight 8-ounce glasses a day (64 ounces total), but individual needs vary.  Pay attention to your thirst and the color of your urine (pale yellow is a good sign of hydration).
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
    </>
  );
}

export default NutritionGuide;

