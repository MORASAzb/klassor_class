import React from 'react';
import './Leftbar.css';
import activityImg from "./public/activity.png";
import homeImg from "./public/home-2.png";
import saveImg from "./public/save-2.png";
import messageImg from "./public/message-text.png";
import userImg from "./public/user-square.png";

function Leftbar(prop) {
    const menuList = [
        {
            name: "Home",
            Img: homeImg
        },
        {
            name: "Messages",
            Img: messageImg
        },
        {
            name: "Profile",
            Img: userImg
        },
        {
            name: "Saved post",
            Img: saveImg
        },
        {
            name: "Marketplace",
            Img: activityImg
        },
    ];

    return (
        <>
            <div className="leftbar-container">
                <div className="social-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="20" viewBox="0 0 34 20" fill="none">
                        <ellipse cx="9.91667" cy="10" rx="9.91667" ry="10" fill="#4361EE"/>
                        <ellipse cx="28.3333" cy="10" rx="5.66667" ry="5.71429" fill="#899DFC"/>
                    </svg>
                    My Social
                    <ul>
                    {menuList.map((item, index) => (
                        <li key={index}>
                            <img src={item.Img} alt={item.name} />
                            {item.name}
                        </li>
                    ))}
                </ul>
                </div>

                <div className="download">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="20" viewBox="0 0 34 20" fill="none">
                        <ellipse cx="9.91667" cy="10" rx="9.91667" ry="10" fill="#4361EE"/>
                        <ellipse cx="28.3333" cy="10" rx="5.66667" ry="5.71429" fill="#899DFC"/>
                    </svg>

                    <p>
                        Stay updated with the Socially mobile app
                    </p>
                    <a href="#">
                        Download Now
                    </a>


                </div>
                
            </div>
        </>
    );
}

export default Leftbar;