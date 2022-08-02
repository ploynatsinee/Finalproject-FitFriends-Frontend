import React from "react";
import './Navbar.scss';
import logo from './logo.png'


function Navbar() {
    return (
        <div className="Nav-content">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="menu">
                <ul>
                    <li><a id='#'>Community</a></li>
                    <li><a id='#'>Workout Program</a></li>
                    <li><a id='#'>Recipes</a></li>
                    <li><a id='#'>Goals</a></li>
                </ul>
            </div>

            <div className="login-name">
                <button><a id='#' className="sign-in">Sign in</a></button>
                <button><a id='#' className="sign-up">Sign up</a></button>
            </div>


        </div>
    )
};


export default Navbar