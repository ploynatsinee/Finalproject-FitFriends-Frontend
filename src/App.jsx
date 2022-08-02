
import './App.scss'
import CommunityBox from './Component/MainPage/CommunityBox/CommunityBox'
import SideBar from './Component/MainPage/SideBar/SideBar'
import Useronline from './Component/MainPage/UserOnline/UserOnline'
import Navbar from './Component/Navbar/Navbar'
// import MainPage from './Component/MainPage/SideBar/MainPage'


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='main-session'>
        <div className='App-sidebar'>
          <SideBar />
        </div>
        {/* <MainPage/> */}
        <div className='feed'>
          < CommunityBox />
        </div>
        <div className='useronline'>
          <Useronline />
        </div>
      </div>


    </div>
  )
}

export default App

