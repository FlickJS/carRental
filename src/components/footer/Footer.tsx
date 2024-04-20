import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLogo}>
          <img src="/mainlogo.png" alt="logo firmy" />
          About carRent
        </div>
        <p className={styles.footerDescription}>
          We provide access to a wide fleet of diverse premium cars. We also
          offer many different services connected with transport using cars or
          minibuses. We are not limited by a constant fleet of cars and range of
          services - we keep growing so that the Customer can be fully satisfied
          with their cooperation with our rental service.
        </p>
        <ul className={styles.footerLinks}>
          <li>
            <Link to="/path1" className={styles.footerLink}>
              Our fleet of cars
            </Link>
          </li>
          <li>
            <Link to="/path2" className={styles.footerLink}>
              B2B contact
            </Link>
          </li>
          <li>
            <Link to="/path3" className={styles.footerLink}>
              My account
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerRight}>
        <h3 className={styles.contactTitle}>Contact</h3>
        <p className={styles.contactDetail}>Email: info@carrental.com</p>
        <p className={styles.contactDetail}>Phone: +48-554-343-434</p>
        <p className={styles.contactDetail}>827 Ben Motorway Apt. 803</p>
        <p className={styles.contactDetail}>Port Elainabury</p>
      </div>
    </footer>
  );
};

export default Footer;
