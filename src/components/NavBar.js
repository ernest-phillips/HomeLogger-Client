import React, { Component } from "react";

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
            <li> <a href="/sign-in">Sign In</a>  </li>
          </ul>
          {this.state.active }
          <button type="button" onClick={this.handleClick}>Click</button>
        </nav>
      </div>
    );
  }
}

export default NavBar;
