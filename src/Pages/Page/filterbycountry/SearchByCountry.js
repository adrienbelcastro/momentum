import { countrySearchUrl } from "../../../utils";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Countries from "../../../components/filters/Countries";

function CountryResults() {
  const [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get(`${countrySearchUrl}`)
      .then((result) => {
        setCountry(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!country) {
    return "Loading";
  } else {
    return (
      <>
        <Header />
        <h1 className="countries__title">Search By Countries</h1>
        <Countries country={country} />
        <Footer />
      </>
    );
  }
}

export default CountryResults;
