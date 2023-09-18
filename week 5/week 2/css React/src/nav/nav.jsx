import React, { useState, useEffect, useRef } from 'react';
import Logo from "../logo/Logo.jsx"
import "./nav.css"

function Nav() {
  const menuLinks =[{text:"Home", link: "#"},{text:"Best for Youtube", link: "#"},{text:"Category", link: "#"},{text:"Upgrade", link: "#"},{text:"FAQ", link: "#"}]  
  return (
    <>
      <nav className='nav-nav' >
        <div className='nav-logo'>
            < Logo />
        </div>
        <ul>
          {menuLinks.map((link) => (
            <li >
              <a href={link.link} className={link.text == "Home" ? "active": ""}>{link.text}</a>
            </li>
          ))}
        </ul>
        <button>
            Login
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="16" width="24" height="1.92" rx="0.96" fill="#EEEEEE"/>
          <rect x="12" y="23.04" width="24" height="1.92" rx="0.96" fill="#EEEEEE"/>
          <rect x="12" y="30.08" width="24" height="1.92" rx="0.96" fill="#EEEEEE"/>
        </svg>
      </nav>
    </>
  )
}

export default Nav