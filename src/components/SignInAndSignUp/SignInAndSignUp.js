import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignInAndSignUp.styles.scss";

class SignInAndSignUp extends Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    return (
      <div className="login-box-container">
        <div className="login-box">
          <div className="left">
            <h1>SIGN UP</h1>
            <form>
              <input
                className="input-text"
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                className="input-text"
                type="text"
                name="email"
                placeholder="E-mail"
              />
              <input
                className="input-password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                className="input-password"
                type="password"
                name="password2"
                placeholder="Retype password"
              />

              <input
                className="input-submit"
                type="submit"
                name="signup_submit"
                value="Sign Up"
              />
            </form>
          </div>

          <div className="right">
            <span className="loginwith">SIGN IN</span>

            <form>
              <input
                className="input-text"
                type="text"
                name="email"
                placeholder="E-mail"
              />
              <input
                className="input-password"
                type="password"
                name="password"
                placeholder="Password"
              />

              <input
                className="input-submit"
                type="submit"
                name="signup_submit"
                value="Sign In"
              />
            </form>
            <button className="social-signin google" onClick={signInWithGoogle}>
              SIGN IN WITH GOOGLE
            </button>
          </div>
          <div className="or">OR</div>
        </div>
      </div>
    );
  }
}

export default SignInAndSignUp;
