import "./AuthenticationForm.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { nutritionDatabaseURL } from "../../utils";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneRegex = /^\d{10}$/;

  const handleRegister = (event) => {
    event.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required");
    } else if (!emailRegex.test(email)) {
      setError("Invalid email format");
    } else if (!phoneRegex.test(phone)) {
      setError("Invalid phone number format");
    } else {
      axios
        .post(`${nutritionDatabaseURL}register`, {
          username,
          password,
          email,
          phone,
        })
        .then((response) => {
          toast("Account Created");
          setIsLoggedIn(true);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          console.error("Authentication failed", error);
          toast("Registration Failed");
        });
    }
  };
  return (
    <div className="form">
      <div>
        <div>
          <form>
            <label className="form__container">
              <input
                className="form__input"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label className="form__container">
              <input
                className="form__input"
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="form__container">
              <input
                className="form__input"
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <label className="form__container">
              <input
                className="form__input"
                type="text"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="form__btn-container">
              <button className="form__btn" onClick={handleRegister}>
                <h4 className="form__btn-title">Create Account</h4>
              </button>
            </div>
            <div className="form__login-container">
              <p className="form__login-prompt">
                Already Have An Account?{" "}
                <Link className="form__link" to="/login">
                  Log In{" "}
                </Link>
              </p>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
