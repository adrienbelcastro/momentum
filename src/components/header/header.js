import Sidebar from "./Sidebar";
import { AvatarGenerator } from "random-avatar-generator";
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = (data) => {
  const generator = new AvatarGenerator();
  const profilePic = generator.generateRandomAvatar();

  return (
    <>
      <div className="header">
        <ul className="header__desktop-navbar">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Mobile Logo"></img>
          </Link>
          <Link to="/">
            <img
              src={logo}
              alt="desktop logo"
              className="header__desktop-logo"
            ></img>
          </Link>

          <a href="/planner" className="header__desktop-ingredients">
            Meal Planner
          </a>
          <a href="/country" className="header__desktop-countries">
            Countries
          </a>
          <a href="/goals" className="header__desktop-random-recipe">
            Goals
          </a>
          <a href="/random" className="header__desktop-random-recipe">
            Random Recipe
          </a>
        </ul>
        <ul className="header__nav">
          <Link to="/account">
            <img
              className="header__profile"
              src={profilePic}
              alt="Profile"
            ></img>
          </Link>
          <Link to="/signup">
            <button className="header__desktop-signup">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="header__desktop-signup">Log In</button>
          </Link>
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
