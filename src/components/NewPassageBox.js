//Changed to react-final-form https://final-form.org/docs/react-final-form/getting-started

import React, { Component } from "react";
// import {NewPassage} from '../actions/passages'
import { Field, reduxForm, focus } from "redux-form";
import axios from "axios";
import { API_BASE_URL } from "../config";

export class NewPassageBox extends Component {
  onSubmit(passage) {
    const { author, body } = passage;
    const newPassage = { author, body };
    const NewPassage = passage => dispatch => {
      return axios
        .post(`${API_BASE_URL}/passages`, {
          body: body,
          author: localStorage.getItem("username")
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    };

    console.log(newPassage);
    return this.props.dispatch(NewPassage(author, body));
  }
  render() {
    return (
      <div className="passage-box">
        
          <form
            
            onSubmit={this.props.handleSubmit(passage =>
              this.onSubmit(passage)
            )}
          >
            <Field
              name="body"
              component="input"
              type="text"
              className="passage-entry"
              placeholder="Continue the story..."
            />

            <input type="submit" value="submit" className="submit-pass" />
          </form>
        
      </div>
    );
  }
}

export default reduxForm({
  form: "newPassage",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("newPassage", Object.keys(errors)[0]))
})(NewPassageBox);
