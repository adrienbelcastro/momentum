import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import CategoryGrid from "../../../components/categories/CategoryGrid";
import Hero from "../../../components/hero/Hero";
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
        <Hero />
        <CategoryGrid categories={categories} />
        <Footer />
      </>
    );
  }
}

export default HomePage;
