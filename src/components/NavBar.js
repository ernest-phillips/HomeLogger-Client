import React from "react";
import AuthStatusBtn from './AuthStatusBtn'
import LogOutBtn from './LogOutBtn'

function NavBar () {
  
    return (
      <div>
        <nav>
        <ul>
            <li> <a href="/">Home</a>   </li>
            <li> <a href="/story">Full Story</a> </li>
            <li>  <AuthStatusBtn /> </li>
            <li>  <LogOutBtn /> </li>
          </ul>
          
        </nav>
      </div>

    )
      


}

export default NavBar;
