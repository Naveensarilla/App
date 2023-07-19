import React from 'react'
import Win from './images/win.png'
import exam from './images/exam.png'


import onlineCourses from './images/onlineCourses.png'
import education from './images/education.png'

import Vistion from './images/ourvision.png'
import Mission from './images/mission.png'
export const AboutItems = [
    {
        aboutIMG: [Win],
        classAboutImg: 'win'
    },
    {
        aboutIMG: [education],
        classAboutImg: 'education'
    },
    {
        aboutIMG: [exam],
        classAboutImg: 'exam'
    },
    {
        aboutIMG: [onlineCourses],
        classAboutImg: 'onlineCourses'
    },
]

export const AboutVisionMission =[
    {
        vision: [Vistion],
        Title: 'Our Vision',
        Ptext: 'Our vision is to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country.',
        Values: 'Values:',
        Points1: 'We believe in constant innovation and development.',
        Points2: 'We act with integrity and humility.',
        Points3: 'We work with energy and curiosity.',
        Points4: 'We seek growth and equal opportunity.',
        vistionMisstion: 'vision-contant',
        contantClass: 'contant',
        imageClass: 'vistionMoissionClass',
        contantClassForUl: 'Ul-list'
    },
    {
        vision: [Mission],
        Title: 'Our Mission',
        Ptext: 'Our mission is to be the most accessible and affordable online education provider in the country. ',
        Values: 'We intend to build a virtual knowledge pool that strengthens the students and thereby strengthens the country in the journey towards growth and innovation.',
        vistionMisstion: 'mission-contant',
        contantClass: 'contant',
        imageClass: 'vistionMoissionClass',
        contantClassForUl: 'Ul-list2'
    }

]