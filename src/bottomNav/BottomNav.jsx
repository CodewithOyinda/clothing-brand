import React from 'react';
import '../bottomNav/BottomNav.css';
import {GrFacebook} from 'react-icons/gr';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import heart from './img/Heart.png';


const BottomNav = () => {
  return (
    <div className='container'>
        <div className='flex'>
          <div>
            <h2>Let's Keep in touch!</h2>
            <h3 className='find-us'>Find us on any of these platforms, we respond 1-2 business days.</h3>
            <div className='socials'>
             <GrFacebook style={{width:'25px', height:'25px'}}/><AiFillInstagram style={{width:'30px', height:'30px'}}/><AiFillTwitterSquare style={{width:'30px', height:'30px'}}/>
        </div>
         </div>
         <div>
            <h3 className='useful-links'>USEFUL LINKS</h3>
            <h3 className='info'>About Us</h3>
            <h3 className='info'>Contact Us</h3>
        </div>
        <div>
            <h3 className='useful-links'>OTHER RESOURCES</h3>
            <h3 className='info'>Terms & Conditions</h3>
            <h3 className='info'>Privacy Policy</h3>
        </div>  
        </div>
        <div className='copyright'><p>Copyright © 2023 Xoxo by Oyinda</p> <img src={heart} alt='heart' style={{width:'20px', height:'20px'}}/>.</div>
    </div>
  )
}

export default BottomNav