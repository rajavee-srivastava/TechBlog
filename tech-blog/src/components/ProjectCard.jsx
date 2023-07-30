import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, desc, projectLink, image1, image2 }) => {
  return (
    <div className={styles.projectcard}>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <button className={styles.Linkbttn}>
          <a href={projectLink}>Know More</a>
        </button>
      </div>
      {/* <img src={image1} alt={`${title}1`} />
      <img src={image2} alt={`${title}2`} /> */}
    </div>
  );
};

export default ProjectCard;
