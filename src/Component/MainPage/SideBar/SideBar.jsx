import React, { useState ,useEffect} from 'react';
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
import axios from "axios";



const SideBar = () => {
  const url = "http://localhost:3000"
  const [runningNotiCount, setrunningNotiCount] = useState(0)
  const [JoggingNotiCount, setJoggingNotiCount] = useState(0)
  const [SwimmingNotiCount, setSwimmingNotiCount] = useState(0)
  const [YogaNotiCount, setYogaNotiCount] = useState(0)
  const [AerobicNotiCount, setAerobicNotiCount] = useState(0)
  const [StrengthtrainningNotiCount, setStrengthtrainningNotiCount] = useState(0)
  const [OthersNotiCount, setOthersNotiCount] = useState(0)
  useEffect(() => {
    
    axios.get(`${url}/activities/activity_types/running`).then((res) => {
      setrunningNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/jogging`).then((res) => {
      setJoggingNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/swimming`).then((res) => {
      setSwimmingNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/yoga`).then((res) => {
      setYogaNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/aerobic`).then((res) => {
      setAerobicNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/strength`).then((res) => {
      setStrengthtrainningNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/others`).then((res) => {
      setOthersNotiCount(res.data)
    })
  },[])


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
      <button className='btn Othersicon'>Others<Notification count={OthersNotiCount} /></button>

      <button onClick={handleSubmit} className='btn Addposticon'><img src={Plusicon}/>Addpost</button>

    </div>
    // </Router> 

  )
}

export default SideBar
