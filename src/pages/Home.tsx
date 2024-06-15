import React from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinStars,
  faRoad,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRentCar } from "../utils/useRentCar";

const locations = ["Warsaw", "Berlin", "London", "Paris", "New York", "London"];
const mostPopularCars = [
  {
    title: "Audi A4",
    pricePerMonth: 150,
    image: "/Audi.png",
    fuel: "Gasoline",
    power: "200",
    year: "2020",
    alt: "A sleek silver Audi A4 parked in an urban setting",
    location: "Berlin",
    link: "https://www.audi.com/en-us/car/a4",
  },
  {
    title: "BMW 3 Series",
    pricePerMonth: 150,
    image: "/Bmw.png",
    fuel: "Hybrid",
    power: "184",
    year: "2022",
    alt: "A luxurious BMW 3 Series with a glossy finish on a city street",
    location: "New York",
    link: "https://www.bmw.com/en-us/bmw-3-series",
  },
  {
    title: "Skoda Octavia",
    pricePerMonth: 100,
    image: "/Skoda.png",
    fuel: "Diesel",
    power: "150",
    year: "2019",
    alt: "A modern Skoda Octavia in a vibrant blue color driving on the highway",
    location: "Paris",
    link: "https://www.skoda.com/en-us/octavia",
  },
];

const Home: React.FC = () => {
  const {
    state,
    showPopup,
    hidePopup,
    setReturnDate,
    setPaymentMethod,
    toggleInsurance,
    toggleFullService,
    confirmRent,
  } = useRentCar();

  return (
    <div className={styles.main__page_wrapper}>
      <div className={styles.main__page_container}>
        <div className={styles.main__page_hero}>
          <h1 className={styles.main__page_title}>Welcome to carRent!</h1>
          <p className={styles.main__page_description}>
            Embark on a journey of comfort and luxury with carRent! Our
            meticulously curated collection of high-end vehicles awaits to
            elevate your travel experience. From the sleek city streets of New
            York to the historic avenues of Paris, our premium selection offers
            the perfect companion for every escapade. Indulge in the ultimate
            driving pleasure with carRent - where every mile is a milestone in
            sophistication and style.
          </p>
          <div className={styles.main__page_container_links}>
            <div className={styles.main__page_links}>
              {locations.map((location, index) => (
                <Link
                  key={index}
                  to={`/locations`}
                  className={styles.main__page_location}
                >
                  {location}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.main_page_cars}>
          <h1 className={styles.main__page_title}>Our most rented Cars!</h1>
          <div className={styles.main__page_list}>
            {mostPopularCars.map((car, index) => (
              <div key={index} className={styles.main__page_car}>
                <img
                  src={car.image}
                  alt={car.alt}
                  className={styles.main__page_car_image}
                />
                <div className={styles.main__page_car_info}>
                  <h3 className={styles.main__page_car_title}>{car.title}</h3>
                  <p className={styles.main__page_car_details}>
                    <span
                      className={`${styles.main__page_car_fuel} ${
                        car.fuel === "Hybrid"
                          ? styles.main__page_car_hybrid
                          : car.fuel === "Gasoline"
                          ? styles.main__page_car_gasoline
                          : car.fuel === "Diesel"
                          ? styles.main__page_car_diesel
                          : ""
                      }`}
                    >
                      Fuel: {car.fuel}
                    </span>
                    <span className={styles.main__page_car_power}>
                      Power: {car.power}kW
                    </span>
                    <span className={styles.main__page_car_year}>
                      Year: {car.year}
                    </span>
                  </p>
                  <p className={styles.main__page_car_price}>
                    <span className={styles.main__page_car_price_symbol}>
                      $
                    </span>
                    {car.pricePerMonth} per day.
                  </p>
                  <p className={styles.main__page_car_location}>
                    Current Location: {car.location}
                  </p>
                  <button
                    onClick={() => showPopup(car)}
                    className={styles.main_page_car_link}
                  >
                    Rent now!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.main__page_services}>
          <h1 className={styles.main__page_title}>
            Our services for your pleasure!
          </h1>
          <div className={styles.main__page_offer}>
            <div>
              <FontAwesomeIcon icon={faRoad} />
              Unlimited miles per day!
            </div>
            <div>
              <FontAwesomeIcon icon={faWrench} />
              Full service of the car is on our side!
            </div>
            <div>
              <FontAwesomeIcon icon={faFaceGrinStars} />
              Your opinion is important to us!
            </div>
          </div>
        </div>
      </div>

      {state.showPopup && state.selectedCar && (
        <div className={styles.popup}>
          <div className={styles.popup_content}>
            <h2>Rent {state.selectedCar.title}</h2>
            <img src={state.selectedCar.image} alt={state.selectedCar.alt} />
            <p>Fuel: {state.selectedCar.fuel}</p>
            <p>Rent Date: {state.rentDate}</p>
            <label>
              Return Date:
              <input
                type="date"
                value={state.returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </label>
            <label>
              Payment Method:
              <select
                value={state.paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value as 'cash' | 'card')}
              >
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </label>
            <label>
              <input
                type="checkbox"
                checked={state.insurance}
                onChange={toggleInsurance}
              />
              Insurance
            </label>
            <label>
              <input
                type="checkbox"
                checked={state.fullService}
                onChange={toggleFullService}
              />
              Full Service
            </label>
            <button onClick={confirmRent}>Rent now</button>
            <button className={styles.cancel_button} onClick={hidePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
