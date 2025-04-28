import React from 'react'

import { CheckCircle, Scale, Leaf, Utensils, Droplet, Clock } from "lucide-react";
import FoodsMealPlan from '../components/FoodMeal';
import { Card, CardContent } from '../components/Card';
import SuccessStories from '../components/SuccessStories';
import Header from '../components/Header';
import Footer from '../components/Footer';


const tips = [
    {
      icon: <CheckCircle className="text-green-500" size={24} />, 
      title: "Set Realistic Goals",
      description: "Aim for 1-2 pounds per week of weight loss. This pace is sustainable and helps preserve muscle mass while losing fat."
    },
    {
      icon: <Scale className="text-green-500" size={24} />, 
      title: "Create a Calorie Deficit",
      description: "Consume fewer calories than you burn. A deficit of 500-750 calories per day is generally effective for sustainable weight loss."
    },
    {
      icon: <Leaf className="text-green-500" size={24} />, 
      title: "Focus on Nutrient Density",
      description: "Choose foods that provide the most nutrients for the fewest calories. This helps you feel satisfied while eating less."
    },
    {
      icon: <Utensils className="text-green-500" size={24} />, 
      title: "Portion Control",
      description: "Be mindful of portion sizes. Using smaller plates, measuring servings, and eating slowly can help prevent overeating."
    },
    {
      icon: <Droplet className="text-green-500" size={24} />, 
      title: "Stay Hydrated",
      description: "Drink plenty of water. Sometimes thirst is mistaken for hunger, and staying hydrated can help control appetite."
    },
    {
      icon: <Clock className="text-green-500" size={24} />, 
      title: "Consistency is Key",
      description: "Maintain consistent eating patterns. Skipping meals often leads to overeating later and can slow metabolism."
    }
  ];
  
const WeightLoss = () => {
  return (
    <>
    <Header/>
    {/* weight Loss Hero Section */}
    <section className="bg-green-500 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 mx-20">
          Your Weight Loss Journey Starts Here
        </h1>
        <p className="text-xl mb-8 mx-20">
          Discover science-backed strategies, meal plans, and success stories to help you<br/> achieve your weight loss goals in a healthy, sustainable way.
        </p>
        <button className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-green-500 hover:text-white transition duration-300">
          Start Your Journey
        </button>
      </div>
    </section>

    {/* Weight Loss Guidance Section */}

    <div className="max-w-5xl mx-auto p-4 ">
      <h2 className="text-4xl font-bold text-center">Weight Loss Guidance</h2>
      <p className="text-gray-600 mb-6 text-center">Follow these evidence-based principles to lose weight effectively and keep it off long-term</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <Card key={index} className="p-4 rounded-lg shadow-md bg-white">
            <CardContent className="flex flex-col items-start space-y-2">
              <div className="p-2 bg-green-100 rounded-full w-10">{tip.icon}</div>
              <h3 className="text-xl font-semibold">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    <FoodsMealPlan/>
    <SuccessStories/>
    <Footer/>
    </>
  )
}


export default WeightLoss