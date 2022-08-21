import './MainPage.scss';
import React, { useState, useEffect } from 'react';
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


function MainPage() {
  const url = "http://localhost:3000"
  const [activitesGroup, setactivitesGroup] = useState([])
  const [filterActivity, setfilterActivity] = useState([])
  const [value, setValue] = React.useState(new Date());
  const newDate = value

  useEffect(() => {
    if (value === newDate) {console.log("äaa")
      axios.get(`${url}/activities`).then((res) => {
        setactivitesGroup(res.data)
        
      })
    } else {console.log("sssaa")
      const date = dateFormat(value,"yyyy-mm-dd")
      axios.get(`${url}/activities?${date}`).then((res) => {
        setactivitesGroup(res.data)
        
      })
      // axios.get(`${url}/activities`).then((res) => {
      //   setfilterActivity(res.data)
      // })
    }
  }, [value])

  
  console.log(value)
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // console.log("value",value.toLocaleString())
  // console.log("print", dateFormat(value,"yyyy-mm-dd"))
  return (
    <div className="MainPage">
      <div className='main-session'>
        <div className='App-sidebar'>
          <SideBar />
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