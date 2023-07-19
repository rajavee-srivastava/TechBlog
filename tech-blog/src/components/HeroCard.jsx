import React from "react";
import styles from "HeroCard.module.css";

const HeroCard = ({ image }) => {
  if (image) {
    // Case 1: In case an image is provided as a prop -> Render one component
    return (
      <div className={styles.heroComponent}>
        <div className={styles.heroText}>
          <div className={styles.title}>Welcome to Stacked!</div>
          <div className={styles.subText}>
            This website is for enthusiastic developers to read and share blog posts as well as personal projects.
          </div>
          <button className={styles.aboutBttn}>Know More!</button>
        </div>
        <div className={styles.img}>
          <img src={image} alt="Hero Image" />
        </div>
      </div>
    );
  } else {
    // Case 2: Image is not provided, render the other component! (Conditional CSS props applied here)
    return (
      <div className={styles.heroComponentNoImage}>
        <div className={styles.heroText}>
          <div className={styles.title}>Welcome to Stacked!</div>
          <div className={styles.subText}>
            This website is for enthusiastic developers to read and share blog posts as well as personal projects.
          </div>
          <button className={styles.aboutBttn}>Know More!</button>
        </div>
      </div>
    );
  }
};

export default HeroCard;
