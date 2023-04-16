import "./footer.css";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import twitter from "../../assets/twitter.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="socials">
          <img src={logo} alt="" />
          <p>&copy; Badili Innovations</p>
          <div className="social_media">
            <div></div>
            <img src={ig} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={fb} alt="facebook" />
          </div>
        </div>
        <div className="community_help">
          <ul>
            <h3>Community help</h3>
            <li>
              <a href="#" className="footer_links">
                Get Help
              </a>
            </li>
            <li>
              <a href="#" className="footer_links">
                Veterinary Consultant
              </a>
            </li>
          </ul>
        </div>
        <div className="about">
          <ul>
            <h3>About Us</h3>
            <li>
              <a href="#" className="footer_links">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="footer_links">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="footer_links">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
