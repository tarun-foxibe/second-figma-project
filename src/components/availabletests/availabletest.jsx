import React from 'react'
import "./availabletest.css";
import maskf from "../../images/Mask group f.png";
import maskm from "../../images/Mask group m.png";
const Availabledetails=[
    {
    image:maskf,
    name:"Dr.Adinda",
    role:"Eye Specialist ",
    },

    {
    image:maskm,
    name:"Dr.Jackson",
    role:"Ear Specialist ",
    },
]

const availabletest = () => {
  return (
    <>
    
    <div className='available-test-container'>
        <h1>Available Tests</h1>
        <p>Select Tests</p>
        <div className='available-card-item'>
            <ul>
                {Availabledetails.map(each =>(
                    <li>
                        <img src={each.image} alt='dna'/>
                        <div className="available-content">
                        <h1>{each.name}</h1>
                        <p>{each.role}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      <a href="#" className="btn violet">Find Labs</a>
    </div>
    
    </>
  )
}

export default availabletest