import React from 'react'
import './SideBar.scss'
import Runningicon from './Runningicon.png'
import Joggingicon from './Joggingicon.png'
import Swimmingicon from './Swimmingicon.png'
import Yogaicon from './Yogaicon.png'
import Aerobicicon from './Aerobicicon.png'
import Strengthtrainningicon from './Strengthtrainningicon.png'
import Othersicon from './Othersicon.png'
import Addposticon from './Addposticon.png'
import {BrowserRouter as Router, Link } from 'react-router-dom';
import Notification from '../notification/notification'
import { useNavigate } from "react-router-dom";


const SideBar = () => {
 
    let navigate = useNavigate();
   
    function handleSubmit(event) {
      event.preventDefault();
      navigate("/Post", { replace: true });
    }
  return (
    // <Router>
    <div className='SideBar'>
      <button className='btn Runingicon'>running<Notification /></button>
      <button className='btn Joggingicon'>Jogging<Notification /></button>
      <button className='btn Swimmingicon'>Swimming<Notification /></button>
      <button className='btn Yogaicon'>Yoga<Notification /></button>
      <button className='btn Aerobicicon'>Aerobic<Notification /></button>
      <button className='btn Strengthtrainningicon'>Strengthtrainning<Notification /></button>
      <button className='btn Othersicon'>Others</button>
    
     <button onClick={handleSubmit} className='btn Addposticon'>Addpost</button>
      
    </div>
    // </Router>  
  )
}

export default SideBar