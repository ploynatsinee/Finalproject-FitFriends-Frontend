import './MainPage.scss';
import CommunityBox from '../../Component/MainPage/CommunityBox/CommunityBox';
import SideBar from '../../Component/MainPage/SideBar/SideBar';
import Useronline from '../../Component/MainPage/UserOnline/UserOnline';
import { Link } from 'react-router-dom';

function MainPage() {

  return (
    <div className="MainPage">
      <Link to='/ProfilePage'><h1>Profile</h1></Link>
        <div className='main-session'>
            <div className='App-sidebar'>
                <SideBar />
            </div>

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

export default MainPage