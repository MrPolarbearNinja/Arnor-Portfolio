import style from "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header" style={style}>
      <Link to="/" className="site-title">
        <div className="header-content">
          <h1>Arnór Ingi Showreal</h1>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
          </nav>
        </div>
      </Link>
    </header>
  );
}

export default Header;
