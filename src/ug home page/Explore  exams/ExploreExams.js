import React from 'react'
// IMPORTING DTAT
import { ExploreData } from './ExploreData'
// IT WAS THE MAIN CSS FOR DEFUALT STYLES FOR H1 H4 SOME OF CHANGES ARE IN THIS CSS 
import '../../ug home page/Main.css'
// IT WAS THE EXPLOREDATA CSS 
import './ExploreExams.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Neet } from './Neet'

// IT WAS THE EXPLORE EXAM SECTION 
// THES SECTION AS TWO COMPONENTS 
// ONE WAS CSS AND DATA 
// YOU ARE IN THE EXPLORE MAIN COMPONENT
// CSS NAME ( ExploreData.css )
// DTAT COMPONENT NAME ( ExploreData.js )
// USING DTAT THROU ARRAY AND MAP FUNCTION

export const ExploreExams = () => {
  return (
    <div>
        <div className='explore-container container'>
            {/* SECTION OR COMPONENT TITEL */}
            <div className='explore-contantText'><h1>EXPLORE EXAMS</h1></div>
            {/* MAPING STARTS HEAR */}
            <div className='cards-container'>
                {ExploreData.map((item,index) => {
                    return(
                        <div key={index} className={item.cardContant}>
                          <Link to={'neet'}>
                            {/* DATA FROM HEAR */}
                                <div className='cardFlex' >
                                    {/* THES ARE IMAGES THROU ARAY IF YOU WHANT CHANGE THE IMAGE GO TO THE ExploreData COMPONENT AND CHENGE */}
                                    <div className='cardImg'><img width={180} height={150} src={item.IMGuRL}alt='' /></div>
                                     {/* THES ARE SUBJECT NAME HEARE THROU ARAY IF YOU WHANT CHANGE THE NAME GO TO THE ExploreData COMPONENT AND CHENGE */}
                                    <h4>{item.Title}</h4>
                                    <div className='CoursesTextIcons'>
                                        {/* ITS AN DIVE FOR ONLINE TEST SERIES AND ONLINE LIVE VIDEO CLASS */}
                                        <h5>{item.OnlineTestSeries} <i class="fa-solid fa-file-lines"></i></h5>
                                        <h5>{item.OLVClasses}<i class="fa-solid fa-tv"></i></h5>
                                        <h5>{item.ONLINE}</h5>
                                    </div>
                                </div>
                                </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
