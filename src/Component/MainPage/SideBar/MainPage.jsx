import React from 'react'
import Navbar from './Navbar' 
import SideBar from './SideBar'

const MainPage = () => {
  return (
    <React.Fragment>
        {/* heading section */}
        <section>
            <div>
                <Navbar/>
            </div>
        </section>

        {/* sidebar section */}
        <section>
          <div>
            <SideBar/>
          </div>
        </section>
    </React.Fragment>
  )
}

export default MainPage