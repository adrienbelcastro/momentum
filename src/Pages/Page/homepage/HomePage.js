import Header from "../../../Components/header/header";
import Footer from "../../../Components/footer/footer";
import CategoryGrid from "../../../Components/categories/CategoryGrid";
import axios from "axios";
import { categoryApiUrl } from "../../../utils";
import { useEffect, useState } from "react";

function HomePage() {
  const [categories, setCategories] = useState();
  useEffect(() => {
    axios
      .get(`${categoryApiUrl}`)
      .then((result) => {
        setCategories(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!categories) {
    return "Loading";
  } else {
    return (
      <>
        <Header />
        <CategoryGrid categories={categories} />
        <Footer />
      </>
    );
  }
}

export default HomePage;