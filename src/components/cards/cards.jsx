import React from 'react'
import "./cards.css";
import dna from '../../images/dna.png';
import leg from '../../images/leg.png';
import log from '../../images/log.png';
import bact from '../../images/bact.png';
import left from '../../images/left arr.png';
import right from '../../images/Ellipse 48.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const carddetails = [
    {
        image: dna,
        disease: "Disorder of Growth",
        role: "showing1-1 of 1 result for 'Disorder Of Growth' ",
    },

    {
        image: leg,
        disease: "Bone",
        role: "showing1-1 of 1 result for 'Bone' ",
    },

    {
        image: log,
        disease: "AIDS",
        role: "showing1-4 of 4 result for 'AIDS' ",
    },

    {
        image: bact,
        disease: "Allergy",
        role: "showing1-32 of 32 result for 'Allergy' ",
    },
    {
        image: bact,
        disease: "Allergy",
        role: "showing1-32 of 32 result for 'Allergy' ",
    },
    {
        image: bact,
        disease: "Allergy",
        role: "showing1-32 of 32 result for 'Allergy' ",
    },
    {
        image: bact,
        disease: "Allergy",
        role: "showing1-32 of 32 result for 'Allergy' ",
    },
    {
        image: bact,
        disease: "Allergy",
        role: "showing1-32 of 32 result for 'Allergy' ",
    }
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
};


const cards = () => {
    return (
        <>

            <div className='card-item-container'>
                {/* <img src={left} alt="left-arow" class="left-arr"/> */}
                <div className='card-item'>
                    <ul>
                        <Slider {...settings}>
                            {carddetails.map(each => (
                                <li className='card-item1'>
                                    <div className='inside-element'>

                                        <img src={each.image} alt='dna' />
                                        <h2>{each.disease}</h2>
                                        <p>{each.role}</p>
                                    </div>
                                </li>
                            ))}
                        </Slider>
                    </ul>
                </div>
                {/* <img src={right} alt="right-arow" class="right-arr"/> */}
            </div>

        </>
    )
}

export default cards