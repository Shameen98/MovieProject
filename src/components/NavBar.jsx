import { Link } from "react-router-dom";
import "../css/Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="navbar-name">
          🎬 ReelPicks
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/favorites" className="nav-link">
          FAVOURITES
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
