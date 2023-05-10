import Sidebar from "./Sidebar";
import { AvatarGenerator } from "random-avatar-generator";
import logo from "../../assets/images/loading-video.png";

import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const generator = new AvatarGenerator();
  const profilePic = generator.generateRandomAvatar();

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Mobile Logo"></img>
        </Link>
        <Link to="/">
          <img src={logo} className="header__desktop-logo"></img>
        </Link>
        <ul className="header__desktop-navbar">
          <a href="/" className="header__desktop-recipes">
            Recipe Category
          </a>

          <a href="/" className="header__desktop-ingredients">
            Ingredients
          </a>
          <a href="/country" className="header__desktop-countries">
            Countries
          </a>
          <a href="/random" className="header__desktop-random-recipe">
            Random Recipe
          </a>
        </ul>
        <ul className="header__nav">
          <input
            className="header__desktop-search"
            type="search"
            placeholder=" Search For..."
          ></input>
          <img
            className="header__profile"
            src={profilePic}
            alt="Profile "
          ></img>
          <button className="header__desktop-signup">Sign Up</button>
          <button className="header__desktop-signup">Log In</button>
        </ul>
      </div>
      <div className="header__sidebar">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerID={"outer-container"}
        />
      </div>
    </>
  );
};

export default Header;
