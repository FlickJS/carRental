import React from "react";
import styles from "./AvailableCars.module.css";

const availableCars = [
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

const AvailableCars: React.FC = () => {
  return (
    <div className={styles.carList}>
      {availableCars.map((car, index) => (
        <div key={index} className={styles.carBox}>
          <img src={car.image} alt={car.alt} className={styles.carImage} />
          <h3 className={styles.carTitle}>{car.title}</h3>
          <p>Price per month: ${car.pricePerMonth}</p>
          <p>Fuel: {car.fuel}</p>
          <p>Power: {car.power} HP</p>
          <p>Year: {car.year}</p>
          <p>Location: {car.location}</p>
          <a
            className={styles.main_page_car_link}
            href={car.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            More Info
          </a>
        </div>
      ))}
    </div>
  );
};

export default AvailableCars;
