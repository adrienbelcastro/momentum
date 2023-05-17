import "./SignUpForm.scss";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SignUpForm = () => {
  return (
    <div className="form">
      <Link to="/">
        <div className="form__back-arrow">
          <AiOutlineArrowLeft className="" />
        </div>
      </Link>
      <h2 className="form__subheader">Create An Account</h2>
      <h4 className="form__tagline">No More Boxed Mac And Cheese</h4>
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
                name="Name"
                placeholder="Name"
              />
            </label>

            <label className="form__container">
              <input
                className="form__input"
                type="text"
                name="Email"
                placeholder="Email"
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
                <h4 className="form__btn-title">Create Account</h4>
              </button>
            </div>
            <div className="form__login-container">
              <p className="form__login-prompt">
                Already Have An Account?{" "}
                <Link className="form__login-link" to="/login">
                  Log In{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
