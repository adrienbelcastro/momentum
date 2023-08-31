import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";
import { nutritionDatabaseURL } from "../../../utils";
import "../articlepage/Article.scss";

export default function Article() {
  const [articleData, setArticleData] = useState();
  const articleId = useParams();

  useEffect(() => {
    axios
      .get(`${nutritionDatabaseURL}article/${articleId.id}`)
      .then((result) => {
        setArticleData(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [articleId]);

  if (!articleData) {
    return <Loading />;
  } else {
    const content = articleData[0].content.split("\n");
    return (
      <div className="article">
        <Header />

        <div className="article__flex">
          <img
            className="article__photo"
            src={articleData[0].image}
            alt="Article Thumbnail"
          />
          <div className="article__container">
            <h1 className="article__title">{articleData[0].title}</h1>
            <h3 className="article__author">{articleData[0].author}</h3>
          </div>
          <p className="article__content">{articleData[0].introduction}</p>
          {content.map((content, index) => (
            <div key={index} className="article__content">
              {content}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
