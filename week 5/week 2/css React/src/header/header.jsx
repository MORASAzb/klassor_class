import { useState } from 'react'
import "./header.css"

 function Header() {
  

  return (
    <>
        <h1>
          Free download sound effects without copyright
        </h1>
        <p>
        Download free copyright sound effect for your YouTube video and any use.
        </p>
        <div className='input-labeled'>
          <input type="text" placeholder='Search sound effects'/>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_208_15)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.435 7.34313C16.3877 9.29575 16.3877 12.4616 14.435 14.4142C12.4824 16.3668 9.31658 16.3668 7.36396 14.4142C5.41134 12.4616 5.41134 9.29575 7.36396 7.34313C9.31658 5.39051 12.4824 5.39051 14.435 7.34313ZM16.5062 15.0712C18.5618 12.3294 18.3428 8.42251 15.8492 5.92891C13.1156 3.19524 8.68342 3.19524 5.94975 5.92891C3.21608 8.66258 3.21608 13.0947 5.94975 15.8284C8.44334 18.322 12.3502 18.541 15.092 16.4854L18.6777 20.0711C19.0682 20.4616 19.7014 20.4616 20.0919 20.0711C20.4824 19.6805 20.4824 19.0474 20.0919 18.6568L16.5062 15.0712Z" fill="#4F5261"/>
            </g>
            <defs>
              <clipPath id="clip0_208_15">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <label htmlFor="">Try keyword: happy, funny, natural, horror, jumpscare and more</label>
        </div>
        <div className='recomendation'>
          <p>650.654 Available Sounds. Library Updated Weekly. <small><a href="#">See popular sounds</a></small></p>
        </div>
    </>
  )
}

export default Header
