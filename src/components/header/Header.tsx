import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <img src="/mainlogo.png" alt="logo firmy" />
        <p className={styles.logoText}>carRent</p>
      </div>
      <div>
        <ul>
          <li>Locations</li>
          <li>Rent a Cars</li>
          <li>About the service</li>
          <li>Contact</li>
          <li>
            My Cars <FontAwesomeIcon icon={faUserCog} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
