import { useState } from 'react'
import './App.css'
import CommunityBox from './Component/MainPage/CommunityBox/CommunityBox'
import SideBar from './Component/MainPage/SideBar/SideBar'
// import MainPage from './Component/MainPage/SideBar/MainPage'


function App() {

  return (
    <div className="App">
      
      <div className='main-session'>
        <div className='App-sidebar'>
          <SideBar />
        </div>
        {/* <MainPage/> */}
        <div className='feed'>
          < CommunityBox />
        </div>
        <div className='useronline'>

        </div>
      </div>


    </div>
  )
}

export default App

