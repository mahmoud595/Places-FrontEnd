import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">
            Add place
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
