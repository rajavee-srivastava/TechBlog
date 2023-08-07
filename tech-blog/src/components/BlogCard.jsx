import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogPost from "./BlogPost";
import styles from "./BlogCard.module.css";

const BlogComponent = ({ image, title, shortDesc, category, date, blogId }) => {
  const base_url = "http://127.0.0.1:8000";

  // Function to format category names with commas
  const formatCategories = (categories) => {
    return categories.map((cat) => cat.name).join(", ");
  };

  return (
    <Link to={`/blog/${blogId}`} className={styles.blogcard}>
      <div className={styles.blogcard}>
        <img src={`${base_url}${image}`} alt={title} className={styles.img} />
        <h2>{title}</h2>
        <p>{shortDesc}</p>
        <div className={styles.metadata}>
          <span className={styles.category}>{formatCategories(category)}</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogComponent;
