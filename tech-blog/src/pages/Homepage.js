import React, { useState, useEffect } from "react";
import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";
import SubsCard from "../components/SubsCard";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for fetching the latest blog posts
    fetch("http://127.0.0.1:8000/api/blog_list")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an array of blog post objects
        // Sort the blog posts in descending order of date to get the latest ones first
        const sortedPosts = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        // Take the first 3 posts (latest ones) and store them in the state
        const latestThreePosts = sortedPosts.slice(0, 3);
        setLatestPosts(latestThreePosts);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <HeroCard />
      <div className={styles.textComp}>
        <h3>Where Creativity meets Technical Expertise ...</h3>
        <div className={styles.subtext}>
          <p>
            At Stacked, we believe in the transformative power of web
            development. Our team of skilled professionals specializes in
            creating unique digital experiences that leave a lasting impression.
            With an unwavering dedication to innovation and a commitment to
            excellence, At Stacked, we believe in the transformative power of
            web development. Our team of skilled professionals specializes in
            creating unique digital experiences that leave a lasting impression.
            With an unwavering dedication to innovation and a commitment to
            excellence,
          </p>
          <p>
            At Stacked, we believe in the transformative power of web
            development. Our team of skilled professionals specializes in
            creating unique digital experiences that leave a lasting impression.
            With an unwavering dedication to innovation and a commitment to
            excellence, At Stacked, we believe in the transformative power of
            web development. Our team of skilled professionals specializes in
            creating unique digital experiences that leave a lasting impression.
            With an unwavering dedication to innovation and a commitment to
            excellence,
          </p>
        </div>
      </div>
      <div className={styles.navCards}>
        <div className={styles.col1}>
          <div className={styles.img1}>
            <Link to="/about">
              <button className={styles.navBttn}>Know more about me</button>
            </Link>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.img2}>
            <Link to="/blog">
              <button className={styles.navBttn}>Explore the Blog</button>
            </Link>
          </div>
          <div className={styles.img3}>
            <Link to="/projects">
              <button className={styles.navBttn}>Full stack projects</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.textComp}>
        <h3>Where Creativity meets Technical Expertise ...</h3>
        <div className={styles.subtext}>
          <p>
            At Stacked, we believe in the transformative power of web
            development. Our team of skilled professionals specializes in
            creating unique digital experiences that leave a lasting impression.
            With an unwavering dedication to innovation and a commitment to
            excellence,
          </p>
          <p>
            At Stacked, we believe in the transformative power of web
            development. Our team of skilled professionals specializes in
            creating unique digital experiences that leave a lasting impression.
            With an unwavering dedication to innovation and a commitment to
            excellence,
          </p>
        </div>
      </div>
      <div className={styles.textComp1}>
        <h3>Check out our Latest Blogs!</h3>
      </div>
      <div className={styles.latestBlog}>
        {latestPosts.map((blog) => (
          <BlogCard
            blogId={blog.blogId}
            image={blog.image}
            title={blog.title}
            shortDesc={blog.shortDesc}
            category={blog.category}
            date={blog.date}
          />
        ))}
      </div>
      <SubsCard />
      <Footer />
    </>
  );
};

export default Homepage;
