import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="header">
    <div className="header__titles">
      <h1>小作品集</h1>
    </div>
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        Home
      </Link>
      |
      <Link to="/entry/1" className="navigation__link">
        エントリー1
      </Link>
      |
      <Link to="/entry/2" className="navigation__link">
        エントリー2
      </Link>
      |
      <Link to="/entry/3" className="navigation__link">
        エントリー3
      </Link>
    </nav>
  </header>
);
