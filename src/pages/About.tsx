import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faWrench,
  faFaceGrinStars,
  faShieldAlt,
  faCar,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.locationContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to our car rental service. We pride ourselves on providing the
        best quality cars and exceptional customer service to ensure your
        driving experience is smooth and enjoyable. Our team is dedicated to
        meeting your needs and exceeding your expectations. Learn more about
        what we offer below.
      </p>
      <div className={styles.main__page_services}>
        <h1 className={styles.main__page_title}>
          Our Services for Your Pleasure!
        </h1>
        <div className={styles.main__page_offer}>
          <div className={styles.service}>
            <FontAwesomeIcon icon={faRoad} />
            <p>
              Unlimited miles per day! Drive as much as you want without
              worrying about extra costs.
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon icon={faWrench} />
            <p>
              Full service of the car is on our side! We take care of all
              maintenance and repairs.
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon icon={faFaceGrinStars} />
            <p>
              Your opinion is important to us! We strive to provide excellent
              customer service and value your feedback.
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon icon={faShieldAlt} />
            <p>
              Comprehensive insurance included! Drive with peace of mind knowing
              you're covered.
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon icon={faCar} />
            <p>
              Wide range of vehicles! Choose from economy to luxury cars to suit
              your needs.
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon icon={faDollarSign} />
            <p>
              Affordable rates! Get the best value for your money with our
              competitive pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
