import React from "react";
import { useState, useEffect } from "react";
import "./Macros.scss";
import axios from "axios";
import { nutritionApiKey, nutritionApiUrl } from "../../utils";

function Macros({
  name,
  setBreakfast,
  setCalories,
  setLunch,
  setDinner,
  setSnack,
}) {
  const recipeName = name;
  const [nutritionInfo, setNutritionInfo] = useState();
  const [nutrients, setNutrients] = useState({});
  const [category, setCategory] = useState("Breakfast");

  useEffect(() => {
    axios
      .get(`${nutritionApiUrl}${recipeName}${nutritionApiKey}`)
      .then((result) => {
        const res = result.data.hits[0];
        console.log(res);
        setNutritionInfo(res);
        setNutrients({
          category: category,
          macros: {
            name: recipeName,
            calories: Math.round(res.recipe.calories),
            carbs: Math.round(res.recipe.totalNutrients.CHOCDF.quantity),
            fat: Math.round(res.recipe.totalNutrients.FAT.quantity),
            protein: Math.round(res.recipe.totalNutrients.PROCNT.quantity),
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [recipeName, category]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCalories.setCalories());
    if (category === "Breakfast") {
      setBreakfast.setBreakfast(nutritionInfo);
    } else if (category === "Lunch") {
      setLunch.setLunch(nutritionInfo);
    } else if (category === "Dinner") {
      setDinner.setDinner(nutritionInfo);
    } else if (category === "Snacl") {
      setSnack.setSnack(nutritionInfo);
    }
    // setCalories(setNutrients);
    //   const planner = JSON.parse(sessionStorage.getItem("planner"));
    //   planner[nutrients.category] = [
    //     ...planner[nutrients.category],
    //     nutrients.macros,
    //   ];
    //   sessionStorage.setItem("planner", JSON.stringify(planner));
  };

  if (!nutritionInfo) {
    return "Loading";
  } else {
    return (
      <div className="macros">
        <h4 className="macros__disclaimer">Entire Recipe</h4>
        <div className="macros__container">
          <h4 className="macros__calories">
            Calories: {nutrients.macros.calories}
          </h4>
          <h4 className="macros__fats">Fat: {nutrients.macros.fat}g</h4>
          <h4 className="macros__carbs">
            Carbohydrates: {nutrients.macros.carbs}g
          </h4>
          <h4 className="macros__protein">
            Protein: {nutrients.macros.protein}g
          </h4>

          <form onSubmit={handleSubmit} className="macros__form-container">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="macros__select"
            >
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
            <button className="macros__button" type="submit">
              Add To Planner +
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Macros;
