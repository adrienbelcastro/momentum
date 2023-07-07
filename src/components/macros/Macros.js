import React from "react";
import { useState, useEffect } from "react";
import "./Macros.scss";
import axios from "axios";
import {
  nutritionApiKey,
  nutritionApiUrl,
  nutritionDatabaseURL,
} from "../../utils";
import Loading from "../loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Macros({ name }) {
  const recipeName = name;
  const [nutritionInfo, setNutritionInfo] = useState();
  const [nutrients, setNutrients] = useState({});
  const [category, setCategory] = useState("Breakfast");

  useEffect(() => {
    axios
      .get(`${nutritionApiUrl}${recipeName}${nutritionApiKey}`)
      .then((result) => {
        const res = result.data.hits[0];
        setNutritionInfo(res);
        setNutrients({
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
  }, [recipeName]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${nutritionDatabaseURL}`, {
        name: recipeName,
        meal_type: category,
        calories: nutrients.macros.calories,
        carbohydrates: nutrients.macros.carbs,
        fats: nutrients.macros.fat,
        protein: nutrients.macros.protein,
      })
      .then((result) => {
        console.log(result.data);
        if (result.status === 200) {
          toast("Recipe Added to Planner");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!nutritionInfo) {
    return <Loading />;
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
        </div>
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
          <div>
            <button
              className="macros__button"
              type="submit"
              onClick={handleSubmit}
            >
              Add To Planner +
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Macros;
