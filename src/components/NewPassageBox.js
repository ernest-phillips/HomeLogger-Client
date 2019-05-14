import React, { Component } from "react";
// import {NewPassage} from '../actions/passages'
// import { reduxForm, focus } from "redux-form";
// import axios from "axios";
// import {storeAuthInfo} from '../actions/auth'
import { API_BASE_URL } from "../config";

let author = localStorage.getItem('username')

export default class NewPassageBox extends Component {
    constructor(){
      super()
      this.state = {
        body:'',
        author: author
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      
    }
    
    handleSubmit(event){
      event.preventDefault();
      this.setState({
        body: event.target.id,
        
      })
      

      fetch(`${API_BASE_URL}/passages`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        author,
        
        
    })
        
      })
      .then(function(res){
        console.log(res)
        return res.json()
    })
    .then((function(myJson){
        console.log(JSON.stringify(myJson))
    }))
    
    
    // .then(console.log(user.username))
    }
  render() {
    return (
      <div>
        <fieldset>
          <form
            className="passage-box"
            onSubmit={this.handleSubmit}
            // onSubmit={this.props.handleSubmit(passage =>
            //   this.onSubmit(passage)
            // )}
          >
            <input
              id="body"
              name="body"
              type="text"
              className="passage-entry"
              placeholder="Continue the story..."
            />

            <input type="submit" value="submit" 
            className="submit-pass" />
          </form>
        </fieldset>
      </div>
    );
  }
}

