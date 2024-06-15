import React, { useState } from "react";
import styles from "./RentACars.module.css";
import { useRentCar } from "../utils/useRentCar";

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
  {
    title: "Mercedes-Benz C-Class",
    pricePerMonth: 200,
    image: "/merc.webp",
    fuel: "Gasoline",
    power: "255",
    year: "2021",
    alt: "A stunning Mercedes-Benz C-Class in a sleek black finish",
    location: "London",
    link: "https://www.mercedes-benz.com/en-us/c-class",
  },
  {
    title: "Tesla Model 3",
    pricePerMonth: 250,
    image: "/tesla.png",
    fuel: "Electric",
    power: "283",
    year: "2023",
    alt: "A futuristic Tesla Model 3 in a vibrant red color",
    location: "San Francisco",
    link: "https://www.tesla.com/model3",
  },
  {
    title: "Volkswagen Golf",
    pricePerMonth: 120,
    image: "/Golf.png",
    fuel: "Gasoline",
    power: "170",
    year: "2018",
    alt: "A versatile Volkswagen Golf in a bright white color",
    location: "Amsterdam",
    link: "https://www.volkswagen.com/en-us/golf",
  },
  {
    title: "Ford Mustang",
    pricePerMonth: 300,
    image: "/mustang.png",
    fuel: "Gasoline",
    power: "450",
    year: "2020",
    alt: "A powerful Ford Mustang in a bold blue color",
    location: "Miami",
    link: "https://www.ford.com/en-us/mustang",
  },
  {
    title: "Porsche 911",
    pricePerMonth: 400,
    image: "/Porsche.png",
    fuel: "Gasoline",
    power: "379",
    year: "2021",
    alt: "A stylish Porsche 911 in a sleek silver finish",
    location: "Los Angeles",
    link: "https://www.porsche.com/en-us/911",
  },
  {
    title: "Audi A4",
    pricePerMonth: 150,
    image: "/Audi.png",
    fuel: "Hybrid",
    power: "200",
    year: "2020",
    alt: "A sleek silver Audi A4 parked in an urban setting",
    location: "Berlin",
    link: "https://www.audi.com/en-us/car/a4",
  },
];

const RentACars: React.FC = () => {
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

  const [filters, setFilters] = useState({
    title: "",
    fuel: "",
    location: "",
    maxPrice: "",
  });

  const [filteredCars, setFilteredCars] = useState(mostPopularCars);

  const handleSearch = () => {
    const filtered = mostPopularCars.filter(car => {
      return (
        (filters.title === "" || car.title.toLowerCase().includes(filters.title.toLowerCase())) &&
        (filters.fuel === "" || car.fuel.toLowerCase() === filters.fuel.toLowerCase()) &&
        (filters.location === "" || car.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.maxPrice === "" || car.pricePerMonth <= parseInt(filters.maxPrice))
      );
    });
    setFilteredCars(filtered);
  };

  return (
    <div className={styles.main_cars_container}>
      <h1>Rent a car</h1>
      <p>
        Explore our exclusive collection of rental cars available at unbeatable
        prices. Whether you need a reliable vehicle for a business trip, a
        family vacation, or just a weekend getaway, we have a car to meet your
        needs. Our fleet includes the latest models with top-of-the-line
        features to ensure a comfortable and enjoyable driving experience. Check
        out the details below for each car, including fuel type, power, and
        location. Book now and start your journey with us!
      </p>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Brand"
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
        />
        <select
          value={filters.fuel}
          onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
        >
          <option value="">All fuels</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.main__page_list}>
        {filteredCars.map((car, index) => (
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
                <span className={styles.main__page_car_price_symbol}>$</span>
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

export default RentACars;
