import React from "react";
import Navbar from "../components/Navbar";
import SubsCard from "../components/SubsCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className={styles.hero_bg}>
        <div className={styles.hero_text}>
          <div className={styles.hero_title}>Welcome to Stacked!</div>
          <div className={styles.hero_subtext}>
            Unlock the power of exceptional web development and discover the
            limitless possibilities for your digital presence.
          </div>
        </div>
      </div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.home_text1}>
          <h2>Where Creativity meets Technical Expertise ...</h2>
          <div className={styles.home_text_cont}>
            <p>
              At Stacked, we believe in the transformative power of web
              development. Our team of skilled professionals specializes in
              creating unique digital experiences that leave a lasting
              impression. With an unwavering dedication to innovation and a
              commitment to excellence,
            </p>
            <p>
              At Stacked, we believe in the transformative power of web
              development. Our team of skilled professionals specializes in
              creating unique digital experiences that leave a lasting
              impression. With an unwavering dedication to innovation and a
              commitment to excellence,
            </p>
          </div>
        </div>
        <div className={styles.nav_cards}>
          <div className={styles.img_1}>
            <button className={styles.nav_btn}>Know More About Me</button>
          </div>

          <div className={styles.nav_col2}>
            <div className={styles.img_2}>
              <button className={styles.nav_btn2}>Full stack Projects</button>
            </div>

            <div className={styles.img_3}>
              <button className={styles.nav_btn3}>Explore the Blog</button>
            </div>
          </div>
        </div>
        <div className={styles.home_text2}>
          <h2>Fueling Curiosity and Driving Growth</h2>
          <div className={styles.home_text_cont}>
            <p>
              At Stacked, we believe in the transformative power of web
              development. Our team of skilled professionals specializes in
              creating unique digital experiences that leave a lasting
              impression. With an unwavering dedication to innovation and a
              commitment to excellence,
            </p>
            <div className={styles.text_img}>
              <img className={styles.timg1}></img>
              <img className={styles.timg2}></img>
            </div>
          </div>
        </div>
      </div>
      <SubsCard />
      <Footer />
    </>
  );
};

export default Homepage;
