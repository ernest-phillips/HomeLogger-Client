import React from 'react';
import ReactDOM from 'react-dom';

function LogoutBtn(){
    return <a href="/">Sign Out</a>
}
function LoginBtn(){
    return <a href="/sign-in">Sign In</a>
}

export default function AuthStatus (props) 
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <LogoutBtn />;
    }
    return <LoginBtn />;
  }
  
  
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={true} />,
    document.getElementById('root')
  );