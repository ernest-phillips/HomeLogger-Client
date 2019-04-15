import React, { Component } from 'react'

class FormState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '',
                    password:''
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.username});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.username);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Username:
            <input 
            className="item" 
            id="username-txt" 
            type="text" 
            placeholder="username" 
            name="username" 
            value={this.state.username}
            onChange={this.handleChange}
             required/>
        </label>
        
        <label>
            Password:
            <input className="item" 
            id="password-txt" 
            type="password" 
            placeholder="password" 
            name="password" 
            value={this.state.password}
            onChange={this.handleChange}
            required />
        </label>
            
          
          {/* <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label> */}
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default FormState