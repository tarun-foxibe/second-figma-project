import React from 'react'
import "./details.css";
import call from '../../images/call.png';
import loc from '../../images/loc.png';
import msg from '../../images/messge.png';
const alldetails=[
    
    {
        heading:"Company info",
        p1:"About Us",
        p2:"Carrier",
        p3:"We are hiring",
        p4:"Blog",
        p5:"Blog",
    },
    {
        heading:"Features",
        p1:"Business Marketing",
        p2:"User Analytic",
        p3:"User Analytic",
        p4:"Live chat",
        p5:"Unlimited support",
    },
    {
        heading:"Legal",
        p1:"About Us",
        p2:"Carrier",
        p3:"We are hiring",
        p4:"We are hiring",
        p5:"Blog",
    },
    {
        heading:"Fee",
        p1:"IOS & Android",
        p2:"Watch a Demo",
        p3:"Customers",
        p4:"Customers",
        p5:"API",
    },
    {
        heading:"Resources",
        p1:"IOS & Android",
        p2:"Watch a Demo",
        p3:"Customers",
        p4:"Customers",
        p5:"API",
    },
    {
        heading:"Resources",
        p1:"IOS & Android",
        p2:"Watch a Demo",
        p3:"Customers",
        p4:"Customers",
        p5:"API",
    },
    {
        heading:"Resources",
        p1:"IOS & Android",
        p2:"Watch a Demo",
        p3:"Customers",
        p4:"Customers",
        p5:"API",
    }

]


const details = () => {
  return (
    <>
    <div className="details-container">
        <div className='details-item'>
            <ul>
                {alldetails.map(each=>(
                    <li>
                        <h2>{each.heading}</h2>
                        <p>{each.p1}</p>
                        <p>{each.p2}</p>
                        <p>{each.p3}</p>
                        <p>{each.p4}</p>
                        <p>{each.p5}</p>
                    </li>
                ))}
                 <li>
                    <h2>Get in Touch</h2>
                    <div className="icons">
                        <img src={call} alt="phno"/>
                        <p>+91 9100993399</p>
                    </div>  
                    <div className="icons">
                        <img src={loc} alt="phno" className="phno"/>
                        <p>KK Plaza, 5th Floor,<br/>
                        Plot No.450 & 476,<br/>
                        100 Feet Road,Ayyappa Society,<br/>
                        Madhapur, Hyderabad,
                        </p>
                    </div>
                    <div className="icons">
                        <img src={msg} alt="phno"/>
                        <p>info@cpathlabs.com</p>
                    </div>
                </li>
                {/* <div className='details-item'> */}
            
               
            </ul>
        </div>
           
        </div>
    </>
  )
}

export default details