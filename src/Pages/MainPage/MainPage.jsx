import './MainPage.scss';
import React, { useState, useEffect, useInsertionEffect } from 'react';
import CommunityBox from '../../Component/MainPage/CommunityBox/CommunityBox';
import SideBar from '../../Component/MainPage/SideBar/SideBar';
import Useronline from '../../Component/MainPage/UserOnline/UserOnline';
import { Link } from 'react-router-dom';
// import DatePicker from '../../Component/MainPage/Date/Date';
import Notification from '../../Component/MainPage/Notification/Notification'
import axios from "axios";
import dateFormat from 'dateformat';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { ConnectedTvOutlined } from '@mui/icons-material';


function MainPage() {
  const url = "http://localhost:3000"
  const [activitesGroup, setactivitesGroup] = useState([])
  const [value, setValue] = React.useState(new Date());
  const [click,setClick] = useState(false)
  const [numActivity,setNumActivity] = useState(0)
  useEffect(() => {
    if (click== false) {
      axios.get(`${url}/activities`).then((res) => {
        setactivitesGroup(res.data)
        
      })
    } else {
      const date = dateFormat(value,"yyyy-mm-dd")
      axios.get(`${url}/activities?date=${date}`).then((res) => {
        setactivitesGroup(res.data)
        
      })
     
    }
  }, [value])

  useEffect(()=>{
    if (numActivity===1){
      var sport = "running"
    }else if(numActivity===2){
      var sport = "jogging"
    } else if(numActivity===3){
      var sport = "swimming"
    } else if(numActivity===4){
      var sport = "yoga"
    }else if(numActivity===5){
      var sport = "aerobic"
    }else if(numActivity===6){
      var sport = "strengh"
    } else if(numActivity===7){
      var sport = "others"
    }
    axios.get(`${url}/activities/activity/${sport}`).then((res) => {
      setactivitesGroup(res.data)
      })
  },[numActivity])


  const groupActivity=(result)=>{
    setNumActivity(result)
    
  }
  console.log(value)
  const handleChange = async (newValue) => {
  setValue(newValue);
    setClick(true)
  }

  return (
    <div className="MainPage">
      <div className='main-session'>
        <div className='App-sidebar'>
          <SideBar groupActivity={groupActivity}/>
        </div>

        <div className='feed'>
          < CommunityBox activitesGroup={activitesGroup} />
        </div>
        <div className='useronline-date'>
          <div className='DatePicker'>
            {/* <DatePicker value={value} onChange={handleChange}/> */}
            <div className='DatePicker'>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3} >
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
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