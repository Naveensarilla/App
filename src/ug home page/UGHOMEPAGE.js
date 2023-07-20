import { Component } from "react";
import { Link } from "react-router-dom";
import { UgNaveList } from "./UgNaveList";
import './Navbar.css';
import { About } from "./About";
import Logo from './images/logo2.jpeg'
import { UgHomePage } from "../egard MAIN page/UG PAGES/UgHomePage";
import { Banner } from "./Banners";
import { ExploreExams } from "./Explore  exams/ExploreExams";
import { OurCourses } from "./OUR COURSES/OurCourses";
import { ContactsPage } from "./Countact/ContactsPage";
import { Footer } from "./Footer/Footer";
import { Faq } from "./demoFaq/faq";

// hash linke changes
import { HashLink } from "react-router-hash-link";
import { useState } from "react";


class UGHOMEPAGE extends Component{

    state = {clicked: false}
    hadleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render(){
        const IdErr =() =>{
            const arr=[
              { home: '/',
                about: '#about',
                contact:'#contact'
            }

            ]
        }


        // color theme hear---------------------------------
        // const setdarkMode = () => {
        //     document.querySelector('body').setAttribute('data-theme', 'dark')
        //     localStorage.setItem('selecterTheme', 'dark')
        // };
        
        // const setdarkLight = () => {
        //     document.querySelector('body').setAttribute('data-theme', 'light')
        //     localStorage.setItem('selecterTheme', 'light')
        // };
        // const selecterTheme = localStorage.getItem('selecterTheme');
        // if(selecterTheme === 'dark') {
        //     setdarkMode();
        // }
        // setdarkMode()
        // const toggleTheme = (e) => {
        //     if (e.target.checked) setdarkMode();
        //     else setdarkLight();
        
        // };
        
        // --------------------------------------------------

        return(
            <div className="contanttttt">
                <nav className="navbarItems navbar-contant">

                {/* color theme------------------------ */}
                {/* <input className='dark-mode-input' defaultChecked={selecterTheme === 'dark'} type='checkbox' id='darmode-toggle'  onChange={toggleTheme}/> */}
                {/* color theme-------------------------- */}
                    <img src={Logo} width={200} alt=""/>
                    {/* mobail-icons */}
                    <div className='menu-icons' onClick={this.hadleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                      
                    </div>

                    {/* nav-list and icons */}
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {UgNaveList.map((item,index) =>{
                            return(
                                <li key={index}>
                                    
                                    {/* <Link className={item.cNmae} to={item.url}> 
                                    <i ></i>{item.title }</Link> */}

                                {/* hash lisnk changes */}
                                <HashLink to={item.url} className={item.cNmae}>{item.title}</HashLink>

                                </li>
                            )
                        })}
                        
                    </ul>
                </nav>


               <div style={{marginTop: '5rem'}}>
               <div style={{marginBottom: '1rem'}}>
                <marquee ><img src="images.html/orange-and-blue-update-uuoxy0bmznjnamgg.gif" alt="" class="new" />All tests will be LIVE according to the detailed schedule given. Do not confuse to the Total No. of tests in the test cards while buying as they show the number of tests LIVE at the moment..</marquee>
                </div>
                <div className="carousal-container">
                <UgHomePage/>
                </div>

                </div>
                {/* <Banner /> */}

                <div id="about">
                     <About />
                </div>

                <div id="exam">
                    <ExploreExams />
                </div>

                <div id="courses">
                    <OurCourses />
                </div>

                <div id="contact">
                    <ContactsPage />    
                </div>

                <div id="faq">
                    <Faq />
                </div>

                <div id="login">
                    <Footer />
                </div>


                {/* hash link  */}

               
            </div>
        )
    }
}
export default UGHOMEPAGE;


