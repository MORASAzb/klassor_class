import { useState } from 'react'
import './Navbar.css'
import Profile from "./Profile/Profile.jsx"

function Navbar() {
    const menuList = [
        "Explore",
        "Community post",
        "Pages",
    ]

  return (
    <>
    <nav>
        <ul>
            {menuList.map((value)=>{
            return(
            <li className="category-image">
                {value}
            </li>
            )
            })}
        </ul>
        <div className="search">


        </div>
        <div className="profile">
            <Profile/>
        </div>
    </nav>
    </>
  )
}

export default Navbar
