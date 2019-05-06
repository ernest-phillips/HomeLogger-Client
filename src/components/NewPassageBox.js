import React, { Component } from 'react'
import {NewPassage} from '../actions/passages'
import {Field, reduxForm, focus} from 'redux-form';

export class NewPassageBox extends Component {

  onSubmit(passage){
    const{author,body} = passage;
    const newPassage = {author,body}
    return this.props
      .dispatch(NewPassage(newPassage))
      
  }
  render() {
    return (
      <div >
        <fieldset>
        <form 
          className="passage-box"
          onSubmit={this.props.handleSubmit(passage =>
              this.onSubmit(passage)
            )}>
            <textarea 
            id="newPassage"
            className = "passage-entry" 
            placeholder="Continue the story..."/>
            
            <input 
            type="submit" 
            value="submit" 
            className="submit-pass" />
        </form>
        </fieldset>
      </div>
    )
  }
}
export default reduxForm({
  form: 'newPassage',
  onSubmitFail:(errors,dispatch) =>
  dispatch(focus('newPassage', Object.keys(errors)[0]))
})(NewPassageBox)