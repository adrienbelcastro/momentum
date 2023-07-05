import React, { useState, useEffect } from "react";

import { nutritionDatabaseURL } from "../../utils";
import axios from "axios";
import "../articles/ArticleList.scss";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

export default function ArticleList() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios
      .get(`${nutritionDatabaseURL}article`)
      .then((result) => {
        setArticles(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!articles) {
    return <Loading />;
  } else {
    return (
      <div className="article-list">
        <h1 className="article-list__title">Popular Articles</h1>
        <div className="article-list__container">
          {articles.map((articles, index) => (
            <Link key={index} to={`/article/${articles.id}`}>
              <ArticleCard
                title={articles.title}
                image={articles.image}
                author={articles.author}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
