import React from "react";
import image from "../../assets/images/signup-background.jpg";
import "../articles/ArticleList.scss";

export default function ArticleList() {
  return (
    <div className="article-list">
      <img
        className="article-list__thumbnail"
        src={image}
        alt="Article Thumbnail"
      />
      <div>
        <h1 className="article-list__title">Lorem Ipsum All Day</h1>
        <h3 className="article-list__author">Bob The Builder</h3>
      </div>
    </div>
  );
}
