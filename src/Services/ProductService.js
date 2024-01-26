class ProductService {
    static async getByCategory(categoryId) {
      const response = await fetch(`http://127.0.0.1:8000/api/products/category/${categoryId}`);
      const data = await response.json();
      return data;
    }
  
    static async getAllProducts() {
      const response = await fetch('http://127.0.0.1:8000/api/get-all-Product');
      const data = await response.json();
      return data;
    }
    static async getAllProducts() {
      const response = await fetch('http://127.0.0.1:8000/api/get-all-Product');
      const data = await response.json();
      return data;
    }
  }
  
  export default ProductService;