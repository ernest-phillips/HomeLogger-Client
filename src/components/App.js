import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./css/App.css";
import "./css/index.css";
import "./css/login.css";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import SignInForm from "./SignIn";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import FullStory from "./FullStory";
import { refreshAuthToken } from "../actions/auth";

import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <div className="Site">
          <NavBar />
          <Header />
          <main className="Site-content">
            <div className="inner-content">
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/sign-in" component={SignInForm} />
                <Route path="/story" component={FullStory} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
