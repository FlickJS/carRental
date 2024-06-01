import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  const currentDateTime = new Date().toLocaleString();
  const accountBalance = "$500.00";
  const rentedCar = {
    title: "Audi A4",
    image: "/Audi.png",
    returnDate: "2024-06-15",
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <h3>Menu</h3>
        <Link to="/dashboard/your-cars" className={styles.navButton}>
          Your Cars
        </Link>
        <Link to="/dashboard/available-cars" className={styles.navButton}>
          Available Cars
        </Link>
        <Link to="/dashboard/support" className={styles.navButton}>
          Support
        </Link>
      </div>
      <div className={styles.content}>
        <h2>Dashboard</h2>
        <p>Current Date and Time: {currentDateTime}</p>
        <p>Account Balance: {accountBalance}</p>
        <div className={styles.rentedCar}>
          <h3>Currently Rented Car</h3>
          <img
            src={rentedCar.image}
            alt={rentedCar.title}
            className={styles.carImage}
          />
          <p>{rentedCar.title}</p>
          <p>Return Date: {rentedCar.returnDate}</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
