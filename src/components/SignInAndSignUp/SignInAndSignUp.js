import React, { Component } from "react";

import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import "./SignInAndSignUp.styles.scss";

class SignInAndSignUp extends Component {
  render() {
    return (
      <div className="login-box-container">
        <div className="login-box">
          <SignUp />

          <SignIn />
          <div className="or">OR</div>
        </div>
      </div>
    );
  }
}

export default SignInAndSignUp;
