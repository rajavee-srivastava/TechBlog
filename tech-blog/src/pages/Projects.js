import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import SubsCard from "../components/SubsCard";
import Footer from "../components/Footer";
import HeroCard from "../components/HeroCard";
import butterfly from "../images/butterfly.png";
import styles from "./Projects.module.css";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:8000/api/projects")
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <>
      <Navbar />
      <HeroCard image={butterfly} />
      <div className={styles.projects}>
        {projectData.map((project) => (
          <ProjectCard
            title={project.title}
            desc={project.desc}
            projectLink={project.projectLink}
            image1={project.image1}
            image2={project.image2}
          />
        ))}
      </div>
      <SubsCard />
      <Footer />
    </>
  );
};

export default Projects;
