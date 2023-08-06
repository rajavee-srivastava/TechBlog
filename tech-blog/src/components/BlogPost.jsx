import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import SubsCard from "./SubsCard";
import Footer from "./Footer";
import styles from "./BlogPost.module.css";

const BlogPost = () => {
  const { post_id } = useParams();
  const [blogPostData, setBlogPostData] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/posts/${post_id}`
        ); // Update the API endpoint as per your Django backend
        const data = await response.json();
        setBlogPostData(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [post_id]);

  if (!blogPostData) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const { title, categories, created_at, image, content } = blogPostData;

  return (
    <>
      <Navbar />
      <div className={styles.BlogPost}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.meta}>
          <div className={styles.categories}>
            {categories.map((category) => (
              <p className={styles.category} key={category.id}>
                {category.name}
              </p>
            ))}
          </div>
          <p>Date: {created_at}</p>
        </div>
        <img src={image} alt={title} className={styles.blog_img} />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={styles.content}
      />
      </div>
      <SubsCard />
      <Footer />
    </>
  );
};

export default BlogPost;
