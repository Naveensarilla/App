import React from 'react'
import { Link } from 'react-router-dom'
import Landingpage from '../../Landingpage'
import logo from '../../logo.png'
const Header = () => {
  return (
    <header>



    <div className='navlogo'>
        <Link to={"/"} element={<Landingpage />}><img src={logo} alt="" /></Link>


    </div>

    <nav className='navbar'>
        <ul>

            < a href="#home" >Home</ a >
            <a href="#about" >About</a>
            <a href="#exam">Exams</a>
            <a href="#course">Courses</a>
            <a href="#contact">Contact</a>
            <a href="#Faq">FAQs</a>


        </ul>
    </nav>
    <div className='login-btn'>
        <button><Link to={"/"}>Login/Registration</Link></button>
    </div>



</header>
  )
}

export default Header;