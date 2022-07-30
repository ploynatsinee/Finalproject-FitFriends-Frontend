import { useState } from 'react'
import './App.css'
import CommunityBox from './Component/MainPage/CommunityBox/CommunityBox'
import SideBar from './Component/MainPage/SideBar/SideBar'
import MainPage from './Component/MainPage/SideBar/MainPage'
import Navbar from './Component/MainPage/SideBar/Navbar'

function App() {
  const [count, setCount] = useState(0)

return (
  <div className="App">
    {/* < CommunityBox />
    <React.Fragment> */}
      {/* <MainPage/> */}
      <Navbar/>
      <SideBar/>
  </div>
)
}

export default App

