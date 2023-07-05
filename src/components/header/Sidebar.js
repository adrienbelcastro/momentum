import React from "react";
import logo from "../../assets/images/loading-video.png";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.scss";

function Sidebar() {
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
      <a href="/" className="sidebar__links">
        HomePage
      </a>

      <a href="/planner" className="sidebar__links">
        Meal Planner
      </a>

      <a href="/country" className="sidebar__links">
        Countries
      </a>
      <a href="/random" className="sidebar__links">
        Random Recipe
      </a>
      <a href="/login" className="sidebar__links">
        Login
      </a>

      <img src={logo} alt="Logo" className="sidebar__logo"></img>
    </Menu>
  );
}

export default Sidebar;
