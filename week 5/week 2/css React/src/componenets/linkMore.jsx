import './LinkMore.css'


 function LinkMore(text,link) {
  const category = [{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},{name:"Musiacal",url:"./public/935e0a50e0dacb0810567ba754330561.jfif"},]

  return (
    <>
      <a className='link-more' href={link}>
        {text}
      </a>

    </>
  )
}

export default LinkMore
