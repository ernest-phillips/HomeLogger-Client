import React, { Component } from "react";
import AuthStatusBtn from './AuthStatusBtn'
import LogOutBtn from './LogOutBtn'

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  }
  

  render() {
    return (
      <div>
        <nav>
        <ul>
            <li> <a href="/">Home</a>   </li>
            <li> <a href="/story">Full Story</a> </li>
            <li>  <AuthStatusBtn /> </li>
            <li><LogOutBtn /></li>
          </ul>
          
        </nav>
      </div>
    );
  }
}

export default NavBar;
