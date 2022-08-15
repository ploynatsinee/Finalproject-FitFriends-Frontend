import './MainPage.scss';
import CommunityBox from '../../Component/MainPage/CommunityBox/CommunityBox';
import SideBar from '../../Component/MainPage/SideBar/SideBar';
import Useronline from '../../Component/MainPage/UserOnline/UserOnline';
import { Link } from 'react-router-dom';
import DatePicker from '../../Component/MainPage/Date/Date';
import Notification from '../../Component/MainPage/Notification/Notification'

function MainPage() {

  return (
    <div className="MainPage">
      <div className='main-session'>
        <div className='App-sidebar'>
          <SideBar />
          <Notification />
        </div>

        <div className='feed'>
          < CommunityBox />
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