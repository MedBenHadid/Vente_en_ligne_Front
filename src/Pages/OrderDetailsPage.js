import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap';
import OrderService from '../services/OrderService';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orderDetailsData = await OrderService.getOrderDetails(orderId);
        setOrderDetails(orderDetailsData);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2 className="mt-4">Order Details</h2>
      <Row>
        <Col>
          <div>
            <strong>Date:</strong> {orderDetails.date}
          </div>
          <div>
            <strong>Client:</strong> {orderDetails.user.name}
          </div>
          <div>
            <strong>Total Amount:</strong> ${orderDetails.total_amount}
          </div>
        </Col>
      </Row>
      <h3 className="mt-4">Products Ordered</h3>
      <Row>
        {orderDetails.products.map((product) => (
          <Col key={product.id} md={6} lg={4} className="mb-4">
            <div className="p-3 border">
            <div>
                <strong>Photo:</strong> {product.Photo}
              </div>
              <div>
                <strong>Product Name:</strong> {product.name}
              </div>
              <div>
                <strong>Price:</strong> {product.price}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderDetailsPage;