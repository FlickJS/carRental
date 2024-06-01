import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
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
        <iframe
          title="Warsaw Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24329.702474935945!2d20.97844012403594!3d52.22967562878108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc66975c6ef1%3A0xa3756c6c689d4b0c!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2s!4v1628237524450!5m2!1sen!2s"
          className={styles.map}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
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

export default Contact;
