import './Post.css'


function PostInput(prop) {
  const  profileimg=prop.profileimg
  const placeholder=prop.placeholder
  return (
    <>
            <div className='createpost-content'>
                <img src={profileimg}  />
                <input type="text" placeholder={placeholder} />
            </div>


    </>
  )
}

export default PostInput