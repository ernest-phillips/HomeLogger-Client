import React, { Component } from 'react'
// import './css/login.css'
// import '../index.css'


export default class SignIn extends Component {
  render() {
    return (
        <div class="flex-wrap">
        <fieldset>
        <form id="login-form" action="" method="POST">
            <input className="item" id="username-txt" type="text" placeholder="username" name="username" autocomplete="off" required/>
            <input className="item" id="password-txt" type="password" placeholder="password" name="password" autocomplete="off" required />
            <button className="login-btn">Sign</button>
        </form>
        </fieldset>

        <div className="test-account">
            <p className="test-text">Test email: test@email.com</p>
            
            <p className="test-text">Password: password1</p>
            <p className="reg-text">Not Registered? <a href="/register" >Sign Up</a></p>
        </div>
    </div>
    )
  }
}
