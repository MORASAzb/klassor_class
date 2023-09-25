import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar/Navbar.jsx"
import StoryList from './Story/StoryList'
import profilePic from "./Story/public/1.png"
import CreatePost from './Post/CreatePost'
import profileimg from "./public/profilepic.png"
import PostList from "./Post/PostList"
function App() {
  const menuList = [
    {text:"Explore",link:"#"},
    {text:"Community post",link:"#"},
    {text:"Pages",link:"#"},
    ]
  const stories = [{
      profileURL: profilePic,
      username:"Esther Howard",
      id:"1",
      content:profilePic,
      seen:false,
  },{
      profileURL: profilePic,
      username:"Arlene McCoy",
      id:"2",
      content:profilePic,
      seen:false,
  },{
      profileURL: profilePic,
      username:"Robert Fox",
      id:"3",
      content:profilePic,
      seen:false,
  },{
      profileURL: profilePic,
      username:"Albert Flores",
      id:"4",
      content:profilePic,
      seen:false,
  },{
      profileURL: profilePic,
      username:"Annette Black",
      id:"5",
      content:profilePic,
      seen:false,
  }]  
  const profileInfo = {
    nickname:"Chandan S",
    username:"@uiuxchandan",
    profileimg:profileimg,
}

  const [selectedView,setSelectedView] = useState(0)
  function showStory(params) {
      console.log("ok")
  }
  function addStory(params) {
    
  }

  return (
    <>
    <div className="main">
      <div className="left-bar">

      </div>
      <div className="main-content">
        <div className="nav">
          <Navbar menuList={menuList} selectedView={selectedView} profileInfo={profileInfo}   setSelectedView={setSelectedView} />
        </div>
        <div className='main-content-section'>
          <div className="left-side">
            <div className="stories">
                <StoryList showStory={showStory} stories={stories} addStory={addStory}/>
            </div>

            <div className="posts">
              <div className="create-post">
                  <CreatePost profileimg={profileInfo.profileimg}/>
              </div>
              <PostList profileimg={profileInfo.profileimg} />



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
