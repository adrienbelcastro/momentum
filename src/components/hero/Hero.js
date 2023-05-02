import "./Hero.scss";
import video from "../../assets/videos/hero-vid.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__video-container">
          <video className="hero__video" autoPlay="autoplay" muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className="hero__video-overlay"></div>
          <h1 className="hero__title">The Gordon Ramsey Of Recipe Sites</h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
