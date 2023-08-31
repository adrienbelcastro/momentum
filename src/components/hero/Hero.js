import "./Hero.scss";
import video from "../../assets/videos/hero-vid.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__video-container">
          <video className="hero__video" autoPlay="autoplay" muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className="hero__video-overlay">
            <h1 className="hero__title">The Gordon Ramsey Of Recipe Sites</h1>
            <Link to="/country">
              <button className="hero__cta">
                <h1 className="hero__cta-title">Start Your Journey</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
