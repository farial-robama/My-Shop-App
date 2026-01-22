import Cookies from 'js-cookie';

export const auth = {
  // Login function
  login: (email, password) => {
    // Hardcoded credentials for testing
    if (email === 'admin@example.com' && password === 'password123') {
      Cookies.set('auth-token', 'user-logged-in', { expires: 7 });
      return true;
    }
    return false;
  },
  
  // Logout function
  logout: () => {
    Cookies.remove('auth-token');
  },
  
  // Check if user is authenticated
  isAuthenticated: () => {
    return !!Cookies.get('auth-token');
  }
};