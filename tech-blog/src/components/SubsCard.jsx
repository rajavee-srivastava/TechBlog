import React, { useState } from "react";
import styles from "./SubsCard.module.css";

const SubsCard = () => {
  const apiEndpoint = "http://127.0.0.1:8000/api/subs"; // Replace this with your actual API endpoint URL
  const [email, setEmail] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if the email is not empty before making the API request
    if (email.trim() === "") {
      alert("Please enter an email before submitting.");
      return;
    }
  
    try {
      // Make the API POST request
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
  
      if (!response.ok) {
        // Handle non-successful responses (status codes other than 2xx)
        throw new Error("Failed to submit email.");
      }
  
      // Optionally, you can show a success message to the user
      alert("Email sent! We'll get back to you shortly.");
  
      // Reset the input field after the form submission
      setEmail("");
    } catch (error) {
      // Handle errors here
      console.error("API error:", error);
      // Optionally, you can show an error message to the user
      alert("Failed to submit email. Please try again later.");
    }
  };
  

  return (
    <div className={styles.SubsComp}>
      <div className={styles.title}>Got an interesting idea?</div>
      <div className={styles.subtext}>
        Reach out to me and let's collaborate to build something interesting together!!
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SubsCard;

