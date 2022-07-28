import React from 'react'
import './CommunityBox.scss'
import {Post} from './Post'

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
    </div>
  )
}

export default CommunityBox