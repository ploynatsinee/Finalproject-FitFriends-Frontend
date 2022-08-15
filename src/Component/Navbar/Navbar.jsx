import React from "react";
import './Navbar.scss';
import logo from './logo.png'
import community from './283-2836870_community-icon-transparent-background-png-download-transparent-transparent.png'
import workout from './illust58-5797-01.jpg'
import recipes from './2389105.png'
import goals from './png-clipart-arrow-target-practicing-board-cartoon-cartoon-target-miscellaneous-cartoon-character.png'
import { Link } from 'react-router-dom';


import { useState } from 'react'
import { color } from "@mui/system";
function Navbar() {
    const [tabMobile, setTabMobile] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const toggleMobile = () => {
        setTabMobile(!tabMobile)
    }
    const setNavBar = () => {

        if (window.scrollY >= 100) {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }
    window.addEventListener('scroll', setNavBar)
    return (
        <div>
            <div className={showNavbar ? 'Nav-content' : 'Nav-content hide'}>
                <div className="Nav-content1">
                    <div className="logo">
                    <Link to='/'><img src={logo} /></Link>
                    </div>
                </div>
                <div className="ul">
                    <ul className="Nav-ul">
                        <li><Link to='/' style={{ textDecoration: 'none', color: 'white'  }}>Community</Link></li>
                        <li><Link to='/Post' style={{ textDecoration: 'none', color: 'white'  }}>Add Post</Link></li>
                        <li><Link to='/ProfilePage' style={{ textDecoration: 'none' , color: 'white' }}>My Activities</Link></li>

                    </ul>
                </div>

                <div className="login-name">
                    <button><Link to='/login' style={{ textDecoration: 'none', color: 'black'  }}><i className="fa-solid fa-right-to-bracket sign-in"></i>Sign in</Link></button>
                    <button><Link to='/Register' style={{ textDecoration: 'none', color: 'black'  }}><i className="fa-solid fa-user-plus sign-up"></i>Sign up</Link></button>
                </div>
                <div className="nav-mobile">
                    <div className="toggle-bar">
                        <i className="fa-solid fa-bars" onClick={toggleMobile}></i>
                    </div>
                    <div className={tabMobile ? "tab-mobile active" : "tab-mobile"}>
                        <div className="container-mobile">
                            <div className="mobile-login-name">
                                <button onClick={toggleMobile}><Link to='/login'><i className="fa-solid fa-right-to-bracket sign-in"></i>Sign in</Link></button>
                                <button onClick={toggleMobile}><Link to='/Register'><i className="fa-solid fa-user-plus sign-up"></i>Sign up</Link></button>
                            </div>
                            <div className="mobile-ul">
                                <ul className="mobile-nav-ul">
                                    <li onClick={toggleMobile}><Link to='/' style={{ textDecoration: 'none', color: 'white'  }}>Community</Link></li>
                                    <li onClick={toggleMobile}><Link to='/Post' style={{ textDecoration: 'none', color: 'white'  }}>Add Post</Link></li>
                                    <li onClick={toggleMobile}><Link to='/Register' style={{ textDecoration: 'none', color: 'white'  }}>My Activities</Link></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            
        </div >

    )
};


export default Navbar