import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar/Navbar.jsx"
function App() {

  return (
    <>
    <div className="main">
      <div className="left-bar">

      </div>
      <div className="main-content">
        <div className="nav">
          <Navbar/>
        </div>
        <div className='main-content-section'>
          <div className="left-side">
            <div className="stories">

            </div>
            <div className="create-post">

            </div>
            <div className="posts">
  
            </div>

          </div>
          <div className="right-side">

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
