import Fruit from "./Fruit.jsx"
import "./Fruits.css"


function Fruits(prop) {
    const fruits=[
        "Orange",
        "Apple"
          ]
    return(
        <>
        <div  className="fruits">
            { prop.fruits.map((fruit)=> < Fruit name={fruit}/>)}
        </div>
        </>
    )
}
export default Fruits