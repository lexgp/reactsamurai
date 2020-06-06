import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/28866/4d8f322c-f6d0-45ae-bf75-d694394150f6/s1200?webp=false"></img>
      </div>
      <div>
        <img src="https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png"></img>
        ava + desc
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile
