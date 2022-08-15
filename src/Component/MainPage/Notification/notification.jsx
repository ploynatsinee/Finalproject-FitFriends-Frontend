import React from 'react'
import "./notification.scss"


const Notification = ({count}) => {
  if(count<= 0) {
    return undefined
  }
    return (
      <div className='notification'>
        <span className='circle-count'>{count}</span>
      </div>
    )
  }
  
  export default Notification