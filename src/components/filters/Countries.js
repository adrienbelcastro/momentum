import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Countries.scss";

function Countries(data) {
  const countryData = data.country.meals;

  return (
    <section className="countries">
      <div className="countries__flex"></div>
      <div className="countries__flex">
        <div className="countries__container">
          {countryData.map((countryData, index) => (
            <Link to={`${countryData.strArea}`} key={index}>
              <h4 className="countries__country">{countryData.strArea}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;
