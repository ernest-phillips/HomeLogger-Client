import React from 'react'

export default  function StoryContent (props) {
  return (
    <div className="post-add">
      <p className="paragraph">{props.item.content}</p>
    <div className="like-sect">
        <img src="C:\Users\ernes\Desktop\Coding\Capstone\community-story\public\images\heart.png" alt="heart"></img>
        <p className="like-text">Likes</p>
        <p>{props.item.author}</p>
    </div>
    </div>
  )
}
