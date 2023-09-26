import './Post.css'
import Post from "./Post.jsx"
import smithImg from "./public/1.png"
import stiveImg from "./public/3.png"

function PostList(prop) {
    const postsCategory=prop.postsCategory
    
    const Posts = [{
        id:1,
        createdAt:'12:00',
        textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
        likes: "2.8K",
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
        createdAt:'12:00',
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
            profileImg:smithImg
        }
        ,
        img:stiveImg,
        category:1,


    },
    {
        id:5,
        createdAt:'12:00',
        textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
        likes: "2.8K",
        commentsCount: 7,
        Creator :{
            nickname:"Hasan Maktob",
            profileImg:smithImg
        },
        category:2,

    },].filter((post => post.category == postsCategory ))
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