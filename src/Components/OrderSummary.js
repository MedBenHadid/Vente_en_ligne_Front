// src/components/OrderSummary.js
import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const OrderSummary = ({ cart, applyDiscount }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  const discountedAmount = totalAmount > 100 ? 0.25 * totalAmount : 0;
  const finalAmount = totalAmount - discountedAmount;
  console.log(cart);


  return (<>
  <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        {cart.map(({ item }) => (
          <div key={item.id}>
            <Card.Text>{item.name}</Card.Text>
            <Card.Text>Price: {item.price} DT</Card.Text>
          </div>
        ))}
        <Card.Text>Total: {totalAmount} DT</Card.Text>
        {discountedAmount > 0 && (
          <Card.Text>Discount (25%): -{discountedAmount} DT</Card.Text>
        )}
        <Card.Text>Final Amount: {finalAmount} DT</Card.Text>
        <Button variant="success" onClick={applyDiscount}>
          Apply Discount
        </Button>
      </Card.Body>
    </Card></>
  );
};

export default OrderSummary;
