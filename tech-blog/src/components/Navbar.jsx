import React from "react";
import Link from "react-router-dom";
import styles from "Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navComponent}>
      <Link to='/'>Home</Link>
      <Link to='/blog'>Blog</Link>
      {/* <Link to='/'></Link>Add the logo svg */}
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};
export default Navbar;
