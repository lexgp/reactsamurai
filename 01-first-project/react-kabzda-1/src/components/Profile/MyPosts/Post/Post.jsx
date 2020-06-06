import React from 'react'
import s from './Post.module.css'

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://fogsoft.com/wp-content/uploads/2017/07/user-logo.png"></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post