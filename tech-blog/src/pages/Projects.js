import React from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
      <Header />
      <h1>This is the projects page</h1>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Projects;
