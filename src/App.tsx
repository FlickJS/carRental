import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
