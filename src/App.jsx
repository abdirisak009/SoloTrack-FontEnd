import React from "react";
import WeightLoss from "./pages/WeightLoss";
import Nutrition from "./pages/Nutrition";
import Recipe_cooking from "./pages/Recipe_cooking";
import Signup from "./pages/Signup";
import LifestyleMindset from "./pages/LifestyleMindset";
import { Route,Routes } from "react-router-dom";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeightLoss />}></Route>
        <Route path="/Nutrition" element={<Nutrition />}></Route>
        <Route path="/RecipeCooking" element={<Recipe_cooking />}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/LifestyleMindset" element={<LifestyleMindset />}></Route>
      </Routes>
    </div>
  );
};

export default App;
