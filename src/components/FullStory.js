import React, { Component } from 'react'
import stories from './entries'
import StoryContent from './StoryContent'
function StoryStart () {
  return(
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )
}


export default class FullStory extends Component {
  constructor(){
    super()
    this.state={
      entries: stories
    }
  }
  render() {

    const newParagraph = this.state.entries.map(item => <StoryContent key={item.id} item={item}/>)
    return (
      <div className="full-story">
        <h1>Story Goes Here</h1>
        <StoryStart />
        {newParagraph}
      </div>
    )
  }
}
