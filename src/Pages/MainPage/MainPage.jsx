import './MainPage.scss';
import React, { useState ,useEffect} from 'react';
import CommunityBox from '../../Component/MainPage/CommunityBox/CommunityBox';
import SideBar from '../../Component/MainPage/SideBar/SideBar';
import Useronline from '../../Component/MainPage/UserOnline/UserOnline';
import { Link } from 'react-router-dom';
import DatePicker from '../../Component/MainPage/Date/Date';
import Notification from '../../Component/MainPage/Notification/Notification'
import axios from "axios";

function MainPage() {
const url = "http://localhost:3000"
 const [activitesGroup, setactivitesGroup] = useState([])
  
  useEffect(() => {
    axios.get(`${url}/activities`).then((res) => {
      setactivitesGroup(res.data)
    })
    
  },[])

  console.log(activitesGroup)

  return (
    <div className="MainPage">
      <div className='main-session'>
        <div className='App-sidebar'>
          <SideBar />
        </div>

        <div className='feed'>
          < CommunityBox activitesGroup = {activitesGroup}/>
        </div>
        <div className='useronline-date'>
          <div className='DatePicker'>
            <DatePicker />
          </div>


          <div className='useronline'>
            <Useronline />
            
          </div>
        </div>


      </div>
    </div>
  )
}

export default MainPage