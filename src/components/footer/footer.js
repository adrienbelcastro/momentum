import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__button-container">
          <button className="footer__button">
            <AiFillGithub className="footer__github" />
          </button>
          <button className="footer__button">
            <BsLinkedin className="footer__linkedin" />
          </button>
        </div>
        <p>Copyright © 2023 Adrien Belcastro - All Rights Reserved </p>
      </div>
    </>
  );
};

export default Footer;
