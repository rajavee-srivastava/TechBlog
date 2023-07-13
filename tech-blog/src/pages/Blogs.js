import React from 'react'
import Header from '../components/Header';
import HeroBlock from '../components/HeroBlock';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  return (
    <div>
      <Header/>
      <h1>This is the blogs page</h1>
      <HeroBlock/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <Footer/>
    </div>
  )
}

export default Blogs
