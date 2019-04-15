import React, { Component } from 'react'

export default class NewPassageBox extends Component {
  render() {
    return (
      <div >
        <fieldset>
        <form action="/passages" method="POST">
            <textarea id="newPassage"className = "passage-entry" placeholder="Continue the story..."/>
            
            <input type="submit" value="submit" className="submit-pass" />
        </form>
        </fieldset>
      </div>
    )
  }
}
