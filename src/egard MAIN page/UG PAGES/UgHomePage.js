import React from 'react'
import {Carousel, carousel} from "react-responsive-carousel"
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import Banner from './images/AP-EAPCET-.png'
import Banner2 from './images/ALLCOURSES.png'
import Banner3 from './images/AP-EAPCET-banner.png'
import './UgHomePage.css'

export const UgHomePage = () => {
  return (
    <div>
       <Carousel 
        autoPlay
        infiniteLoop 
        interval={3000}
        showThumbs={false}
        dot={false}
        control-dots={false} showIndicators={false}> 

        <div>
            <img src={Banner}  height={400} alt='banner1' />
        </div>     

        <div>
            <img src={Banner2} height={400} alt='banner1' />
        </div>     

        <div>
            <img src={Banner3} height={400} alt='banner1' />
        </div>     
         
            </Carousel>
       
        </div>
  
  )
}
