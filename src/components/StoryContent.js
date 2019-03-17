import React from 'react'

export default  function StoryContent (props) {
  return (
    <div>
      <p className="paragraph">{props.item.content}</p>
    </div>
  )
}
