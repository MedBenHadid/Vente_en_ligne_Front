import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import Cart from "../Components/Cart";
import api from "../api";
import ProductService from "../Services/ProductService";

const HomePage = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("http://127.0.0.1:8000/api/get-products");
        console.log(response.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  

  const addToCart = (product) => {
    let clonedCart = cart;

    let cartIndex = clonedCart.findIndex((val) => val?.id == product?.id);

    if (cartIndex == -1) {
      let productItem = {
        id: product?.id,
        item: product,
        qty: 1,
      };
      setCart([...cart, productItem]);
    } else {
      let productItem = cart.find((val) => val?.id == product?.id);
      productItem.qty++;
      clonedCart[cartIndex] = productItem;
      setCart([...cart, productItem]);
    }
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
