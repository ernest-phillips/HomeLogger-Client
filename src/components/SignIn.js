import React, { Component } from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./Input";
import { login } from "../actions/auth";
import { required, nonEmpty } from "../validators";

export class SignIn extends Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }
  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div class="flex-wrap">
        <fieldset>
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}
            <Field
              component={Input}
              className="item"
              name="username"
              type="text"
              placeholder="username"
              validate={[required,nonEmpty]}
            />
            <Field
              component={Input}
              className="item"
              name="password"
              type="password"
              placeholder="password"              
              validate={[required,nonEmpty]}
            />
            <button className="login-btn">Sign</button>
          </form>
        </fieldset>

        <div className="test-account">
          <p className="test-text">Test email: test@email.com</p>

          <p className="test-text">Password: password1</p>
          <p className="reg-text">
            Not Registered? <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
}
export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
});
