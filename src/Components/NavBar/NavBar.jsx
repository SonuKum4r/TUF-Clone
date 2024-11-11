import React, { useEffect, useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import './NavBar.css'
import LoginForm from './Login';
const Navbar = ({handleHamburger}) => {
  const [show, setShow] = useState(false);
  const [darkbtn, setdarkbtn] = useState(true);
  const [dark, setDark] = useState('light-theme');
  const toggletheme = () => {
    if (dark === 'dark-theme') {
      setDark('light-theme');
      setdarkbtn(false);
    }
    else {
      setDark('dark-theme');
      setdarkbtn(true);
    }
  }
  useEffect(() => {
    document.body.className = dark;
  }, [dark]);

  return (

    <div>
      <div className="navbar-content">
        <div className="navbar">
          <div className='hamburger-icon' onClick={handleHamburger}>
          <RxHamburgerMenu/>
                </div>
          <div className='item-content'>
            <a target='blank' href='https://www.preplaced.in/?utm_source=striver_website&utm_medium=inf&utm_campaign=page_home&utm_content=website_cta&utm_term=striver_website' className="navbar-button mentorship">Get 1:1 Mentorship</a>
            <button onClick={() => toggletheme()} className="light-button theme-toggle">
              {
                darkbtn ? <MdSunny /> : <IoMoon/> 
              }
            </button>
            <button onClick={() => setShow(true)} className="navbar-button login">Login</button>
          </div>
          {
            show && <LoginForm setShow={setShow} />
          }
        </div>
      </div>
    </div>

  )
}

export default Navbar
