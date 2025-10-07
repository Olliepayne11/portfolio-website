import { Link } from "react-scroll";
import React from "react";

import logo from '../assets/favicon-footer.ico'
import github from '../assets/GitHub.png'
import linkedin from '../assets/linkedinlogo.png'
import facebook from '../assets/facebook-logo.png'
import instagram from '../assets/instagram.png'

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--image--container">
          <Link to="heroSection"
                offset={-70}
                duration={500}
                spy={true}
                smooth={true}
                className="navbar--content">
            <img src={logo} alt="Website Logo" width="50"/>
          </Link>
        </div>
        <div className="footer--items">
            <a href="https://github.com/Olliepayne11" target="_blank"><img src={github} alt="Github Logo" width="30"/></a>
            <a href="https://www.linkedin.com/in/oliver-payne-56038a157" target="_blank"><img src={linkedin} alt="Github Logo" width="30"/></a>
            <a href="https://www.facebook.com/oliver.payne.5458?locale=en_GB" target="_blank"><img src={facebook} alt="Github Logo" width="30"/></a>
            <a href="https://www.instagram.com/olliepayne11/" target="_blank"><img src={instagram} alt="Github Logo" width="30"/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;