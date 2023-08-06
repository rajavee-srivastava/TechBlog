import React, { useEffect, useState } from 'react';
import styles from './ImageComponent.module.css'

const ImageComponent = ({ imageId, isblog}) => {
  let imageClass = styles.image;

  if (isblog) {
    imageClass += ' ' + styles.blog;
  } else {
    imageClass += ' ' + styles.project;
  }

  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/images/${imageId}/`);
        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.image);
          setLoading(false);
        } else {
          console.error('Failed to fetch image:', response.status);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error while fetching image:', error);
        setLoading(false);
      }
    };

    fetchImage();
  }, [imageId]);

  if (loading) {
    return <p>Loading image...</p>;
  }

  if (!imageUrl) {
    return <p>Image not found</p>;
  }
  const backendRootUrl = 'http://localhost:8000';
  return <img src={`${backendRootUrl}${imageUrl}`} alt="Image" className={imageClass}/>;
};

export default ImageComponent;
