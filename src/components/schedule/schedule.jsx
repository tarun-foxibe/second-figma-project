import React from 'react'
import "./schedule.css";
import doc from '../../images/docs.png';
import tick from '../../images/tick.png';
const schedule = () => {
  return (
    <>
    <div className="schedule-container">
        <div className="doctors">
            <img src={doc} alt="docs" className="docs-img"/>
        </div>

        <div className="schedule-content">
            <p className="first-para">Make a Schedule</p>
            <h1>Make a schedule in advance<br/>
                with the available doctor
            </h1>
            <p className="second-para">Cpathlabs is a very painful process, especially if you’re not taking care<br/>
               of your health and having regular check-ups. HealhtyCarely makes it<br/>
               easier for everyone to schedule a doctor’s appointment.<br/>
            </p>
            <div className="tick-container">
                <div className="tick">
                    <img src={tick} alt="tick"/>
                    <p>Make a schedule online is easy</p>
                </div>
                <div className="tick">
                    <img src={tick} alt="tick"/>
                    <p>Easy to connect with nearest lab</p>
                </div>
            </div>
            <a href="#" className="btn violet">Make Schedule Now!</a>
        </div>
    </div>
    <div className="schedule-feedback">
        <h1>Our Patients feedback about us</h1>
        <p>their impression after using our services</p>
    </div>
    </>
  )
}

export default schedule