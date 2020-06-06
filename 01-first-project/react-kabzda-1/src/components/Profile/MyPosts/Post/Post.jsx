import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  const { message } = props
  return (
    <div className={s.item}>
      <img src="https://fogsoft.com/wp-content/uploads/2017/07/user-logo.png"></img>
      {message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post