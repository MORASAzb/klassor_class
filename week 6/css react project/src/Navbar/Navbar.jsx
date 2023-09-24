import './Navbar.css'
import Profile from "./Profile/Profile.jsx"
import SearchInput from './SearchInput/SearchInput'
function Navbar(prop) {
    const menuList = prop.menuList
    const profileInfo = prop.profileInfo
    function selectView(event) {
        prop.setSelectedView(event.target.value) 
    }
  return (
    <>
    <nav>
        <ul>
            {menuList.map((value,index)=>{
            return(
            <li key={index} onClick={selectView} value={index} className= {index== prop.selectedView ? "selected-view" : ""}>
                    {value.text}
            </li>
            )
            })}
        </ul>
        <div className="search">
            <SearchInput />
        </div>
        <div className="profile">
            <Profile profileInfo={profileInfo} />
        </div>
    </nav>
    </>
  )
}

export default Navbar
