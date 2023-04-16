import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Navbar = () => {
  const { i18n, t } = useTranslation(["common"]);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("i18nextLng", selectedLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && savedLang.length > 1) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <div className="navbar">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <ul className="nav_item">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            to="/diseases"
            style={{ textDecoration: "none", color: "black" }}
          >
            {t("disease")}
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            {t("about us")}
          </Link>
        </li>
      </ul>
      <div className="nav_item">
        <select
          onChange={handleLanguageChange}
          value={localStorage.getItem("i18nextLng")}
        >
          <option value="en">English</option>
          <option value="sw">Swahili</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
