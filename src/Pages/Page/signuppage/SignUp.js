import AccountForm from "../../../components/authenticationform/AuthenticationForm";
import "./SignUp.scss";

function SignUpPage({ setIsLoggedIn }) {
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

export default SignUpPage;
