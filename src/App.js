import React, { Component } from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/main-section/MainSection";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import SignInAndSignUp from "./components/SignInAndSignUp/SignInAndSignUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route path="/" component={MainSection} />
        </Switch>
      </div>
    );
  }
}

export default App;
