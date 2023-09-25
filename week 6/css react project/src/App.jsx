import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar/Navbar.jsx"
import StoryList from './Story/StoryList'
import profilePic from "./Story/public/1.png"
import CreatePost from './Post/CreatePost'
import profileimg from "./public/profilepic.png"
import PostList from "./Post/PostList"
import SuggestBlock from "./SuggestBlock/SuggestBlock.jsx"
import profileIcon1 from "./Story/public/3.png"
import Leftbar from "./Leftbar/Leftbar.jsx"
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
  const suggestedPages ={
    title:"Contacts",
    list:[
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},

    ]
    ,

  }
  const suggestedContacts ={
    title:"Suggested Contacts",
    list:[
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
        {name:"Bessie Cooper",imgURL:profileIcon1},
    ]
    ,

  }

  const [selectedView,setSelectedView] = useState(0)
  function showStory(params) {
      console.log("ok")
  }
  function addStory(params) {
    

  }
  function viewHandler(params) {
    console.loh("OK")
  }

  return (
    <>
    <div className="main">
      <div className="left-bar">
      <Leftbar/>

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
              <CreatePost  profileimg={profileInfo.profileimg}/>
              <PostList profileimg={profileInfo.profileimg} />
            </div>
          </div>
          <div className="right-side">
            <SuggestBlock key={suggestedContacts.title} suggested={suggestedContacts} onClick={viewHandler}/>
            <SuggestBlock  key={suggestedPages.title} suggested={suggestedPages} onClick={viewHandler}/>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
