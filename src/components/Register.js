import React, { Component } from "react";


export default class Register extends Component {
  onSubmit(values) {
    const { username, password} = values;
    const user = { username, password};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }
  render() {
    return (
      <div class="flex-wrap">
        <fieldset>
          <form id="login-form" action="" method="POST"
           onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}
          >
            <button className="login-btn">CREATE ACCOUNT</button>
          </form>
        </fieldset>

        <div className="test-account">
          <p className="reg-text">
            Already have an account? <a href="/sign-in">Login</a>
          </p>
        </div>
      </div>
    );
  }
}
