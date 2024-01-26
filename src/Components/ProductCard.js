import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
      <Card.Img variant="top" src={product.photo} />

        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: {product.price} DT</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
