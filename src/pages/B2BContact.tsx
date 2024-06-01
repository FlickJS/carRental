import React from "react";
import styles from "./B2BContact.module.css";

const B2BContact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <img src="/mainlogo.png" alt="Company Logo" className={styles.logo} />
        <h2>Our Main Office</h2>
        <p>123 Main St, Warsaw, Poland</p>
        <p>Mon-Fri: 9am - 6pm</p>
        <p>Sat-Sun: 10am - 4pm</p>
        <p>
          Welcome to our main office located in the heart of Warsaw. We are here
          to assist you with all your car rental needs. Our team is dedicated to
          providing you with the best service possible.
        </p>
        <h3>B2B Services</h3>
        <p>
          We offer tailored solutions for businesses, including fleet
          management, corporate rates, and flexible rental terms. Partner with
          us to ensure your company's transportation needs are met efficiently
          and cost-effectively.
        </p>
      </div>
      <div className={styles.contactForm}>
        <h2>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default B2BContact;
