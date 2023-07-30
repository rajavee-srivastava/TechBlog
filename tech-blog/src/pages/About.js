import React from "react";
import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import SubsCard from "../components/SubsCard";
import Footer from "../components/Footer";
import styles from "./About.module.css";
import doorImage from "../images/Door.png";
import blog from "../images/blog.png";
const About = () => {
  return (
    <>
      <Navbar />
      <HeroCard image={doorImage} />
      <div className={styles.text}>
        <div className={styles.title}>Fueling Curiosity and Driving Growth</div>
        <div className={styles.content}>
          At Stacked, we thrive on curiosity and the pursuit of continuous
          growth. Our journey as web developers is marked by a deep-seated
          passion for exploring the latest trends and mastering the
          ever-evolving technologies. From staying up-to-date with the latest
          frameworks to experimenting with innovative design concepts, we never
          stop learning. This insatiable curiosity drives us to push the
          boundaries of what's possible, ensuring that every project we
          undertake showcases our commitment to excellence.
        </div>
        <div className={styles.content}>
          At Stacked, we thrive on curiosity and the pursuit of continuous
          growth. Our journey as web developers is marked by a deep-seated
          passion for exploring the latest trends and mastering the
          ever-evolving technologies. From staying up-to-date with the latest
          frameworks to experimenting with innovative design concepts, we never
          stop learning. This insatiable curiosity drives us to push the
          boundaries of what's possible, ensuring that every project we
          undertake showcases our commitment to excellence.
        </div>
        <div className={styles.img}>
          <img src={blog} alt="blog"></img>
        </div>
        <div className={styles.content}>
          At Stacked, we thrive on curiosity and the pursuit of continuous
          growth. Our journey as web developers is marked by a deep-seated
          passion for exploring the latest trends and mastering the
          ever-evolving technologies. From staying up-to-date with the latest
          frameworks to experimenting with innovative design concepts, we never
          stop learning. This insatiable curiosity drives us to push the
          boundaries of what's possible, ensuring that every project we
          undertake showcases our commitment to excellence.
        </div>
        <div className={styles.content}>
          At Stacked, we thrive on curiosity and the pursuit of continuous
          growth. Our journey as web developers is marked by a deep-seated
          passion for exploring the latest trends and mastering the
          ever-evolving technologies. From staying up-to-date with the latest
          frameworks to experimenting with innovative design concepts, we never
          stop learning. This insatiable curiosity drives us to push the
          boundaries of what's possible, ensuring that every project we
          undertake showcases our commitment to excellence.
        </div>
        <div className={styles.content}>
          At Stacked, we thrive on curiosity and the pursuit of continuous
          growth. Our journey as web developers is marked by a deep-seated
          passion for exploring the latest trends and mastering the
          ever-evolving technologies. From staying up-to-date with the latest
          frameworks to experimenting with innovative design concepts, we never
          stop learning. This insatiable curiosity drives us to push the
          boundaries of what's possible, ensuring that every project we
          undertake showcases our commitment to excellence.
        </div>
      </div>
      <SubsCard />
      <Footer />
    </>
  );
};

export default About;
