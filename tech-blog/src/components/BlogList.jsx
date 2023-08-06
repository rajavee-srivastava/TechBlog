import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./BlogList.module.css";
import ImageComponent from "./ImageComponent";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/posts"); // Update the API endpoint as per your Django backend
        const data = await response.json();
        setBlogPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading blog posts ...</div>;
  }

  return (
    <>
      <div className={styles.blog_frame}>
        <div className={styles.blog_row}>
          {blogPosts.map((post) => (
            <Link
              to={`/blog/${post.post_id}`}
              key={post.post_id}
              className={styles.Link}
            >
              <div className={styles.blog_card}>
                <ImageComponent imageId={post.image} isblog={true}/>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogDesc}>{post.short_description}</p>
                <div className={styles.meta}>
                  <div className={styles.categories}>
                    {post.categories.map((category) => (
                      <p className={styles.category} key={category.id}>
                        {category.name}
                      </p>
                    ))}
                  </div>
                  <p className={styles.date}>{post.created_at}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
