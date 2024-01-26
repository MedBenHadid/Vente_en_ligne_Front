class AuthService {
    static isAuthenticated() {
      return localStorage.getItem('token') !== null;
    }
  
    static login(username, password) {
      const token = 'example_token';
      localStorage.setItem('token', token);
    }
  
    static logout() {
      localStorage.removeItem('token');
    }
  }
  
  export default AuthService;
  