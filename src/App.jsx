
import './App.scss'
import CommunityBox from './Component/MainPage/CommunityBox/CommunityBox'
import SideBar from './Component/MainPage/SideBar/SideBar'
import Useronline from './Component/MainPage/UserOnline/UserOnline'
import Navbar from './Component/Navbar/Navbar'
// import MainPage from './Component/MainPage/SideBar/MainPage'
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MainPage from './Pages/MainPage/MainPage';
import { Post } from './Pages/Post/Post';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {

  return (
    <div className="App">
      {/* <Navbar />
      <div className='main-session'>
         <div className='App-sidebar'>
           <SideBar />
        </div> */}
        {/* <MainPage/> */}
        {/* <div className='feed'>
           < CommunityBox />
         </div>
         <div className='useronline'>
           <Useronline />
         </div>
       </div>  */}
      <BrowserRouter>
        <Navbar />
        {/* นอก tag Routes คือการใส่ทุกหน้า */}
        <Routes>
          <Route path='/' element= {<MainPage />} />
          <Route path='/Register' element= {<Register />} />
          <Route path='/Login' element= {<Login />} />
          <Route path='/Post' element= {<Post />} />
          <Route path='/ProfilePage' element= {<ProfilePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

