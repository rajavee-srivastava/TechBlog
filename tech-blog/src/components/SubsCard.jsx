import React, { useState } from "react";
import styles from "./SubsCard.module.css";

const SubsCard = () => {
  const apiEndpoint = "http://127.0.0.1:8000/api/subs"; // Replace this with your actual API endpoint URL
  const [idea, setIdea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the idea is not empty before making the API request
    if (idea.trim() === "") {
      alert("Please enter an idea before submitting.");
      return;
    }

    // Make the API POST request
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idea: idea }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response here if needed
        console.log("API response:", data);
        // Optionally, you can show a success message to the user
        alert("Idea submitted successfully!");
      })
      .catch((error) => {
        // Handle errors here if needed
        console.error("API error:", error);
        // Optionally, you can show an error message to the user
        alert("Failed to submit idea. Please try again later.");
      });

    // Reset the input field after the form submission
    setIdea("");
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
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SubsCard;

