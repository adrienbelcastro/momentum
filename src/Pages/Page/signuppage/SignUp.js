import AccountForm from "../../../components/authenticationform/AuthenticationForm";
import { redirect } from "react-router-dom";
import "./SignUp.scss";

export default function SignUpPage({ isLoggedIn, setIsLoggedIn }) {
  if (isLoggedIn) {
    return redirect("/");
  }
  return (
    <>
      <div className="signup">
        <div className="signup__container">
          <h2 className="form__subheader">Create An Account</h2>
          <h4 className="form__tagline">No More Boxed Mac And Cheese</h4>
        </div>
        <AccountForm setIsLoggedIn={setIsLoggedIn} />
      </div>
    </>
  );
}
