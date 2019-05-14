import React, { Component } from "react";
// import {NewPassage} from '../actions/passages'
import { reduxForm, focus } from "redux-form";
import axios from "axios";
// import {storeAuthInfo} from '../actions/auth'
import { API_BASE_URL } from "../config";

export default class NewPassageBox extends Component {
    constructor(){
      super()
      this.state = {
        body:''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event){
      event.preventDefault();
      this.setState({
        body: event.target.value
      })
      const data = new FormData(event.target);
      console.log(data)

      fetch(`${API_BASE_URL}/passages`,{
        method: 'POST',
        body: this.body,
        
      })
      .then(function(res){
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