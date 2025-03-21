export default function FoodsMealPlan() {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Foods That Support Weight Loss */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-4xl font-bold text-center">Foods That Support Weight Loss</h2>
          <p className="text-gray-600 text-center mb-6">
            These nutrient-dense foods will keep you satisfied while helping you reach your goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Lean Proteins",
                description:
                  "Chicken breast, turkey, fish, tofu, legumes, and low-fat dairy help build muscle and keep you full longer.",
                image: "src/assets/images/FoodMeal Images/Lean Proteins.png",
              },
              {
                title: "Non-Starchy Vegetables",
                description:
                  "Broccoli, spinach, kale, bell peppers, and cauliflower are low in calories but high in fiber and nutrients.",
                image: "src/assets/images/FoodMeal Images/Non-Starchy Vegetables.png",
              },
              {
                title: "Whole Grains",
                description:
                  "Quinoa, brown rice, oats, and barley provide fiber and sustained energy without spiking blood sugar.",
                image: "src/assets/images/FoodMeal Images/Whole Grains.png",
              },
              {
                title: "Healthy Fats",
                description:
                  "Avocados, nuts, seeds, and olive oil provide essential fatty acids and help with nutrient absorption.",
                image: "src/assets/images/FoodMeal Images/Healthy Fats.png",
              },
            ].map((food, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                <img src={food.image} alt={food.title} className="w-full h-65 object-cover rounded-md mb-3" />
                <h3 className="font-semibold text-lg">{food.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{food.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Sample Meal Plan */}
        <div className="mt-10 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center">Sample Meal Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Breakfast",
                items: [
                  "Greek yogurt with berries and a tablespoon of honey",
                  "Overnight oats with almond milk and chia seeds",
                  "Vegetable omelet with whole grain toast",
                ],
                color: "text-green-600",
              },
              {
                title: "Lunch",
                items: [
                  "Grilled chicken salad with olive oil dressing",
                  "Quinoa bowl with roasted vegetables and chickpeas",
                  "Turkey and avocado wrap with side salad",
                ],
                color: "text-green-700",
              },
              {
                title: "Dinner",
                items: [
                  "Baked salmon with steamed broccoli and sweet potato",
                  "Stir-fried tofu with mixed vegetables and brown rice",
                  "Lentil soup with a side of mixed greens",
                ],
                color: "text-green-800",
              },
            ].map((meal, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                <h3 className={`font-semibold text-lg ${meal.color}`}>{meal.title}</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-600 text-sm">
                  {meal.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  