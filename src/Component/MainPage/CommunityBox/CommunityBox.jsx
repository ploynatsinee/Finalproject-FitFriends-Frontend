import React from 'react'
import './CommunityBox.scss'
import Post from './Post'

const CommunityBox = () => {
  return (
    <div className='box'>
      <Post 
                key='1'
                profilePic={arif}
                message='Running with my fam today!'
                timestamp='This is a timestamp'
                username='Natsinee'
                image={postImage}
            />
    </div>
  )
}

export default CommunityBox