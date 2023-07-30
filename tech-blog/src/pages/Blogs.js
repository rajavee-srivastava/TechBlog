import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import SubsCard from "../components/SubsCard";
import Footer from "../components/Footer";
import HeroCard from "../components/HeroCard";
import blogDoor from "../images/blogDoor.png";
import styles from "./Blog.module.css";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://127.0.0.1:8000/api/blog_list")
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <>
      <Navbar />
      <HeroCard image={blogDoor} />
      <div className={styles.blogs}>
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            shortDesc={blog.shortDesc}
            category={blog.category}
            date={blog.date}
          />
        ))}
      </div>
      <SubsCard/>
      <Footer/>
    </>
  );
};

export default Blog;
