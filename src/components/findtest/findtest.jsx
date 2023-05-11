import React from 'react'
import "./findtest.css";
import tick from '../../images/tick.png';
import male from '../../images/male doc.png';
import Availabletest from '../availabletests/availabletest';
const findtest = () => {
  return (
    <div className="find-test-container">
        <div className="find-test-content">
            <p className="first-para"> Find Test</p>
            <h1>With more than 80+ tests covered<br/>
                and reliable results, you can be<br/>
                sure that your health is in the best<br/>
                hands.
            </h1>
            <p className="second-para">
                With medical professionals in more than 100+ countries and a 98% customer <br/>
                satisfaction rate, Doctoralia offers reliable health information. With an extensive <br/>
                network of doctors, we are able to offer a wide range of high quality medical tests. <br/>
                What's more, our prices are up to 70% cheaper than other online providers.<br/>
            </p>
            <div className="tick-container">
                <div className="tick">
                    <img src={tick} alt="tick"/>
                    <p>100% free app designed to help you find the right test for you.</p>
                </div>
                <div className="tick">
                    <img src={tick} alt="tick"/>
                    <p>Available 900+ Labs with specialists</p>
                </div>
            </div>
            <a href="#" className="btn violet find-but">See the test details</a>
        </div>

        <div className="image-container">
            <div className="available-comp">
            <Availabletest/>
            </div>
            <img src={male} alt="male" className="male-doc"/>
        </div>

    </div>
  )
}

export default findtest