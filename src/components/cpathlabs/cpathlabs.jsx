import React from 'react'
import "./cpathlabs.css";
import boy from '../../images/boy.png';
import google from '../../images/google.png';
import left from '../../images/coolicon left.png';
import right from '../../images/coolicon right.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cpathlabdetails=[
    {
        image:boy,
        para:  [
               {line1:"Cpathlabs gave me best service  ...home"},                              
               {line2:"collection  and with in time reports my"},
               {line3:"doctor is also told reports  are very accurate"},
               {line4:"..."},
               {line5:"Thanks Cpathlabs"},
               ],

        para2:"Naufal Hidayat",
        icon:google,
        arrow1:left,
        arrow2:right,
    },
     {
         image:boy,
            para:  [
                    {line1:"Cpathlabs gave me best service  ...home"},                              
                    {line2:"collection  and with in time reports my"},
                    {line3:"doctor is also told reports  are very accurate"},
                    {line4:"..."},
                    {line5:"Thanks Cpathlabs"},
                    ],

            para2:"Naufal Hidayat",
            icon:google,
            arrow1:left,
            arrow2:right,
     },
     {
         image:boy,
            para:  [
                {line1:"Cpathlabs gave me best service  ...home"},                              
                {line2:"collection  and with in time reports my"},
                {line3:"doctor is also told reports  are very accurate"},
                {line4:"..."},
                {line5:"Thanks Cpathlabs"},
                ],

            para2:"Naufal Hidayat",
            icon:google,
            arrow1:left,
            arrow2:right,
     },
     {
       image:boy,
            para:  [
                {line1:"Cpathlabs gave me best service  ...home"},                              
                {line2:"collection  and with in time reports my"},
                {line3:"doctor is also told reports  are very accurate"},
                {line4:"..."},
                {line5:"Thanks Cpathlabs"},
                ],

            para2:"Naufal Hidayat",
            icon:google,
            arrow1:left,
            arrow2:right,
    },
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
};


const cpathlabs = () => {
  return (
    
            <div className="cpath-main">

                <Slider {...settings}>


                  
                    {cpathlabdetails.map(each => (
                         <div className="cpathlab-container">
                                <div className="cpathlab-item">
                                    <div className="boy">
                                        <img src={each.image} alt="boy"/>
                                    </div>
                                    
                                    <div className="cpathlab-content">
                                        {each.para.map(each=>(
                                            <p className="first-para">
                                                {each.line1}
                                                {each.line2}
                                                {each.line3}
                                                {each.line4}
                                                {each.line5}
                                            </p>
                                        ))}
                                    
                                        <div className="icon">
                                            <p>{each.para2}</p>
                                            <img src={each.icon} alt="google"/>
                                        </div>
                                    </div>

                                    <div className="arrows">
                                        <img src={each.arrow1} alt="left" className="left"/>
                                        <img src={each.arrow2} alt="right"/>
                                    </div>
                                </div>
                           </div>
                        ))}
            
                 </Slider>
            </div>     
            
  );
}

export default cpathlabs