import React, { Component } from "react";
// import {NewPassage} from '../actions/passages'
import { reduxForm, focus } from "redux-form";
import axios from "axios";
import { API_BASE_URL } from "../config";

export class NewPassageBox extends Component {
  onSubmit(passage) {
    const { author, body } = passage;
    const newPassage = { author, body };
    const NewPassage = passage => dispatch => {
      return (
        axios.post(`${API_BASE_URL}/passages`, {
          body:body,
          author:author
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        }))
        
    };

    console.log(newPassage)
    return this.props.dispatch(NewPassage(author,body));

  }
  render() {
    return (
      <div>
        <fieldset>
          <form
            className="passage-box"
            onSubmit={this.props.handleSubmit(passage =>
              this.onSubmit(passage)
            )}
          >
            <textarea
              id="body"
              name="body"
              className="passage-entry"
              placeholder="Continue the story..."
            />

            <input type="submit" value="submit" className="submit-pass" />
          </form>
        </fieldset>
      </div>
    );
  }
}

export default reduxForm({
  form: "newPassage",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("newPassage", Object.keys(errors)[0]))
})(NewPassageBox);
