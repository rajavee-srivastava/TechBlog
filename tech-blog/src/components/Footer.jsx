import React from "react";
import footer_styles from "./Footer.module.css";
import social1 from "../images/facebook.png";
import social2 from "../images/ig.png";
import social3 from "../images/git.png";
import social4 from "../images/linkedin.png";
import social5 from "../images/twitter.png";

const Footer = () => {
  return (
    <footer className={footer_styles.layout}>
      <div className={footer_styles.icon}>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.1711 17.3374C15.7322 25.9053 8.67645 32.7306 0 32.8303V0.149414C8.67645 0.249167 15.7322 7.07437 16.1711 15.6422C16.6042 7.18732 23.481 0.429422 32 0.156889V32.8229C23.481 32.5504 16.6042 25.7924 16.1711 17.3374Z"
            fill="#3A2769"
          />
        </svg>
      </div>
      <div className={footer_styles.socials}>
        <div className={footer_styles.socialIcons}>
          <img src={social1} alt="facebook" className={footer_styles.sIcon} />
          <img src={social2} alt="ig" className={footer_styles.sIcon} />
          <img src={social3} alt="git" className={footer_styles.sIcon} />
          <img src={social4} alt="linkedin" className={footer_styles.sIcon} />
          <img src={social5} alt="twitter" className={footer_styles.sIcon} />
        </div>
        <div className={footer_styles.copyText}>
          © 2023 by Rajavee Srivastava
        </div>
      </div>
    </footer>
  );
};

export default Footer;
