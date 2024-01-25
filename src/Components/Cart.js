// src/components/Cart.js
import React, { useState } from "react";
import { Card, Button, InputGroup, Form } from "react-bootstrap";

const Cart = ({ cart, removeFromCart }) => {
  // const [cartList, setCartList] = useState([...new Set(cart)].map((val) => {
  //   return {
  //     item: val,
  //     qty: cart.filter((value) => value.id == val.id).length,
  //   };
  // }));
  // setCartList([...new Set(cartList)])
  // console.log(new Set(cartList))
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>Shopping Cart</Card.Title>
        {[...new Set(cart)].map((item, key) => (
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
                <b>{item.name}</b>
              </Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "row" }}>
                Price: {item.price} DT{" "}
                <b style={{ marginLeft: "5px" }}>
                  {" "}
                  {/* X {cart.filter((val) => val.id == item.id).length} */}
                </b>
              </Card.Text>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Quantity
                </InputGroup.Text>
                <Form.Control
                  value={cart.filter((val) => val.id == item.id).length}
                  aria-label={cart.filter((val) => val.id == item.id).length}
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </div>

            <Button
              variant="danger"
              onClick={() => removeFromCart(item.id)}
              style={{ height: "60%" }}
            >
              Remove
            </Button>
          </div>
        ))}

        <Button
          variant="success"
          onClick={() => console.log("heel")}
          style={{ height: "60%", height: "fit-content", width: "100%" }}
        >
          Pass to order
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;
