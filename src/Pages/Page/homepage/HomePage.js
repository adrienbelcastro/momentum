import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import CategoryGrid from "../../../components/categories/CategoryGrid";
import Hero from "../../../components/hero/Hero";
import axios from "axios";
import { categoryApiUrl } from "../../../utils";
import { useEffect, useState } from "react";
import loadingVideo from "../../../assets/videos/loading-video.mp4";
import ArticleList from "../../../components/articles/ArticleList";
import "../homepage/HomePage.scss";

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
    return (
      <>
        <video className="hero__video" autoPlay="autoplay" muted loop>
          <source src={loadingVideo} type="video/mp4" />
        </video>
        <div>"Loading"</div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Hero />
        <CategoryGrid categories={categories} />
        <h1 className="homepage__list-title">Popular Articles</h1>
        <ArticleList />
        <Footer />
      </>
    );
  }
}

export default HomePage;
