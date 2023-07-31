import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faBook,
  faPlusSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Aside() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <a href="#">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
            alt="Logo"
          />
        </a>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Search</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span>
                <FontAwesomeIcon icon={faBook} />
              </span>
              <span>Your Library</span>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">
              <span>
                <FontAwesomeIcon icon={faPlusSquare} />
              </span>
              <span>Create Playlist</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
