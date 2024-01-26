class AuthService {
  static async login(username, password) {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const { user, token } = data;

      localStorage.setItem('token', token);

      return user;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
}

export default AuthService;
  