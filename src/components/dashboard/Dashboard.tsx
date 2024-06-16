import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useRentCar } from "../../utils/useRentCar";

interface RentedCar {
  title: string;
  image: string;
  rentalDate: string;
  rentDate: string;
  returnDate: string;
  returnLocation?: string;
  insurance?: boolean;
  fullService?: boolean;
}

const Dashboard: React.FC = () => {
  const { state } = useRentCar();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [rentedCars, setRentedCars] = useState<RentedCar[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedCars = localStorage.getItem("rentedCars");
    if (storedCars) {
      const parsedCars = JSON.parse(storedCars);
      console.log("Stored cars:", parsedCars);
      setRentedCars(parsedCars);
    }
  }, []);

  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Invalid Date';
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const calculateProgress = (startDate: Date | string, endDate: Date | string) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const now = currentDateTime.getTime();
    const totalDuration = end - start;
    const elapsed = now - start;
    return Math.min((elapsed / totalDuration) * 100, 100);
  };


  const rentedCar2: RentedCar = {
    title: "BMW 3 Series",
    image: "/Bmw.png",
    rentDate: "2024-05-27T10:00:00",
    rentalDate: "2024-05-20T10:00:00",
    returnDate: "2024-06-01T10:00:00",
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
        <p>Current Date: {formatDate(currentDateTime)}</p>
        <p>Account Balance: ${state.accountBalance.toFixed(2)}</p>
        <div className={styles.rentedCars}>
          {/* <div className={styles.rentedCar}>
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
                    rentedCar1.returnDate,
                    rentedCar1.rentalDate
                  )}%`,
                }}
              ></div>
            </div>
          </div> */}
          {rentedCars.map((car, index) => (
            <div key={index} className={styles.rentedCar}>
              <h3>Currently Rented Car</h3>
              <img
                src={car.image}
                alt={car.title}
                className={styles.carImage}
              />
              <p>{car.title}</p>
              <p>Rental Date: {formatDate(car.rentDate)}</p>
              <p>Return Date: {formatDate(car.returnDate)}</p>
              <p>Insurance: {car.insurance ? "Yes" : "No"}</p>
              <p>Full Service: {car.fullService ? "Yes" : "No"}</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{
                    width: `${calculateProgress(car.returnDate,
                      
                      car.rentDate,
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
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
