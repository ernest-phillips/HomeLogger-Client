import React, { Component } from 'react'
import '../../src/login.scss'


export default class SignIn extends Component {
  render() {
    return (
        <div class="flex-wrap">
        <fieldset>
            <form action novalidate>
                <input type="radio" name="rg" id="sign-in" checked/>
                <input type="radio" name="rg" id="sign-up" />
                <input type="radio" name="rg" id="reset" />        
    
                <label for="sign-in">Sign in</label>
                <label for="sign-up">Sign up</label>
                <label for="reset">Reset</label>  
    
                <input className="sign-up sign-in reset" type="email" placeholder="Email" />
                <input className="sign-up sign-in" type="password" placeholder ="Password" />
                <input className="sign-up" type="password" placeholder ="Repeat Password" />
                <button>Submit</button>        
                
                
            </form>
        </fieldset>

        <div className="test-account">
            <p className="test-text">Test email: test@email.com</p>
            
            <p className="test-text">Password: password1</p>
        </div>
    </div>
    )
  }
}
