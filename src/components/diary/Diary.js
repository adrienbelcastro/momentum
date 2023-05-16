import React from "react";

import "./Diary.scss";

function Diary({ meal }) {
  return (
    <div className="diary">
      <h3 className="diary__recipe-title">{meal.name}</h3>
      <div className="diary__macros">
        <h4 className="macros__calories">C: {meal.calories}</h4>
        <h4 className="macros__fats">F: {meal.fat}g</h4>
        <h4 className="macros__carbs">C: {meal.carbs}g</h4>
        <h4 className="macros__protein">P: {meal.protein}g</h4>
      </div>
    </div>
  );
}

export default Diary;
