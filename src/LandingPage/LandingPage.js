import React from 'react'
import './LandingPage.css'
import { Footer } from '../ug home page/Footer/Footer.js'
import Logo from '../ug home page/images/browser-removebg-preview.png'
import Logo1 from './logo2.jpeg'


export const LandingPage = () => {
  return (

<div className='land'>
    <div className='landing-page container-landing'>
    <div className='Landing-Cantainer'>

<div className='welcomtext'>
    <div className='eWelcomTetx'>
    <img src={Logo1} width={123} alt=''  />
    <h1>WELCOMe TO eGRADTutor</h1>
  <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IITs/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready.</p>
    </div>
    <div className='log'>
      <img src={Logo} width={444} alt='logo image' />
    </div>
</div>

<div className='landing-cards'>

    <div className='ugCard'>
    <h3>UG COURSES</h3>
    <ul>
      <li>IIT-JEE(Mains & Advanced)</li>
      <li>NEET</li>
      <li>BITSAT</li>
      <li>VITEEE</li>
      <li>&OUTHER ENTRANCE EXAMS</li>
    </ul>
    </div>

    <div className='ugCard'>
    <h3>UG COURSES</h3>
    <ul>
      <li>IIT-JEE(Mains & Advanced)</li>
      <li>NEET</li>
      <li>BITSAT</li>
      <li>VITEEE</li>
      <li>&OUTHER ENTRANCE EXAMS</li>
    </ul>
    </div>

    <div className='ugCard'>
    <h3>UG COURSES</h3>
    <ul>
      <li>IIT-JEE(Mains & Advanced)</li>
      <li>NEET</li>
      <li>BITSAT</li>
      <li>VITEEE</li>
      <li>&OUTHER ENTRANCE EXAMS</li>
    </ul>
    </div>

    <div className='ugCard'>
    <h3>UG COURSES</h3>
    <ul>
      <li>IIT-JEE(Mains & Advanced)</li>
      <li>NEET</li>
      <li>BITSAT</li>
      <li>VITEEE</li>
      <li>&OUTHER ENTRANCE EXAMS</li>
    </ul>
    </div>


</div>

    </div>
    <div className='footerComponent'>
    {/* <Footer /> */}
    <Footer />

</div>
    </div>
</div>
  )
}

