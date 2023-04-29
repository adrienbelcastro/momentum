import Sidebar from "./Sidebar";
import { AvatarGenerator } from "random-avatar-generator";
import logo from "../../assets/images/loading-video.png";
import { AiOutlineSearch } from "react-icons/ai";
import "./header.scss";

const Header = () => {
  const generator = new AvatarGenerator();
  const profilePic = generator.generateRandomAvatar();
  return (
    <>
      <div className="header">
        <ul className="header__desktop-navbar">
          <img src={logo} className="header__desktop-logo"></img>
          <a href="/" className="header__desktop-recipes">
            Recipe Category
          </a>

          <a href="/" className="header__desktop-ingredients">
            Ingredients
          </a>
          <a href="/" className="header__desktop-countries">
            Countries
          </a>
          <a href="/" className="header__desktop-countries">
            Random Recipe
          </a>
        </ul>
        <ul className="header__nav">
          <input
            className="header__desktop-search"
            type="search"
            placeholder=" search"
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
