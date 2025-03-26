import  img1  from "./images/recipes&cooking/breakfast.jpg"
import  img2  from "./images/recipes&cooking/lunch.webp"
import  img3  from "./images/recipes&cooking/dinner.jpg"
import  img4  from "./images/recipes&cooking/snacks.png"
import  img5  from "./images/recipes&cooking/recipe1.png"
import  img6  from "./images/recipes&cooking/recipe2.png"
import  img7  from "./images/recipes&cooking/recipe3.png"
import  img8  from "./images/recipes&cooking/recipe4.png"
import  img9  from "./images/recipes&cooking/f1.png"
import  img10  from "./images/recipes&cooking/f2.png"
import  img11  from "./images/recipes&cooking/f3.png"


 export const tips = [
    { title: "Prep Before Cooking", description: "Mise en place (everything in place) is the chef’s secret to stress-free cooking. Prepare and measure all ingredients before you start cooking." },
    { title: "Season in Layers", description: "Add seasoning at different stages of cooking rather than all at once to build complex, well-developed flavors." },
    { title: "Rest Your Proteins", description: "Allow meat to rest after cooking to redistribute juices, resulting in more tender and flavorful results." },
  ];



 export const RecipeCategories =[
    { name: "Breakfast", desc: "Start your day right", bg:img1 },
    { name: "Lunch", desc: "Midday fuel" , bg:img2},
    { name: "Dinner", desc: "Evening satisfaction", bg:img3 },
    { name: "Snacks", desc: "Healthy bites" , bg:img4},
    { name: "Vegetarian", desc: "Plant-powered meals" , bg:img5},
    { name: "Vegan", desc: "100% plant-based", bg:img6},
    { name: "Gluten-Free", desc: "No gluten, all flavor" , bg:img7},
    { name: "Quick & Easy", desc: "30 minutes or less" , bg:img8},
  ]
  
 export const featuredRecipes = [
    {
      name: 'Mediterranean Quinoa Bowl',
      description: 'Protein-packed quinoa with roasted vegetables, chickpeas, and a lemon-tahini dressing.',
      imageUrl: img9,
      time: '25 mins',
      calories: '380 cal',
      difficulty: 'Easy',
      diet: 'Vegetarian',
    },
    {
      name: 'Grilled Salmon with Avocado Salsa',
      description: 'Omega-3 rich salmon topped with fresh avocado salsa for a nutrient-dense dinner.',
      imageUrl:img10,
      time: '30 mins',
      calories: '420 cal',
      difficulty: 'Medium',
      diet: 'High Protein',
    },
    {
      name: 'Overnight Chia Pudding',
      description: 'Fiber-rich breakfast with chia seeds, plant milk, and fresh berries for sustained energy.',
      imageUrl:img11,
      time: '5 mins + overnight',
      calories: '320 cal',
      difficulty: 'Easy',
      diet: 'Vegan',
    },
  ];
  

//   Master Essential Cooking Techniques

export const CookingTechniques =[
    { title: "Knife Skills",
     desc: "Proper knife techniques are the foundation of efficient cooking. Learn how to chop, dice, julienne, and more.",
     src:"https://www.youtube.com/embed/FUcw6HJkfO0"
    },
    { title: "Cooking Methods",
     desc: "Understanding different cooking methods—sautéing, roasting, steaming, and more—allows you to bring out the best flavors.",
     src:"https://www.youtube.com/embed/UhWaOjHIkvo"
    },
]
  