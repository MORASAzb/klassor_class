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
import smithImg from "./Post/public/1.png"

import stiveImg from "./Post/public/3.png"

function App() {
  const menuList = [
    {text:"Explore",link:"#"},
    {text:"Community post",link:"#"},
    {text:"Pages",link:"#"},
    ]
  const defaultStories = [{
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
      seen:true,
  },{
      profileURL: profileIcon1,
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
      profileURL: profileIcon1,
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
  const [stories,setStories] = useState(defaultStories.sort((a, b) => {
    if (a.seen && !b.seen) {
      return 1; 
    } else if (!a.seen && b.seen) {
      return -1; 
    } else {
      return 0; 
    }
  }))



  function showStory(id) {
    const idStory= id
    const newStories =  stories.map((story) => (story.id == String(idStory) ? { ...story, "seen": true } : story))
    setStories( [...newStories.sort((a, b) => {
      if (a.seen && !b.seen) {
        return 1; 
      } else if (!a.seen && b.seen) {
        return -1; 
      } else {
        return 0; 
      }
    })])
    const storyContent="Imagine this is Story u are watching !"
    alert(storyContent)
  }


    
  const defaultPosts = [{
      id:1,
      createdAt:'10:00',
      textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
      likes: "1.1K",
      commentsCount: 7,
      Creator :{
          nickname:"Nilofar Karami",
          profileImg:smithImg
      },
      category:0,

  },{
      id:2,
      createdAt:'12:00',
      textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
      likes: "2.8K",
      commentsCount: 7,
      Creator :{
          nickname:"Jamile Mojseni",
          profileImg:smithImg
      },
      img:stiveImg
      ,
      category:0,


  },
  {
      id:3,
      createdAt:'08:00',
      textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
      likes: "2.8K",
      commentsCount: 7,
      Creator :{
          nickname:"Zahra Khayieri",
          profileImg:smithImg
      },
      category:0,


  },
  {
      id:4,
      createdAt:'12:00',
      textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
      likes: "2.8K",
      commentsCount: 7,
      Creator :{
          nickname:"Poria Gol",
          profileImg:profileIcon1
      }
      ,
      img:stiveImg,
      category:1,


  },
  {
      id:5,
      createdAt:'06:00',
      textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
      likes: "3.2K",
      commentsCount: 7,
      Creator :{
          nickname:"Hasan Maktob",
          profileImg:smithImg
      },
      category:2,

  },]


  const [posts,setPost] = useState(defaultPosts)

  const viewPosts = posts.filter((post => post.category == selectedView ))

  function addStory(params) {
    

  }
  function viewHandler(params) {
    console.loh("OK")
  }



  function createPost(post) {

    setPost(
      [
        post,
        ...posts,
        
      ]
    )

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
              <CreatePost  profileimg={profileInfo.profileimg} createPost={createPost}/>
              <PostList profileimg={profileInfo.profileimg} viewPosts={viewPosts} />
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
