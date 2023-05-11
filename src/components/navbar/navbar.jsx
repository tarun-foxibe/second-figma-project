import React from 'react'
import "./navbar.css"
import logo from '../../images/logo.png';
import phno from '../../images/phno.png';
const navbar = () => {
  return (
    <div className='wrapper'>
        <nav>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>

            <div classNames='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Clinical Test</li>
                    <li>Knowledge Center</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className='phno'>
                <img src={phno} alt='phno'/>
            </div>
           
        </nav>
    </div>    
  )
}

export default navbar