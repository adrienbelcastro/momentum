import "../signupform/SignUpForm.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { nutritionDatabaseURL } from "../../utils";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${nutritionDatabaseURL}login`, { username, password })
      .then((response) => {
        const { token } = response.data;
        toast("Authentication Successful");
      })
      .catch((error) => {
        console.error("Authentication failed", error);
        toast("Authentication failed");
      });
  };
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
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              <label className="form__container">
                <input
                  className="form__input"
                  type="text"
                  name="Password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <div className="form__btn-container">
                <button className="form__btn" onClick={handleLogin}>
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
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
