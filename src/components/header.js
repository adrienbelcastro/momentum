import Sidebar from "./Sidebar";
import { AvatarGenerator } from "random-avatar-generator";
import "./header.scss";

const Header = () => {
  const generator = new AvatarGenerator();
  const profilePic = generator.generateRandomAvatar();
  return (
    <>
      <div className="header">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerID={"outer-container"}
        />
        <div className="header">
          <nav className="header__nav">
            <img
              className="header__profile"
              src={profilePic}
              alt="Profile "
            ></img>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
