import React, { useState } from "react";
import styles from "./Contact.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contact from "../images/contact.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the POST API request using Fetch
    fetch("https://example-api.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the API response as needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <h2>Say hello and let's work together!</h2>
      <div className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className={styles.main_img}>
          <img
            src={contact}
            alt="contact"
            className={styles.contact_img}
          ></img>
        </div>
      </div>
      <div className={styles.seperator}></div>
      <Footer/>
    </>
  );
};

export default Contact;
