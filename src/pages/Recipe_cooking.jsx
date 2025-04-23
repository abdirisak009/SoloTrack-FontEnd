import React from "react";
import {tips,featuredRecipes,RecipeCategories,CookingTechniques} from "../assets/assets"
import rightSideImage from  "../assets/images/recipes&cooking/rightSideImage.png"
import Footer from "../components/Footer";
const Recipe_cooking= () => {
  return (

    <>
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="bg-[#00c951] text-white text-center py-16">
        <h1 className="text-5xl font-bold">Delicious & Nutritious Recipes</h1>
        <p className="mt-2 text-gray-200">Discover healthy, flavorful recipes and master essential cooking techniques. <br/> your meals and your body</p>
        <div className="mt-6 flex justify-center">
          <input
            type="text" 
            placeholder="Search recipes..."
            className="pl-10 py-2  pr-7 mr-4 relative rounded-full bg-white  text-black  focus:outline-none"
          />
          <i className="fa fa-search absolute text-gray-500 mt-3 ml-[-26%] "></i>
          <button className="bg-orange-500 px-5 py-2 rounded-full text-white font-medium">Find Recipes</button>
        </div>
      </div>
      
      {/* Recipe Categories */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-1">Browse Recipe Categories</h2>
        <p className="text-gray-600 font-medium">Find the perfect recipe for any meal, dietary preference, or occasion</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 mt-6 mx-4">
          {RecipeCategories.map((category, index) => (
            <div key={index} className=" brightness-60 h-44 flex flex-col text-left justify-end px-3 py-2  rounded-lg shadow-md   bg-cover bg-center" style={{backgroundImage:`url(${category.bg})`}} >
              <h3 className="font-bold text-xl text-white ">{category.name}</h3>
              <p className="text-sm text-white">{category.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Recipes */}
      <div className="text-center mt-16 px-10 bg-[#f3f4f6] py-6 pb-7">
      <h2 className="text-4xl font-bold">Featured Recipes</h2>
      <p className="text-gray-600">Our most popular, nutritionist-approved recipes</p>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-6">
        {featuredRecipes.map((recipe, index) => (
          <div key={index} className=" bg-white relative pb-6  rounded-lg shadow-md text-left">
           
           {/* top image  */}
           <img  src={recipe.imageUrl}  className="rounded-t-md h-52  w-full" />
           
            {/* other contentes starts here */}

            <div className="text-sm text-gray-500 ml-4 mt-3 font-normal flex  space-x-2 ">
              <span> <i className="fa fa-clock"></i> {recipe.time}</span>
              <span>  <i className="fa fa-fire mr-1"></i>{recipe.calories}</span>
              <span> <i className="fa fa-utensils mr-1"></i> {recipe.difficulty}</span>
            </div>
            <h3 className="mt-2 font-bold text-lg ml-4">{recipe.name}</h3>
            <p className="text-gray-500 font-normal mt-1 mb-3 text-md ml-4 ">{recipe.description}</p>
            <span className="inline-block absolute top-[0] right-2  ml-4 bg-green-500 text-white  text-sm font-medium  px-2 py-1 rounded-full mt-2">
              {recipe.diet}
            </span>
            <a href="#" className="text-green-500 ml-4  block mt-2 font-bold">View Recipe →</a>
          </div>
        ))}
      </div>

      <button className="mt-7 px-6 py-2 border border-green-500 text-green-500 rounded-full font-medium">
        Browse All Recipes →
      </button>
    </div>
      
      {/* Cooking Techniques & Meal Planning */}
      <div className="text-center mt-16 px-10">
        <h2 className="text-4xl font-bold">Master Essential Cooking Techniques</h2>
        <p className="text-gray-600">Learn the fundamental skills that will elevate your cooking</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {CookingTechniques.map((Cooking, index) => (
          <div key={index}  className="bg-[#f3f4f6] p-6 font-medium rounded-lg shadow-md text-left">
           
           <h3 className="font-bold text-lg">{Cooking.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{Cooking.desc}</p>
        <iframe
          width="100%"
          height="315"
          src={Cooking.src}
          title="Knife Skills Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="my-4 rounded-md"
        ></iframe>
        <a href="#" className="text-green-500 block mt-2">Watch Tutorial →</a>
          </div>
            ))}
</div>

        
        <div className="bg-[#f3f4f6] flex-cols md:flex pt-20 justify-between space-x-3 px-8 pb-10 rounded-lg shadow-md text-left mt-6">
            <div className="text  font-medium">
             <h3 className="font-bold text-2xl">Meal Planning Made Simple</h3>
          <p className="text-gray-600 text-md mt-2 mb-5 ">Our meal planning tools help you save time, reduce food waste, and maintain a balanced diet throughout the week.</p>
          <ul className="text-gray-600 text-md mt-1 ">
            <li className="mb-2"> <i className="fa fa-check bg-green-200 p-1 rounded-full mr-2 text-green-400"></i>Customizable weekly meal plans based on your dietary preferences</li>
            <li className="mb-2"> <i className="fa fa-check bg-green-200 p-1 rounded-full mr-2 text-green-400"></i>Automatic grocery lists generated from your selected recipes</li>
            <li className="mb-2"><i className="fa fa-check bg-green-200 p-1 rounded-full mr-2 text-green-400"></i>Nutritionally balanced meals that meet your health goals</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full font-bold">Try Meal Planning</button>
            </div>

            <img src={rightSideImage} alt="" className="w-[500px] h-[400px] rounded-md" />


        </div>
      </div>
        
      {/* pro cooking tips */}
      <div className="py-16 text-center ">
      <h2 className="text-3xl font-bold ">Pro Cooking Tips</h2>
      <p className="text-gray-500 mb-8 ">Simple hacks and techniques to elevate your cooking</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white  text-left shadow-md p-6 rounded-lg">
            <div className="text-[#00c951] text-xl font-bold bg-[#dbfce7] rounded-full p-1 w-9 h-9 text-center">{index + 1}</div>
            <h3 className="font-semibold mt-2 text-lg">{tip.title}</h3>
            <p className="text-gray-500 mt-1 text-[15px]">{tip.description}</p>
          </div>
        ))}
      </div>
    </div> 
    </div>

    <Footer/>


    
    </>
  );
};

export default Recipe_cooking;
