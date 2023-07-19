import React from 'react';
import {Link} from "react-router-dom"
import './App.css';
import logo from './logo2.jpeg';
import logoo from './logo image.jpg'
import  Footer  from './components/UG/Footer';
// import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <>
    <div className="navcontainer">
      <div className="navbar">
        <img src={logo} className='logo' alt=""/></div>
        <div className='heading'>
        <h3>...tutoring by grads from IIT/IISc</h3>
      </div>
    
      <div className='logoo'>
       <img src={logoo} className='logoo' alt=""/></div>

      <div className="row">
      <div className="col1">
        {/* <img src={image} alt="" /> */}
      <h1>Welcome to eGRADTutor</h1>
        <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IITs/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready.</p>
       {/* <button type="button">Login</button> */}
   </div>
    </div>
               
<div className='landing-cards'>
<div className='ugCard'>
  <Link to={"/home"}>
<h3>UG COURSES</h3>
<ul>
  <li>IIT-JEE(Mains & Advanced)</li>
  <li>NEET</li>
  <li>BITSAT</li>
  <li>VITEEE</li>
  <li>&OUTHER ENTRANCE EXAMS</li>
</ul>
</Link>
</div>

<div className='ugCard'>
<Link to={"/"}>
<h3>UG COURSES</h3>
<ul>
  <li>IIT-JEE(Mains & Advanced)</li>
  <li>NEET</li>
  <li>BITSAT</li>
  <li>VITEEE</li>
  <li>&OUTHER ENTRANCE EXAMS</li>
</ul>
</Link>
</div>

<div className='ugCard'>
<Link to={"/"}>
<h3>UG COURSES</h3>
<ul>
  <li>IIT-JEE(Mains & Advanced)</li>
  <li>NEET</li>
  <li>BITSAT</li>
  <li>VITEEE</li>
  <li>&OUTHER ENTRANCE EXAMS</li>
</ul>
</Link>
</div>

<div className='ugCard'>
<Link to={"/"}>
<h3>UG COURSES</h3>
<ul>
  <li>IIT-JEE(Mains & Advanced)</li>
  <li>NEET</li>
  <li>BITSAT</li>
  <li>VITEEE</li>
  <li>&OUTHER ENTRANCE EXAMS</li>
</ul>
</Link>
</div>
</div>
</div>



    </>
  );
};

export default Landingpage;
