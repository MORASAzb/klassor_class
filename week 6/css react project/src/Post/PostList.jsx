import './Post.css'
import PostInput from "./PostInput"
import ProfileInfo from '../Navbar/Profile/ProfileInfo'
import Post from "./Post.jsx"
import smithImg from "./public/1.png"
import stiveImg from "./public/3.png"

function PostList(prop) {
    const Posts = [{
        id:1,
        createdAt:'12:00',
        textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
        likes: "2.8K",
        commentsCount: 7,
        Creator :{
            nickname:"Smith jems",
            profileImg:smithImg
        }

    },{
        id:2,
        createdAt:'12:00',
        textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
        likes: "2.8K",
        commentsCount: 7,
        Creator :{
            nickname:"Smith jems",
            profileImg:smithImg
        },
        img:stiveImg

    },
    {
        id:3,
        createdAt:'12:00',
        textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
        likes: "2.8K",
        commentsCount: 7,
        Creator :{
            nickname:"Smith jems",
            profileImg:smithImg
        }

    },
    {
        id:4,
        createdAt:'12:00',
        textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
        likes: "2.8K",
        commentsCount: 7,
        Creator :{
            nickname:"Smith jems",
            profileImg:smithImg
        }
        ,
        img:stiveImg

    },
    {
        id:5,
        createdAt:'12:00',
        textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
        likes: "2.8K",
        commentsCount: 7,
        Creator :{
            nickname:"Smith jems",
            profileImg:smithImg
        }

    },]
    const profileimg = prop.profileimg

  return (
    <>
        <div className='posts-container' >
        {Posts.map((post)=>{
           return <Post key={post.id} post={post} profileimg={profileimg}/>
        })}
            
        </div>

    </>
  )
}

export default PostList