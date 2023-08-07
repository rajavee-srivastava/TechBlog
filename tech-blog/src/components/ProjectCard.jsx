import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, desc, projectLink, image1, image2 }) => {
  const base_url = "http://127.0.0.1:8000";
  
  return (
    <div className={styles.projectcard}>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <button className={styles.Linkbttn}>
          <a href={projectLink}>Know More</a>
        </button>
      </div>
<div className={styles.images}>
        <img src={`${base_url}${image1}`} alt={`${title}1`} className={styles.img1}/>
       <img src={`${base_url}${image2}`} alt={`${title}2`} className={styles.img2}/>
</div>
    </div>
  );
};

export default ProjectCard;
