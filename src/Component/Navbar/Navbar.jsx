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
                        <a href="#home"><img src={logo} /></a>
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
                    <button><Link to='/login' style={{ textDecoration: 'none', color: 'black'  }}><a id='#' className="sign-in"><i class="fa-solid fa-right-to-bracket"></i>Sign in</a></Link></button>
                    <button><Link to='/Register' style={{ textDecoration: 'none', color: 'black'  }}><a id='#' className="sign-up"><i class="fa-solid fa-user-plus"></i>Sign up</a></Link></button>
                </div>
                <div className="nav-mobile">
                    <div className="toggle-bar">
                        <i class="fa-solid fa-bars" onClick={toggleMobile}></i>
                    </div>
                    <div className={tabMobile ? "tab-mobile active" : "tab-mobile"}>
                        <div className="container-mobile">
                            <div className="mobile-login-name">
                                <button onClick={toggleMobile}><Link to='/login'><i class="fa-solid fa-right-to-bracket"></i><a id='#' className="sign-in">Sign in</a></Link></button>
                                <button onClick={toggleMobile}><Link to='/Register'><i class="fa-solid fa-user-plus"></i><a id='#' className="sign-up">Sign up</a></Link></button>
                            </div>
                            <div className="mobile-ul">
                                <ul className="mobile-nav-ul">
                                    <li onClick={toggleMobile}>Community</li>
                                    <li onClick={toggleMobile}>Add Post</li>
                                    <li onClick={toggleMobile}>My Activities</li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

         {/* ===================================MEDIA QUERY========================================== */}

            <div className="Nav-mobile">
                <div className="logo-mobile">
                    <img src={logo} />
                </div>

                <div className="Nav-ui-mobile">
                    <div id="myLinks">
                        <li><a href="#Community" id='#community'><img src={community} alt="Community" /></a></li>
                        <li><a href="Workout" id='#workout'><img src={workout} alt="workout" /></a></li>
                        <li><a href="Recipes" id='#recipes'><img src={recipes} alt="recipes" /></a></li>
                        <li><a href="Goals" id='#goals'><img src={goals} alt="goals" /></a></li>


                        <div className="login-name-mobile">
                            <button><Link to='/login'><a href="#" id='#' className="sign-in">Sign in</a></Link></button>
                            <button><Link to='/Register'><a href="#" id='#' className="sign-up">Sign up</a></Link></button>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
};


export default Navbar