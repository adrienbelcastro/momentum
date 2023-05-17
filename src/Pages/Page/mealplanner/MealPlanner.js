import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";
import "./MealPlanner.scss";
import Diary from "../../../Components/diary/Diary";

function MealPlanner({ breakfast, lunch, dinner, snack }) {
  console.log(breakfast);
  // return (
  //   <>
  //     <Header />
  //     <section className="planner">
  //       <div className="planner__tracker">
  //         <h1 className="planner__total-calories">
  //           {planner.calories.current}/{planner.calories.total} Calories
  //         </h1>
  //       </div>

  //       {planner.breakfast.map((meal, index) => (
  //         <div key={index} className="planner__container">
  //           <h1>Breakfast</h1>
  //           <Diary meal={meal} />
  //         </div>
  //       ))}
  //       {planner.lunch.map((meal, index) => (
  //         <div key={index} className="planner__container">
  //           <h1>Lunch</h1>
  //           <Diary meal={meal} />
  //         </div>
  //       ))}
  //       {planner.dinner.map((meal, index) => (
  //         <div key={index} className="planner__container">
  //           <h1>Dinner</h1>
  //           <Diary meal={meal} />
  //         </div>
  //       ))}
  //       {planner.snack.map((meal, index) => (
  //         <div key={index} className="planner__container">
  //           <h1>Snack</h1>
  //           <Diary meal={meal} />
  //         </div>
  //       ))}
  //     </section>
  //     <Footer />
  //   </>
  // );
}

export default MealPlanner;
