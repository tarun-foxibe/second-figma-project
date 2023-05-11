import React from 'react'
import "./header.css";
import none from '../../images/none.png';
import doctor from '../../images/doctor f.png';
const header = () => {
  return (
    <div className='wrapper'>
        <div className='main-header'>
            <div className='medical'>
                <h1>Medical Test Now<br/>
                    Simplified For <span>Everyone</span>
                 </h1>
                <p>it's important to take care of your health even if you<br/>
                   seem healthy.Stay healthy and fit.it's time to take<br/>
                   care of your health before it's too late
                </p>
                <a href='#' className='btn violet'>List of Tests Available</a>
            </div>

            <div className='hero-img'>
                <img src={none} alt='none' className='none'/>
                <img src={doctor} alt='none' className='docf'/>
            </div>

            <div className='login'>
                <h1>Log In Here</h1>
                <p>view all of your reports and scheduled health<br/>
                   exams in one location.
                </p>
                <form>
                    <div className='text-fields'>
                        <input type='text' placeholder='mobile/Email Id' className='text'/>
                        <input type='password' placeholder='password'  className='text'/>
                    </div>
                    <div className='form-links'>
                        <a href='#' className='forgot'>Forgot password</a>
                        <a href='#'>Register</a>
                    </div>
                    <a href='#' className='btn violet log-but'>login</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default header