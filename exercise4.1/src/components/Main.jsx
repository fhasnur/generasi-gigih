import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <main>
      <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="navbar">
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="spotify-playlists">
        <h2>All Songs</h2>
        <div className="list">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <h4>Todays Top Hits</h4>
            <p>The stars & colorful are on top of the...</p>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1621091211034-53136cc1eb32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <h4>RapCaviar</h4>
            <p>New Music from Lil Baby, Juice WRLD an...</p>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <h4>All out 2000s</h4>
            <p>The biggest spmgs pf tje 2000s. Cover:...</p>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1525121211281-e941dc8c5f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <h4>Pop classNameics</h4>
            <p>Pop Legends & epic songs that continue t...</p>
          </div>
        </div>
      </div>

      <div className="spotify-playlists">
        <h2>Your Favorite Playlists</h2>
        <div className="list">
          <div className="item">
            <img src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <h4>Peaceful Piano</h4>
            <p>Relax and indulge with beautiful piano pieces</p>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <h4>Deep Focus</h4>
            <p>Keep calm and focus with ambient and pos...</p>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1629172330068-82b6c74e3cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80" />
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <h4>Instrumental Study</h4>
            <p>Focus with soft study music in the...</p>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" />
            <div className="play">
              <span>
                <FontAwesomeIcon icon={faPlay} />
              </span>
            </div>
            <h4>chill lofi study beats</h4>
            <p>The perfect study beats, twenty four...</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
