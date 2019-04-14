import React, { Component } from 'react'
// import './css/login.css'
// import '../css/index.css'


export default class Register extends Component {
  render() {
    return (
        <div class="flex-wrap">
        <fieldset>
        <form id="login-form" action="" method="POST">
            <input className="item" id="username-txt" type="text" placeholder="username" name="username" autocomplete="off" required/>
            <input className="item" id="password-txt" type="password" placeholder="password" name="password" autocomplete="off" required />
            <button className="login-btn">CREATE ACCOUNT</button>
        </form>
        </fieldset>

        <div className="test-account">
        
            <p className="reg-text">Already have an account? <a href="/sign-in" >Login</a></p>
        </div>
    </div>
    )
  }
}
