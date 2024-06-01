import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
  };

  const calculateProgress = (startDate: Date, endDate: Date) => {
    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsed = currentDateTime.getTime() - startDate.getTime();
    return Math.min((elapsed / totalDuration) * 100, 100);
  };

  const accountBalance = "$500.00";
  const rentedCar1 = {
    title: "Audi A4",
    image: "/Audi.png",
    rentalDate: new Date("2024-05-27T10:00:00"),
    returnDate: new Date("2024-06-15T10:00:00"),
  };
  const rentedCar2 = {
    title: "BMW 3 Series",
    image: "/Bmw.png",
    rentalDate: new Date("2024-05-20T10:00:00"),
    returnDate: new Date("2024-06-01T10:00:00"),
    returnLocation: "123 Main St, Warsaw, Poland",
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <h3>Dashboard</h3>
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
        <h2>Your current rented cars</h2>
        <p>Current Date and Time: {formatDate(currentDateTime)}</p>
        <p>Account Balance: {accountBalance}</p>
        <div className={styles.rentedCars}>
          <div className={styles.rentedCar}>
            <h3>Currently Rented Car</h3>
            <img
              src={rentedCar1.image}
              alt={rentedCar1.title}
              className={styles.carImage}
            />
            <p>{rentedCar1.title}</p>
            <p>Rental Date: {formatDate(rentedCar1.rentalDate)}</p>
            <p>Return Date: {formatDate(rentedCar1.returnDate)}</p>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{
                  width: `${calculateProgress(
                    rentedCar1.rentalDate,
                    rentedCar1.returnDate
                  )}%`,
                }}
              ></div>
            </div>
          </div>
          <div className={styles.rentedCar}>
            <h3>Car to be Returned</h3>
            <img
              src={rentedCar2.image}
              alt={rentedCar2.title}
              className={styles.carImage}
            />
            <p>{rentedCar2.title}</p>
            <p>Rental Date: {formatDate(rentedCar2.rentalDate)}</p>
            <p>Return Date: {formatDate(rentedCar2.returnDate)}</p>
            <p>Return Location: {rentedCar2.returnLocation}</p>
            <div className={styles.rating}>
              <p>Leave a Review:</p>
              <div className={styles.stars}>
                {[...Array(5)].map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
