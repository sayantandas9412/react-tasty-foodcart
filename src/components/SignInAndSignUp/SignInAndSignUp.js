import React, { Component } from "react";

import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import "./SignInAndSignUp.styles.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

class SignInAndSignUp extends Component {
  render() {
    return (
      <>
        <Backdrop />
        <div className="login-box-container">
          <div className="login-box">
            <SignUp />

            <SignIn />
            <div className="or">OR</div>
          </div>
        </div>
      </>
    );
  }
}

export default SignInAndSignUp;
