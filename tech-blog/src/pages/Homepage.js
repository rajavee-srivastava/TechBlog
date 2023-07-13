import React from 'react'
import Header from '../components/Header';
import HeroBlock from '../components/HeroBlock';
import AboutCard from '../components/AboutCard';
import ProjectCard from '../components/ProjectCard';
import SubsCard from '../components/SubsCard';
import Footer from '../components/Footer';


const Homepage = () => {
  return (
    <div>
      <Header/>
      <h1>This is the homepage</h1>
      <HeroBlock/>
      <AboutCard/>
      <ProjectCard/>
      <SubsCard/>
      <Footer/>
    </div>
  )
}

export default Homepage
