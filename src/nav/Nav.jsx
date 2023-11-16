import React, {useRef} from 'react';
import '../nav/Nav.css';
import { Link } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi';
import {FaBars, FaTimes} from 'react-icons/fa';



const Nav = () => {

    const navRef = useRef();

    const showNav =() => {
      navRef.current.classList.toggle('responsive_nav')
    }

  return (
    <div className='header'>
        <div className='link'>
            <ul>
                <li>
                    <h2 className='xoxo'>Xoxo.</h2>
                </li>
                <div className='navs' ref={navRef}>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li>
                    <Link to='/cart' className='nav-btn'><FiShoppingCart/></Link>
                </li>
                <li>
                <Link to='/login'>LOGIN</Link>
                </li>
                <button onClick={showNav} className='fabars close-btn'>
                <FaTimes/>
               </button>
               
                </div>
                <button onClick={showNav} className='fabars'>
               <FaBars/>
              </button>
           </ul>
            
           
        </div>
    </div>
  )
}

export default Nav