import React from "react";
import nav_styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={nav_styles.Navbar}>
        <Link to="/" className={nav_styles.nav_text}>
          Home
        </Link>
        <Link to="/blogs" className={nav_styles.nav_text}>
          Blogs
        </Link>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
          >
            <g clipPath="url(#clip0_28_99)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 0C16.0228 0 20.5 4.47715 20.5 10V0H30.5C36.0228 0 40.5 4.47715 40.5 10C40.5 15.5228 36.0228 20 30.5 20C36.0228 20 40.5 24.4772 40.5 30C40.5 32.7423 39.3961 35.2268 37.6085 37.0334L37.5711 37.0711L37.5379 37.1041C35.7309 38.8943 33.2446 40 30.5 40C27.7741 40 25.3029 38.9093 23.499 37.1405C23.4756 37.1175 23.4522 37.0943 23.4289 37.0711C23.407 37.0492 23.3852 37.0272 23.3635 37.0051C21.5924 35.2009 20.5 32.728 20.5 30C20.5 35.5228 16.0228 40 10.5 40C4.97715 40 0.5 35.5228 0.5 30V20H10.5C4.97715 20 0.5 15.5228 0.5 10C0.5 4.47715 4.97715 0 10.5 0ZM18.5 10C18.5 14.4183 14.9183 18 10.5 18V2C14.9183 2 18.5 5.58172 18.5 10ZM38.5 30C38.5 25.5817 34.9183 22 30.5 22C26.0817 22 22.5 25.5817 22.5 30H38.5ZM2.5 22V30C2.5 34.4183 6.08172 38 10.5 38C14.9183 38 18.5 34.4183 18.5 30V22H2.5ZM22.5 18V2H30.5C34.9183 2 38.5 5.58172 38.5 10C38.5 14.4183 34.9183 18 30.5 18H22.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_28_99">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link to="/projects" className={nav_styles.nav_text}>
          Projects
        </Link>
        <Link to="/contact" className={nav_styles.nav_text}>
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
