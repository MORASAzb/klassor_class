import './Story.css'



function Story(prop) {
    function showStory(event) {
        const storyId = event.currentTarget.getAttribute('storyId');
        prop.onClick(storyId)
    }
    const story= prop.story
    return (

        <>
        <div className="story">
            <img src={prop.profileURL} storyId={prop.storyID} onClick={showStory}className= {prop.seen == false ? "seen-story" : ""} />
            <p>{prop.username}</p>
        </div>
        </>
    )
}
export default Story