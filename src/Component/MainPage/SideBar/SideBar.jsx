import React, { useState } from 'react'
import './SideBar.scss'
import Runningicon from './Runningicon.png'
import Joggingicon from './Joggingicon.png'
import Swimmingicon from './Swimmingicon.png'
import Yogaicon from './Yogaicon.png'
import Aerobicicon from './Aerobicicon.png'
import Strengthtrainningicon from './Strengthtrainningicon.png'
import Othersicon from './Othersicon.png'
import Addposticon from './Addposticon.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Notification from '../Notification/Notification'
import { useNavigate } from "react-router-dom";


const SideBar = () => {

  let navigate = useNavigate();
  const runningNotiCount = 10
  const JoggingNotiCount = 0
  const SwimmingNotiCount = 2
  const YogaNotiCount = 0
  const AerobicNotiCount = 3
  const StrengthtrainningNotiCount = 30


  function handleSubmit(event) {
    event.preventDefault();
    navigate("/Post", { replace: true });
  }

  return (
    // <Router>
    <div className='SideBar'>
      <button className='btn Runingicon'>running<Notification count={runningNotiCount} /></button>
      <button className='btn Joggingicon'>Jogging<Notification count={JoggingNotiCount} /></button>
      <button className='btn Swimmingicon'>Swimming<Notification count={SwimmingNotiCount} /></button>
      <button className='btn Yogaicon'>Yoga<Notification count={YogaNotiCount} /></button>
      <button className='btn Aerobicicon'>Aerobic<Notification count={AerobicNotiCount} /></button>
      <button className='btn Strengthtrainningicon'>Strengthtrainning<Notification count={StrengthtrainningNotiCount} /></button>
      <button className='btn Othersicon'>Others</button>

      <button onClick={handleSubmit} className='btn Addposticon'>Addpost</button>

    </div>
    // </Router> 

  )
}

export default SideBar