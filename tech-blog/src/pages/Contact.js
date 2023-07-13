import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>This is the Contacts Page</h1>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
