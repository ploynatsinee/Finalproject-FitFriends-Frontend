
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
     
      <BrowserRouter>
        <Navbar />
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

