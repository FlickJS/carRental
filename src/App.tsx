import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="temp">
        <h1>Main Layout Div</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
