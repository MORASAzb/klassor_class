import './company.css'
import channels4 from "./public/channels4_profile 1.png"
import MrBeast from './public/MrBeast 1.png'
import netflix from './public/netflix 1.png'
import wbRemovebg from './public/wb-removebg-preview 1.png'
import pixar from './public/pixar-removebg-preview 1.png'
import dudeperfect from './public/dudeperfect 1.png'
import Pewdiepie from './public/Pewdiepie-logo 1.png'

 function Company() {


  return (
    <>
        <div className="company">
          <h2>
            Trusted by top Youtuber and Production House
          </h2>
          <ul className='logoes'>
              <li >
                <img src={channels4} alt="" />
              </li>
              <li >
                <img src={MrBeast} alt="" />
              </li>
              <li >
                <img src={Pewdiepie} alt="" />
              </li>
              <li >
                <img src={dudeperfect} alt="" />
              </li>
              <li className='span'>
                <img src={netflix} alt="" />
              </li>
              <li className='span'>
                <img src={pixar} alt="" />
              </li>
              <li >
                <img src={wbRemovebg} alt="" />
              </li>
          </ul>
        </div>
    </>
  )
}

export default Company
