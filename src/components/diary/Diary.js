import React from "react";

import "./Diary.scss";

function Diary({ meal }) {
  console.log(meal);
  return (
    <div className="diary">
      <h3 className="diary__recipe-title">{meal.name}</h3>
      <div className="diary__macros">
        <h4 className="macros__calories">Calories: {meal.calories}</h4>
        <h4 className="macros__fats">Fats: {meal.fats}g</h4>
        <h4 className="macros__carbs">Carbs:{meal.carbohydrates}g</h4>
        <h4 className="macros__protein">Protein: {meal.protein}g</h4>
      </div>
    </div>
  );
}

export default Diary;
