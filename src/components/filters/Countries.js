import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Countries.scss";

function Countries(data) {
  const countryData = data.country.meals;

  return (
    <section className="countries">
      <div className="countries__flex">
        <Link to={`/`}>
          <div className="recipe-directions__back-arrow">
            <AiOutlineArrowLeft className="" />
          </div>
        </Link>
        <h1 className="countries__title">Search By Countries</h1>
      </div>
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
