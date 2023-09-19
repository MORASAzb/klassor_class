
import "./track.css"

function Track() {    
  const tracks =[{name:"Sound name", duration: "0:15",tags:["Confused","excited","crowd","panic","slight",],genre:['Shocking', 'jumpscare']},{name:"Sound name", duration: "0:15",tags:["Confused","excited","crowd",],genre:['Shocking', 'jumpscare']},{name:"Sound name", duration: "0:15",tags:["crowd","panic","slight",],genre:['Shocking', 'jumpscare']},{name:"Sound name", duration: "0:15",tags:["Confused","excited","crowd","panic","slight",],genre:['Shocking', 'jumpscare']},{name:"Sound name", duration: "0:15",tags:["Confused","excited","crowd",],genre:['Shocking', 'jumpscare']},{name:"Sound name", duration: "0:15",tags:["crowd","panic","slight",],genre:['Shocking', 'jumpscare']},]  
  return (
    <>
      <h3 className="track-title">
        Best sound effects for youtube videos
      </h3>
      <ul className="category">
          <li>
            All  
          </li>
          <li>
            Jumpscare
          </li>
          <li>
              Mellow
          </li>
          <li>
              Happiness
          </li>
          <li>
              Ambience
          </li>
          <li>
              Zonk
          </li>
      </ul>
      <ul className="tracks">
      {tracks.map((track , index) => (
            <li className={index > 2 ? "track" : "track extra-track"} >
              <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 1">
                <circle id="Ellipse 3" cx="17" cy="17.5" r="17" fill="#CDD6F9"/>
                <path id="Vector 1" d="M13.5 23.4714V11.2463C13.5 10.8465 13.946 10.6084 14.2782 10.8308L22.8358 16.5614C23.1211 16.7524 23.1333 17.1675 22.8598 17.3751L14.3023 23.8697C13.973 24.1196 13.5 23.8847 13.5 23.4714Z" fill="#0432DF" stroke="#0432DF" stroke-width="3"/>
                </g>
              </svg>
              <div className="track-content">
                <h5>
                  {track.name}
                </h5>
                <label htmlFor="">
                  {track.duration}
                </label>
              </div>
              <div className="tags">
                {track.tags.join(', ')}
              </div>
              <div className="geners">
                {track.genre.join(', ')}
              </div>
              <ul className="actions">
                <svg className="like" width="24" height="23" viewBox="0 0 24 23" fill={[1,4].includes(index)? "red" :"none"}  xmlns="http://www.w3.org/2000/svg">
                  <g id="Group">
                  <path id="Vector" d="M3.01438 13.2892L3.01445 13.2892L3.022 13.2996C4.23031 14.9682 5.68532 16.4209 7.19634 17.7077L7.21329 17.7222L7.22959 17.7373C7.91961 18.3801 9.05028 19.3493 10.1078 20.1628C10.6373 20.5702 11.1325 20.9262 11.5355 21.1801C11.7302 21.3027 11.8888 21.3922 12.0096 21.4508C12.1442 21.3862 12.3258 21.2741 12.5599 21.098C12.7287 20.9711 12.8963 20.8336 13.0727 20.6887L13.0855 20.6782C13.2476 20.545 13.4262 20.3982 13.5947 20.2742C16.9223 17.7423 20.3382 14.7792 22.0494 11.6251C23.4556 8.62119 23.3553 5.13722 21.3984 3.06299C18.7489 0.700795 14.7835 1.18535 12.7893 3.64288L11.9924 4.62498L11.2206 3.62303C10.6874 2.93088 10.038 2.38743 9.2644 1.98606C6.01799 0.71216 2.74532 2.0299 1.40039 4.86755C0.45694 7.85569 1.25826 10.9287 3.01438 13.2892Z" stroke={[1,4].includes(index)? "none" :"#4C526A"} stroke-width="2"/>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                  <rect x="6" y="28.5" width="24" height="2" rx="1" fill="#4C526A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 8.5C19 7.94772 18.5523 7.5 18 7.5C17.4477 7.5 17 7.94772 17 8.5V21.3258L11.6508 16.7407C11.2315 16.3813 10.6002 16.4299 10.2408 16.8492C9.88134 17.2685 9.9299 17.8998 10.3492 18.2593L17.0889 24.0361C17.6132 24.4855 18.3868 24.4855 18.9111 24.0361L25.6508 18.2593C26.0701 17.8998 26.1187 17.2685 25.7593 16.8492C25.3999 16.4299 24.7686 16.3813 24.3492 16.7407L19 21.3258V8.5Z" fill="#4C526A"/>
                </svg>
                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="18.5" r="2" fill="#4C526A"/>
                  <circle cx="18" cy="18.5" r="2" fill="#4C526A"/>
                  <circle cx="25" cy="18.5" r="2" fill="#4C526A"/>
                </svg>
              </ul>
            </li>
          ))}
      </ul>
      <a className="see-more" href="#">See all sound effects</a>
    </>
  )
}

export default Track