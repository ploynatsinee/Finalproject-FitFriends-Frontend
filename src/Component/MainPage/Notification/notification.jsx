import React from 'react'
import "./notification.scss"


const Notification = ({count}) => {
    return (
      <div className='notification'>
        <span className='circle-count'>{count}1</span>
      </div>
    )
  }
  
  export default Notification