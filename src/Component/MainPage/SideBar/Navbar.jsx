import React from 'react'
import './Navbar.scss'
import logo from './logo.png'


const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={logo} alt="logo" ></img>
      <nav>
                <ul>
                    <li>
                        <a href="/#Community">Community</a>
                    </li>
                    <li>
                        <a href="/#WorkoutProgram">WorkoutProgram</a>
                    </li>
                    <li>
                        <a href="/#Recipes">Recipes</a>
                    </li>
                    <li>
                        <a href="/#Goal">Goal</a>
                    </li>
                </ul>
            </nav>
        </div>
    
  )
}

export default Navbar