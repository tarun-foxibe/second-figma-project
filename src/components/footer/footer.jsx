import React from 'react'
import "./footer.css";
import fb from '../../images/facebook.png';
import insta from '../../images/instagram.png';
import twit from '../../images/twit.png';
const footer = () => {
  return (
    <div className="footer-container">
        <p>
        Made With Love By FlyingStars Informatics All Right Reserved 
        </p>
        <div class="soc-icons">
            <ul>
                <li><img src={fb} alt="fb"/></li>    
                <li><img src={insta} alt="fb"/></li> 
                <li><img src={twit} alt="fb"/></li> 
            </ul>
        </div>
    </div>
  )
}

export default footer