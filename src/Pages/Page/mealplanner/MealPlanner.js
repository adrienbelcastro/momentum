import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import "./MealPlanner.scss";
import Diary from "../../../components/diary/Diary";
import axios from "axios";
import { useState, useEffect } from "react";
import { nutritionDatabaseURL } from "../../../utils";
import Loading from "../../../components/loading/Loading";

function MealPlanner({ isLoggedIn }) {
  const [planner, setPlanner] = useState();

  useEffect(() => {
    axios
      .get(`${nutritionDatabaseURL}meals`)
      .then((result) => {
        setPlanner(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (recipeId) => {
    axios
      .delete(`${nutritionDatabaseURL}meals/${recipeId}`)
      .then((result) => {
        setPlanner((prevPlanner) =>
          prevPlanner.filter((meal) => meal.recipe_id !== recipeId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

  if (!planner) {
    return <Loading />;
  } else {
    const totalCalories = planner.reduce(
      (total, meal) => total + meal.calories,
      0
    );

    const totalProtein = planner.reduce(
      (total, meal) => total + meal.protein,
      0
    );

    const totalFats = planner.reduce((total, meal) => total + meal.fats, 0);

    const totalCarbs = planner.reduce(
      (total, meal) => total + meal.carbohydrates,
      0
    );

    return (
      <>
        <Header isLoggedIn={isLoggedIn} />
        <section className="planner">
          <div className="planner__tracker">
            <h1 className="planner__total-calories">
              {totalCalories} Calories
            </h1>
            <div className="planner__macros-flex">
              <h3 className="planner__total-calories">
                Protein: {totalProtein} g
              </h3>
              <h3 className="planner__total-calories">Fats: {totalFats} g</h3>
              <h3 className="planner__total-calories">Carbs: {totalCarbs} g</h3>
            </div>
          </div>

          {mealTypes.map((category, index) => (
            <div className="planner__container" key={index}>
              {planner
                .filter((meal) => meal.meal_type === category)
                .map((meal) => (
                  <>
                    <div className="planner__category-flex">
                      <h1 className="planner__title">{category}</h1>
                      <button
                        onClick={() => handleDelete(meal.recipe_id)}
                        className="planner__delete"
                      >
                        ❌
                      </button>
                    </div>
                    <Diary meal={meal} />
                  </>
                ))}
            </div>
          ))}
        </section>
        <Footer />
      </>
    );
  }
}

export default MealPlanner;
