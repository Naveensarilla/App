import React from 'react'
import { FooterContant } from './FooterContant'
import { Link } from 'react-router-dom'
// import '../egard MAIN page/images/Ug'
import './footer.css'


export const Footer = () => {
  return (
    <div className='footer-contant' style={{}}>
        {FooterContant.map((footerItem,fotterIndex) => {
            return(
                <ul key={fotterIndex} style={{width: '25%',gap: '1rem', padding: '2rem'}}  className='footer-ul' >
                    <li>{footerItem.aboutEgrad}</li>
                    <li>{footerItem.permalinks}</li>
                    <li><a>{footerItem.tHome}</a></li>
                    <li>{footerItem.About}</li>
                    <li>{footerItem.career}</li>
                    <li>{footerItem.CountactUs}</li>

                
                    <li>{footerItem.Policy}</li>
                    <li>{footerItem.Terms}</li>
                    <li>{footerItem.PrivacyPolicy}</li>
                 

                
                    <li>{footerItem.Addres}</li>
                    <li>{footerItem.phoneNumber}</li>
                    <li>{footerItem.fb}</li>
                    <li>{footerItem.inst}</li>
                    <li>{footerItem.in}</li>
                    <li>{footerItem.youtube}</li>
                    
                </ul>
                
            )
        })}
    </div>
  )
}
