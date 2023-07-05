import React from "react";
import image from "../../assets/images/signup-background.jpg";
import "../articles/ArticleCard.scss";

export default function ArticleCard(data) {
  return (
    <div className="article-card">
      <img
        className="article-card__thumbnail"
        src={data.image}
        alt="Article Thumbnail"
      />
      <div>
        <h1 className="article-card__title">{data.title}</h1>
        <h3 className="article-card__author">{data.author}</h3>
      </div>
    </div>
  );
}
