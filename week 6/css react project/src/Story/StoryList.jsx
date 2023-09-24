import './StoryList.css'
import Story from "./Story/Story.jsx"
import AddStoryPic from "./public/2.png"



function StoryList(prop) {
    const stories =prop.stories

    return (
        <>
        <div className="stories-container">
            <ul >
                <li >
                    <Story key={0} onClick={prop.addStory} profileURL={AddStoryPic} username={"Add Story"} seen={true} />
                </li>
                {stories.map((value)=>{
                    return(
                            <li >
                                <Story key={value.id} onClick={prop.showStory} profileURL={value.profileURL} username={value.username} seen={value.seen} />
                            </li>
                            )
                                    })}
            </ul>
        </div>
        </>
    )
}
export default StoryList