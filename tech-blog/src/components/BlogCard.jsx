import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

const BlogComponent = ({ image, title, shortDesc, category, date, key }) => {
  return (
    <div className={styles.blogcard}>
      <Link to={`http://127.0.0.1:8000/api/blogs/${key}`}>
        {/* <img src={image} alt={title} /> */}
        <h2>{title}</h2>
        <p>{shortDesc}</p>
        <div className={styles.metadata}>
          <span>{category}</span>
          <span>{date}</span>
        </div>
      </Link>
    </div>
  );
};

export default BlogComponent;
