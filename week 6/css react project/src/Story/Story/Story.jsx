import './Story.css'



function Story(prop) {
    return (
        <>
        <div className="story">
            <img src={prop.profileURL} onClick={prop.onClick}className= {prop.seen == false ? "seen-story" : ""} />
            <p>{prop.username}</p>
        </div>
        </>
    )
}
export default Story