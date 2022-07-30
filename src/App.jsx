import { useState } from 'react'
import './App.css'
import CommunityBox from './Component/MainPage/CommunityBox/CommunityBox'
import SideBar from './Component/MainPage/SideBar/SideBar'
// import MainPage from './Component/MainPage/SideBar/MainPage'
import Navbar from './Component/MainPage/SideBar/Navbar'

function App() {

return (
  <div className="App">
    < CommunityBox />
    
      {/* <MainPage/> */}
      <Navbar/>
      <SideBar/>
  </div>
)
}

export default App

