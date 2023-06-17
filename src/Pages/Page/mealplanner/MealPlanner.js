import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import "./MealPlanner.scss";
import Diary from "../../../components/diary/Diary";
import axios from "axios";
import { useState, useEffect } from "react";
import { nutritionDatabaseURL } from "../../../utils";
import Loading from "../../../components/loading/Loading";

function MealPlanner() {
  const [planner, setPlanner] = useState();

  useEffect(() => {
    axios
      .get(`${nutritionDatabaseURL}`)
      .then((result) => {
        setPlanner(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

  if (!planner) {
    return <Loading />;
  } else {
    return (
      <>
        <Header />
        <section className="planner">
          <div className="planner__tracker">
            <h1 className="planner__total-calories">{} Calories</h1>
          </div>
          {mealTypes.map((category, index) => (
            <div key={index} className="planner__container">
              <h1 className="planner__title">{category}</h1>
              {planner
                .filter((meal) => meal.meal_type === category)
                .map((meal) => (
                  <Diary meal={meal} />
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
