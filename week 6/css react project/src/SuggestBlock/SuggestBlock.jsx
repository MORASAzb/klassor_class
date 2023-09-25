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
                (item)=>{
                    return(
                    <li>
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
