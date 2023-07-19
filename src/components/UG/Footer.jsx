import React from 'react'
import { FooterData } from './FooterData'
import './Footer.css'


export const Footer = () => {
  return (
    <div className='footer-container footerBg'>
        <footer className='footer'>
            {FooterData.map((footerItem,footerIndex) => {
                return(
                    <div key={footerIndex} className={footerItem.footerCLass}>
                        <h4 className={footerItem.footerCs}>{footerItem.fotterTitles}</h4>
                        <p>{footerItem.text}</p>

                        <ul>
                         <li>{footerItem.home}</li>
                         <li>{footerItem.about}</li>
                         <li>{footerItem.career}{footerItem.icon}</li>  
                        </ul>
                    </div>
                )
            })}
        </footer>
        <div className='container footer-linkss' style={{textAlign: 'center',borderTop: '1px solid #fff', paddingTop: '10px', color: '#fff'}}> <p style={{margin: '0 auto'}}>Copyright © 2023 eGradTutor All rights reserved</p>
        {/* <div className='linkIcons' style={{display: 'flex', }}>
          <div className='bgIconLink'>
          <i class="fa-brands fa-facebook"></i>
          </div>

          <div className='bgIconLink'>
          <i class="fa-brands fa-instagram"></i>          
          </div>

          <div className='bgIconLink'>
          <i class="fa-brands fa-linkedin"></i>
          </div>

          <div className='bgIconLink'>
          <i class="fa-brands fa-youtube"></i>          
          </div>
        </div> */}
        </div>
    </div>
  )
}
export default Footer;