import React from 'react';
import { Nav } from '../nav/Nav'
import BottomNav from '../bottomNav/BottomNav';
import niche from './img/niche.jpg';
import '../about/About.css';


const About = () => {
  return (
    <div>
        <Nav/>
        <div>
            <div className='about-us'>
            <h1>About Us</h1>
            <p>XOXO IS.... WHERE FUN MEETS FASHION & CLASS AT AFFORDABLE PRICES!</p>
            </div>
            <div className='niche'>
                <img src={niche} alt='niche' style={{width:'450px', height:'380px'}}/>
                <div>
                    <h1>OUR LITTLE NICHE</h1>
                    <p>Welcome to Xoxo, where fashion meets quality and affordability. Our brand was founded in 2020 with the aim of providing our customers with the latest fashion trends at accessible prices.</p>
                    <p>We believe that fashion should be fun, inclusive, and empowering. Our team is dedicated to creating a positive shopping experience for our customers, whether you're browsing our website or visiting us in-store.</p>
                </div>
            </div>
            <div className='flex-box'>
                <div className='box-1'>
                   <p><b>Our mission</b> is to make a difference through our branding by staying ahead of the fashion trends, defining style and giving customers what they want.</p>  
                </div>
                <div className='box-2'>
                   <p><b>Our vision</b> is to change the way our society connects with the fashion industry by providing our customers with products that are ethically and responsibly sourced.</p>
                </div>
            </div>
        </div>
        <BottomNav/>
    </div>
  )
}

export default About