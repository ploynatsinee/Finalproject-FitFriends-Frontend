import React, { useState } from 'react';
import './SideBar.scss';
import Runningicon from './imgicon/Runningicon.png';
import Joggingicon from './imgicon/Joggingicon.png';
import Swimmingicon from './imgicon/Swimmingicon.png';
import Yogaicon from './imgicon/Yogaicon.png';
import Aerobicicon from './imgicon/Aerobicicon.png';
import Strengthtrainingicon from './imgicon/Strengthtrainingicon.png';

import Plusicon from './imgicon/Plusicon.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Notification from '../Notification/Notification';
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
     
      <button className='btn Runingicon'><img src={Runningicon}/>running<Notification count={runningNotiCount} /></button>
      <button className='btn Joggingicon'><img src={Joggingicon}/>Jogging<Notification count={JoggingNotiCount} /></button>
      <button className='btn Swimmingicon'><img src={Swimmingicon}/>Swimming<Notification count={SwimmingNotiCount} /></button>
      <button className='btn Yogaicon'><img src={Yogaicon}/>Yoga<Notification count={YogaNotiCount} /></button>
      <button className='btn Aerobicicon'><img src={Aerobicicon}/>Aerobic<Notification count={AerobicNotiCount} /></button>
      <button className='btn Strengthtrainningicon'><img src={Strengthtrainingicon}/>Strengh<Notification count={StrengthtrainningNotiCount} /></button>
      <button className='btn Othersicon'>Others</button>

      <button onClick={handleSubmit} className='btn Addposticon'><img src={Plusicon}/>Addpost</button>

    </div>
    // </Router> 

  )
}

export default SideBar
