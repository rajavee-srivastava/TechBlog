import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import SubsCard from "../components/SubsCard";
import Footer from "../components/Footer";
import styles from "BlogPost.module.css"

const YourComponent = ({ key }) => {
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post data from the Django API using the blog ID passed as prop
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/blogs/${key}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [key]);

  return(

    <>
      <Navbar/>
      <div className={styles.title}>{blogPost.title}</div>
      <div className={styles.meta}>{blogPost.date}</div>
      <div className={styles.img}>{blogPost.image}</div>
      <div className={styles.content}>{blogPost.content}</div>
      <SubsCard/>
      <Footer/>
    </>

  )
};

export default YourComponent;