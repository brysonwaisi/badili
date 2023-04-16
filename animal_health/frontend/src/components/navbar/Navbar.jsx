import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <a href="#" className="nav_item">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
      </a>
      <a href="#" className="nav_item">
        <Link to="/diseases" style={{ textDecoration: "none", color: "black" }}>
          Disease
        </Link>
      </a>
      <a href="#" className="nav_item">
        About Us
      </a>
    </div>
  );
};

export default Navbar;
