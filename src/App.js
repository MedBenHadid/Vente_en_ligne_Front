import React, { useState, useEffect } from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Footer from "./Components/Footer";
import OrderSummary from "./Components/OrderSummary";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Components/NotFound";
import api from "./api";
import AuthService from "./Services/AuthService";
import HomePage from "./Pages/HomePage";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

    

  const applyDiscount = () => {
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          My Online Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/order-summary">
              Order Summary
            </Nav.Link>
          </Nav>
          <Nav>
            {AuthService.isAuthenticated() ? (
              <Button variant="link" onClick={() => AuthService.logout()}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Admin
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/"  element={<HomePage/>} />
   
        <Route
          path="/order-summary"
          element={() => (
            <OrderSummary cart={cart} applyDiscount={applyDiscount} />
          )}
        />
        <Route path="/login" element={<LoginPage/>} />
        <Route element={<NotFound/>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
