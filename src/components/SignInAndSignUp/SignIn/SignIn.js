import React, { Component } from "react";
import { signInWithGoogle, auth } from "../../../firebase/firebase.utils";
import "./SignIn.styles.scss";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="right">
        <span className="loginwith">SIGN IN</span>

        <form onSubmit={this.handleSubmit}>
          <input
            className="input-text"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="E-mail"
            required
          />
          <input
            className="input-password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
            required
          />

          <input type="submit" className="input-submit" value="Sign In" />
        </form>
        <button className="social-signin google" onClick={signInWithGoogle}>
          SIGN IN WITH GOOGLE
        </button>
      </div>
    );
  }
}
