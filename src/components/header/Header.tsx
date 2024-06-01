import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <img src="/mainlogo.png" alt="logo firmy" />
        <p className={styles.logoText}>carRent</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/rent">Rent a Cars</Link>
          </li>
          <li>
            <Link to="/about">About the service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/mycars">
              My Cars <FontAwesomeIcon icon={faUserCog} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
