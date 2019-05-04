import React from 'react';
// import ReactDOM from 'react-dom';

function LogoutBtn(){
    return <a href="/">Sign Out</a>
}
function LoginBtn(){
    return <a href="/sign-in">Sign In</a>
}

export default function AuthStatusBtn (props) 
   { // const isLoggedIn = props.isLoggedIn;
    if (props.loggedIn) {
      return <LogoutBtn />;
    }
    return <LoginBtn />;
  }
  
  
  
  
  
  
  
  // ReactDOM.render(
  //   // Try changing to isLoggedIn={true}:
  //   <Greeting isLoggedIn={true} />,
  //   document.getElementById('root')
  // );