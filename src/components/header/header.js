import Sidebar from "./Sidebar";
import { AvatarGenerator } from "random-avatar-generator";
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
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
          <a href="/random" className="header__desktop-random-recipe">
            Random Recipe
          </a>
        </ul>
        <ul className="header__nav">
          {isLoggedIn ? (
            <>
              <span className="header__desktop-signup">Welcome, User!</span>
              <Link to="/account">
                <img
                  className="header__profile"
                  src={profilePic}
                  alt="Profile"
                ></img>
              </Link>
            </>
          ) : (
            <>
              <RiAccountCircleFill className="header__mobile-authentication " />
              <Link className="header__desktop-signup" to="/login">
                Log In
              </Link>
              <Link className="header__desktop-signup" to="/signup">
                Sign In
              </Link>
            </>
          )}
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
