import React, { useState, useEffect } from "react";
import styles from "./ProjectCard.module.css";
import ImageComponent from "./ImageComponent";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/projects"); // Update the API endpoint as per your backend
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.project_layer}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`${styles["project-card"]} ${
            index % 2 === 0 ? styles.even : styles.odd
          }`}
        >
          <div className={styles.content}>
            <h2 className={styles.cardtitle}>{project.title}</h2>
            <p className={styles.desc}>{project.description}</p>
            <a
              href={project.project_link}
              className={styles.button}
            >
              Learn More
            </a>
          </div>
          <div className={styles.images}>
            <ImageComponent imageId={project.images} isblog={false} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
