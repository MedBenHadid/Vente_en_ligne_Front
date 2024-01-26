// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import Cart from "../Components/Cart";
import api from "../api";
import ProductService from "../Services/ProductService";

const HomePage = () => {
  /*const sampleProducts = [
    { id: 1, name: "Product 1", price: 20, image: "holder.js/100px180" },
    { id: 2, name: "Product 2", price: 25, image: "holder.js/100px180" },
    { id: 3, name: "Product 3", price: 30, image: "holder.js/100px180" },
    { id: 4, name: "Product 1", price: 20, image: "holder.js/100px180" },
    { id: 5, name: "Product 2", price: 25, image: "holder.js/100px180" },
    { id: 6, name: "Product 3", price: 30, image: "holder.js/100px180" },
    { id: 7, name: "Product 1", price: 20, image: "holder.js/100px180" },
    { id: 8, name: "Product 2", price: 25, image: "holder.js/100px180" },
    { id: 9, name: "Product 3", price: 30, image: "holder.js/100px180" },
  ];
  const [products, setProducts] = useState(sampleProducts);
  const [cart, setCart] = useState([]);
*/
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await ProductService.getAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    console.log(product.id)
    console.log(cart)
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Container fluid>
      <h2>Home Page</h2>
      <Row>
        <Col md={9}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </Col>
        <Col md={3}>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
