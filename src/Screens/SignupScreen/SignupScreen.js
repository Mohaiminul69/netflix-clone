import React from "react";
import "./SignupScreen.css";

const SignupScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button onClick={(e) => signIn(e)} type="submit">
          Sign In
        </button>
        <h4>
          New to Netflix? <span onClick={(e) => register(e)}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
