class OrderService {
    static async getAllOrders() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/get-orders');
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
      }
    }
  
    static async addOrder(orderData) {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/add-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error adding order:', error);
        throw error;
      }
    }
  
    static async updateOrder(orderId, orderData) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/update-order/${orderId}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
  
        const updatedOrder = await response.json();
        return updatedOrder;
      } catch (error) {
        console.error('Error updating order:', error);
        throw error;
      }
    }
  
    static async deleteOrder(orderId) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/delete-order/${orderId}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
  
        const message = await response.json();
        return message;
      } catch (error) {
        console.error('Error deleting order:', error);
        throw error;
      }
    }
  }
  
  export default OrderService;