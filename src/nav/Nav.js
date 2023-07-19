import {useRef} from 'react';
import { NavLink, Link } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi';
import {FaBars, FaTimes} from 'react-icons/fa';
import '../nav/Nav.css';
// import Collections from '../collections/Collections'

export const Nav = () => {
  const navRef = useRef();

  const showNav =() => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    <>
      <header>
        <h2 className='xoxo'>Xoxo.</h2>
        <NavLink ref={navRef} className='link'>
          <Link to='/collection' className='home'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact Us</Link>
          <button className='nav-btn'>
          <FiShoppingCart/>
        </button>
        <Link to='/login'>LOGIN</Link>
        <button onClick={showNav} className='fabars close-btn'>
         <FaTimes/>
        </button>
        </NavLink>
        <button onClick={showNav} className='fabars'>
          <FaBars/>
        </button>
      </header>
      {/* <Collections/> */}
    </>
  );
};
