import './category.css'
import categoryImg from './public/935e0a50e0dacb0810567ba754330561.jfif'
 function Category() {
  const category = [{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},{name:"Musiacal",url:categoryImg},]

  return (
    <>
    <h3 className='category-title'>
      Brows by category
    </h3>
    <div className="category-container">
      {category.map((value)=>{
        return(
        <div className="category-image">
          <img src={value.url} alt={value.name} />
          <label htmlFor="">{value.name}</label>
          <div className="blur" ></div>
        </div>
        )
      })}
    </div>
    <a href=""className='see-more'>
      see all category
    </a> 

    </>
  )
}

export default Category
