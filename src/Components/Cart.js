// src/components/Cart.js
import React, { useState } from "react";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart,minusQty,plusQty }) => {
  const navigate = useNavigate();

  function handleNavigateClick() {
    navigate("/order-summary", { state: { cart: cart } });
  }

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>Shopping Cart</Card.Title>
        {cart.map((item, key) => (
          <div
            key={key}
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", width: "80%" }}
            >
              <Card.Text>
                <b>{item.item.name}</b>
              </Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "row" }}>
                Price: {item.item.price} DT{" "}
                <b style={{ marginLeft: "5px" }}> </b>
              </Card.Text>

              <InputGroup className="mb-3">
                <Button
                  variant="secondary"
                  onClick={()=>minusQty(item.id)}
                  style={{ height: "60%" }}
                >
                  -
                </Button>
                <InputGroup.Text id="inputGroup-sizing-default">
                  X {item.qty}
                </InputGroup.Text>
                <Button
                  variant="secondary"
                  onClick={()=>plusQty(item.id)}

                  style={{ height: "60%" }}
                >
                  +
                </Button>
              </InputGroup>
            </div>

            <Button
              variant="success"
              onClick={() => removeFromCart(item.id)}
              style={{ height: "60%" }}
            >
              Remove
            </Button>
          </div>
        ))}

        <Button
          variant="success"
          onClick={() => handleNavigateClick()}
          style={{ height: "60%", height: "fit-content", width: "100%" }}
        >
          Pass to order
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;
