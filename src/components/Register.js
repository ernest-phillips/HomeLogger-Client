import React, { Component } from "react";
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from './Input'

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class Register extends Component {
  onSubmit(values) {
    
    const { username, password, email} = values;
    const user = { username, password,email};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    
    return (
      
      <div className="flex-wrap">
        <fieldset>
          <form 
          className="login-form" 
           onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
        )}>
        <label htmlFor="email">E-mail</label>
        <Field 
          component={Input}
          type="email"
          name="email"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="username">Username</label>
        <Field 
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
        />        
        <label htmlFor="password">Password</label>
        <Field 
          component={Input}
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
        />

        <label>Confirm password</label>
        <Field 
          component={Input}
          type="password"
          name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]}
        />
            <button 
              className="login-btn"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}>                    
              CREATE ACCOUNT
            </button>
            
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

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0])),
      
})(Register);