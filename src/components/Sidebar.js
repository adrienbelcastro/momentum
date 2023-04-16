import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.scss";

export default (Sidebar) => {
  return (
    <Menu
      burgerButtonClassName={"sidebar__burger-btn"}
      burgerBarClassName={"sidebar__burger-bars"}
      crossButtonClassName={"sidebar__cross-btn"}
      crossClassName={"sidebar__cross"}
      menuClassName={"sidebar__menu"}
      morphShapeClassName={"sidebar__morph-shape"}
      itemListClassName={"sidebar__item-list"}
      itemClassName={"sidebar__item"}
      overlayClassName={"sidebar__overlay"}
    >
      <a href="/" className="sidebar__recipes">
        Recipe Category
      </a>

      <a href="/" className="sidebar__ingredients">
        Ingredients
      </a>
      <a href="/" className="sidebar__countries">
        Countries
      </a>
      <input
        className="sidebar__search"
        type="search"
        placeholder="search 🔎"
      ></input>
      <button className="sidebar__signup">Sign Up</button>
    </Menu>
  );
};
