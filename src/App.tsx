import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import RentACar from "./pages/RentACars";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyCars from "./pages/MyCars";
import Dashboard from "./components/dashboard/Dashboard";
import AvailableCars from "./components/dashboard/AvailableCars";
import Support from "./components/dashboard/Support";
import B2BContact from "./pages/B2BContact";
import "./App.css";

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/locations", element: <Locations /> },
      { path: "/rent", element: <RentACar /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/mycars", element: <MyCars /> },
      { path: "/b2bcontact", element: <B2BContact /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          { path: "your-cars", element: <div></div> },
          { path: "available-cars", element: <AvailableCars /> },
          { path: "support", element: <Support /> },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
