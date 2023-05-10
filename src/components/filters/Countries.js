import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import RecipeCard from "../recipecard/RecipeCard";
import "./Countries.scss";

function Countries(data) {
  const countryData = data.data.meals;

  return (
    <section className="countries-list">
      <Link to={`/`}>
        <div className="recipe-directions__back-arrow">
          <AiOutlineArrowLeft className="" />
        </div>
      </Link>
      <div className="countries__container">
        {countryData.map((countryData) => (
          <Link to={`${countryData.strArea}`}>
            <h4 className="countries__country">{countryData.strArea}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Countries;
