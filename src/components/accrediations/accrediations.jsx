import React from 'react'
import "./accrediations.css";
import nabl from '../../images/nabl.png';
import cap from '../../images/cap.png';
import kenas from '../../images/kenas.png';
import labs from '../../images/lab img.png';
const accrediations = () => {
  return (
    <div className="accrediation-container">
        <div className="accrediation-content">
            <div className="head">
                <h1>Accrediation</h1>
                <p>their impression after using our services</p>
            </div>

            <div className="logos-container">
                <img src={nabl} alt="nabl"/>
                <img src={cap} alt="nabl"/>
                <img src={kenas} alt="nabl"/>
            </div>
        </div>

        <div className="labs-container">
            <img src={labs} alt="labs" className="labs"/>
        </div>
    </div>
  )
}

export default accrediations