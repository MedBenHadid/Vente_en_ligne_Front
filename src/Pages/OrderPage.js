import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OrderService from '../services/OrderService';
import AuthService from '../Services/AuthService';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await OrderService.getAllOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
       
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container>
      <h2 className="mt-4">List of past orders</h2>
      <Row>
        {orders.map((order) => (
          <Col key={order.id} md={6} lg={4} className="mb-4">
            <div className="p-3 border">
              <div>
                <strong>Date:</strong> {order.date}
              </div>
              <div>
                <strong>Client:</strong> {order.user.name}
              </div>
              <div>
                <strong>Montant Total:</strong> ${order.total_amount}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderPage;