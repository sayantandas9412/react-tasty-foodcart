import React, { Component } from "react";
import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";
import "./SignUp.styles.scss";

export default class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    retypePassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, retypePassword } = this.state;
    if (password !== retypePassword) {
      alert("Passwords Don't Match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, retypePassword } = this.state;
    return (
      <div className="left">
        <h1>SIGN UP</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-text"
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            placeholder="Username"
            required
          />
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
          <input
            className="input-password"
            type="password"
            name="retypePassword"
            value={retypePassword}
            onChange={this.handleChange}
            placeholder="Retype password"
          />

          <input className="input-submit" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}
