import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import "./MealPlanner.scss";
// import Diary from "../../../components/diary/Diary";
import axios from "axios";
import { useState, useEffect } from "react";
import { nutritionDatabaseURL } from "../../../utils";
import loadingVideo from "../../../assets/videos/loading-video.mp4";

function MealPlanner() {
  const [planner, setPlanner] = useState();

  useEffect(() => {
    axios
      .get(`${nutritionDatabaseURL}`)
      .then((result) => {
        console.log(result.data);
        setPlanner(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!planner) {
    return (
      <>
        <video className="loading__video" autoPlay="autoplay" muted loop>
          <source src={loadingVideo} type="video/mp4" />
        </video>
        <div>"Loading"</div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <section className="planner">
          <div className="planner__tracker">
            <h1 className="planner__total-calories">{} Calories</h1>
          </div>
          {planner.map((meal, index) => {
            if (meal.meal_type === "breakfast") {
              return (
                <div key={index} className="planner__container">
                  <h1>Breakfast</h1>
                  {/* <Diary meal={planner} /> */}
                </div>
              );
            }
          })}
          {/* {planner.lunch.map((meal, index) => (
          <div key={index} className="planner__container">
            <h1>Lunch</h1>
            <Diary meal={meal} />
          </div>
        ))}
        {planner.dinner.map((meal, index) => (
          <div key={index} className="planner__container">
            <h1>Dinner</h1>
            <Diary meal={meal} />
          </div>
        ))}
        {planner.snack.map((meal, index) => (
          <div key={index} className="planner__container">
            <h1>Snack</h1>
            <Diary meal={meal} />
          </div>
        ))} */}
        </section>
        <Footer />
      </>
    );
  }
}

export default MealPlanner;
