import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./RecipeDirections.scss";
import Macros from "../macros/Macros";
import React from "react";

function RecipeDirections({ data }) {
  const recipeData = data.meals[0];

  const ingredientsKeys = Object.keys(recipeData).filter((item) =>
    item.includes("Ingredient")
  );

  const sentences = recipeData.strInstructions.split("\r\n");

  const ingredients = ingredientsKeys.map((item, index) => {
    return {
      name: recipeData[`strIngredient${index + 1}`],
      measure: recipeData[`strMeasure${index + 1}`],
    };
  });

  return (
    <div className="recipe-directions">
      <div className="recipe-directions__container">
        <h4 className="recipe-directions__category">
          {recipeData.strCategory}
        </h4>
        <h1 className="recipe-directions__title">{recipeData.strMeal}</h1>
        <div className="recipe-directions__flex">
          <img
            className="recipe-directions__thumbnail"
            src={recipeData.strMealThumb}
            alt="Thumbnail"
          ></img>
          <Macros name={recipeData.strMeal} />
        </div>
        <div className="recipe-directions__flex">
          <h3 className="recipe-directions__ingredients-title">Ingredients</h3>
          <div className="recipe-directions__ingredients-container">
            <div className="recipe-directions__ingredients-content">
              {ingredients.map((ingredient, index) => (
                <h4 className="recipe-directions__ingredients" key={index}>
                  {ingredient.name}
                </h4>
              ))}
            </div>
            <div className="recipe-directions__measurements-container">
              {ingredients.map((ingredient, index) => (
                <h4 key={index} className="recipe-directions__measurements">
                  {ingredient.measure}
                </h4>
              ))}
            </div>
          </div>
          <div className="recipe-directions__instructions-container">
            <h4 className="recipe-directions__instructions-title">
              Instructions
            </h4>
            {sentences.map((sentence, index) => (
              <div key={index} className="recipe-directions__instructions">
                {sentence}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDirections;
