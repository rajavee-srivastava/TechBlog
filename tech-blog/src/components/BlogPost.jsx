import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SubsCard from "../components/SubsCard";
import Footer from "../components/Footer";
import styles from "./BlogPost.module.css";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { blogId } = useParams();

  const base_url = "http://127.0.0.1:8000";

  const [blogData, setBlogData] = useState();

  useEffect(() => {
    // Fetch the blog post data from the Django API using the blog ID passed as prop
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/blogs/${blogId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [blogId]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.blogpost}>
        <div className={styles.title}>{blogData.title}</div>
        <div className={styles.meta}>{blogData.date}</div>
        <img
          src={`${base_url}${blogData.image}`}
          alt={blogData.title}
          className={styles.img}
        />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        />
      </div>
      <SubsCard />
      <Footer />
    </>
  );
};

export default BlogPost;
