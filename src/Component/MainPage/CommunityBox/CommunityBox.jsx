import React from 'react'
import './CommunityBox.scss'
import { Post } from './Post'

//import img
import womanavatar from './img/avatar.png'
import postImage from './img/garden.jpeg'

const CommunityBox = () => {
  return (
    <div className='box'>
      <Post
        key='1'
        profilePic={womanavatar}
        message='Running with my fam today!'
        timestamp='This is a timestamp'
        username='Natsinee'
        image={postImage}
      />
      <Post
        key='2'
        profilePic={womanavatar}
        message='Swimming with my sister today, so funnyyy ha ha ha ha ha ha!'
        timestamp='This is a timestamp'
        username='Mint'
      />
    </div>
  )
}

export default CommunityBox