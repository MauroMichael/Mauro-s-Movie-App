import "./NavBar.css";
import Search from "./Search";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <h1 className="app-name">Mauro's Movie App</h1>
      </Link>
      <div className="navbar-contents">
        <Link to="/favorites" className="about-link">
          <button type='button' className="navbar-favorites">Favorites</button>
        </Link>
        <Search />
        <Link to="/about" className="about-link">
          <button type='button' className="navbar-about">About</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
