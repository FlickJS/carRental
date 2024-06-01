import React from "react";
import styles from "./Locations.module.css";

const locations = [
  {
    city: "Warsaw",
    image: "/Warsaw.jpg",
    address: "123 Main St, Warsaw, Poland",
    hours: "Mon-Fri: 9am - 6pm, Sat-Sun: 10am - 4pm",
  },
  {
    city: "Berlin",
    image: "/Berlin.jpg",
    address: "456 Central Ave, Berlin, Germany",
    hours: "Mon-Fri: 9am - 6pm, Sat-Sun: 10am - 4pm",
  },
  {
    city: "London",
    image: "/London.jpg",
    address: "789 Kings Rd, London, UK",
    hours: "Mon-Fri: 9am - 6pm, Sat-Sun: 10am - 4pm",
  },
  {
    city: "Paris",
    image: "/Paris.jpg",
    address: "101 Champs Elysees, Paris, France",
    hours: "Mon-Fri: 9am - 6pm, Sat-Sun: 10am - 4pm",
  },
  {
    city: "New York",
    image: "/NewYork.jpg",
    address: "202 Broadway, New York, USA",
    hours: "Mon-Fri: 9am - 6pm, Sat-Sun: 10am - 4pm",
  },
  {
    city: "London",
    image: "/London.jpg",
    address: "789 Kings Rd, London, UK",
    hours: "Mon-Fri: 9am - 6pm, Sat-Sun: 10am - 4pm",
  },
];

const Locations: React.FC = () => {
  return (
    <div className={styles.locationContainer}>
      <h1>Our Locations</h1>
      <p>
        Discover our rental car offices located in major cities around the
        world. Each location offers a wide range of vehicles to suit your needs,
        whether you're traveling for business or pleasure. Find your nearest
        office and explore our convenient services and opening hours.
      </p>
      <div className={styles.locationList}>
        {locations.map((location, index) => (
          <div key={index} className={styles.locationBox}>
            <img
              src={location.image}
              alt={`Image of ${location.city}`}
              className={styles.locationImage}
            />
            <h3 className={styles.locationCity}>{location.city}</h3>
            <p className={styles.locationAddress}>{location.address}</p>
            <p className={styles.locationHours}>{location.hours}</p>
          </div>
        ))}
      </div>
      <button className={styles.contactButton}>Contact us</button>
    </div>
  );
};

export default Locations;
