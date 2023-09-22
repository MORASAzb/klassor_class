import "./fruit.css"
function Fruit(prop) {
    return(
        <>
        <div className="fruit">
        {prop.name}
        </div>
       
        </>
    )
    
}
export default Fruit