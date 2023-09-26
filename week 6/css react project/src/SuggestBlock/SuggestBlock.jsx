import './SuggestBlock.css'

function SuggestBlock(prop) {
  const suggested = prop.suggested
    


  

  return (
    <>
    <div className='suggested-container'>
        <h5>
            {suggested.title}
        </h5>
        <ul>
            {suggested.list.map(
                (item ,index)=>{
                    return(
                    <li  key={index} >
                        <img src={item.imgURL} alt="" />
                        {item.name}
                    </li>)
                }
            )}
        </ul>
        <button onClick={prop.onClick}>
            View all
        </button>
    </div>
    </>
  )
}

export default SuggestBlock
