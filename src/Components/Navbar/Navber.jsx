import React from 'react';
import './Navbar.css';
import {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Loginpage from '../../Pages/Login/Login.jsx';



const Navber = () => {

    const [active,setActive] = useState("nav__menu");
    const [toggleIcon, settoggleIcon] = useState("nav__toggler");

    const navToggle = () =>{

        active === "nav__menu"
        ? setActive("nav__menu nav__active")
        : setActive("nav__menu")

        // toggle icon
    toggleIcon === "nav__toggler"
    ?settoggleIcon("nav__toggler toggle")
    :settoggleIcon("nav__toggler")

    };

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (  

    <div className={`nav ${scrolling ? 'scrolling' : ''}`}>
        <div className= 'nav__logo'>
            <p className= {`nav__logop ${scrolling ? 'scrolling' : ''}`}>Logo</p>
        </div>
        <div className='content'>
            <ul className={active}>
                <li className={`nav__items ${scrolling ? 'scrolling' : ''}`}><Link to='/' className='link'>Home</Link></li>
                <li className={`nav__items ${scrolling ? 'scrolling' : ''}`}>About</li>
                <li className={`nav__items ${scrolling ? 'scrolling' : ''}`}>Contact US</li>
                <li className='nav__buts'><Link to='login'><button className='btna'>Sign Up / Login</button></Link></li>
            </ul>
        </div>
        <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </div>
  )
}

export default Navber;