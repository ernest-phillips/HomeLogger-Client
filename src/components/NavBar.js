import React, { Component } from "react";
import AuthStatusBtn from './AuthStatusBtn'

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
          </ul>
          {this.state.active }
          <button type="button" onClick={this.handleClick}>Click</button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
