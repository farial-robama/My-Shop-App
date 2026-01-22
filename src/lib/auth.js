import Cookies from 'js-cookie';

export const auth = {
  // Register new user
  register: async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (data.success) {
        // Store user data in cookies
        Cookies.set('auth-token', `token-${data.user.id}`, { expires: 7 });
        Cookies.set('user-data', JSON.stringify(data.user), { expires: 7 });
        return { success: true, user: data.user };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  // Login user
  login: async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        // Store user data and token in cookies
        Cookies.set('auth-token', data.token, { expires: 7 });
        Cookies.set('user-data', JSON.stringify(data.user), { expires: 7 });
        return { success: true, user: data.user };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  },

  // Logout user
  logout: () => {
    Cookies.remove('auth-token');
    Cookies.remove('user-data');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!Cookies.get('auth-token');
  },

  // Get current user data
  getCurrentUser: () => {
    const userData = Cookies.get('user-data');
    return userData ? JSON.parse(userData) : null;
  }
};