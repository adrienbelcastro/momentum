import "../signupform/SignUpForm.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="form">
        <Link to="/">
          <div className="form__back-arrow">
            <AiOutlineArrowLeft className="" />
          </div>
        </Link>
        <h2 className="form__subheader">Login</h2>
        <h4 className="form__tagline">No More Bad Tinder Dates</h4>
        <div>
          <div>
            <form>
              <label className="form__container">
                <input
                  className="form__input"
                  type="text"
                  name="Username"
                  placeholder="Username"
                />
              </label>

              <label className="form__container">
                <input
                  className="form__input"
                  type="text"
                  name="Password"
                  placeholder="Password"
                />
              </label>
              <label className="form__container">
                <input
                  className="form__input"
                  type="text"
                  name="Password"
                  placeholder="Confirm Password"
                />
              </label>
              <div className="form__btn-container">
                <button className="form__btn">
                  <h4 className="form__btn-title">login</h4>
                </button>
              </div>
              <div className="form__login-container">
                <p className="form__login-prompt">
                  Don't Have An Account?{" "}
                  <Link className="form__signup-link" to="/signup">
                    Sign Up{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
