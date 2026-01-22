# 🛍️ My Shop – Modern E-Commerce Application

A modern, fully responsive full-stack e-commerce application built with **Next.js 15 (App Router)**.  
It features product browsing, authentication, product management, and a clean, user-friendly UI optimized for all devices.

---

## 🚀 Live Demo & Repositories

- 🌐 **Live Site**: https://my-shop-app-xcvb.vercel.app/
- 💻 **Frontend Repository**: https://github.com/farial-robama/My-Shop-App
- 🖥️ **Backend Repository**: https://github.com/farial-robama/My-Shop-App-Server

---

## 📌 Project Overview

**My Shop** is a full-stack web application that allows users to browse products, view detailed product information, and manage products through protected routes.  
The project focuses on modern UI/UX, responsive design, and real-world application architecture.

---

## ✨ Features

### 🌍 Public Features

- Modern landing page with 7 sections
- Product listing page
- Product details page
- Responsive navigation bar
- Active route highlighting
- Fully responsive layout

---

### 🔐 Protected Features

- User authentication (login & signup)
- Add new products
- Cookie-based session management
- Protected routes with authentication check

---

### ⚙️ Additional Features

- Toast notifications
- Optimized images using Next.js Image
- Smooth animations and transitions
- Star ratings for products and testimonials
- Newsletter subscription with validation

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15 (App Router)
- React 18
- Tailwind CSS
- Lucide React
- React Hot Toast

### Backend

- Node.js
- Express.js
- Cookie-based Authentication
- JSON data storage

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

---

### 🔧 Frontend Setup

````bash
git clone https://github.com/farial-robama/My-Shop-App.git
cd My-Shop-App
npm install
npm run dev
````

### 🔧 Backend Setup

   ```bash
   git clone https://github.com/farial-robama/My-Shop-App-Server.git
   cd My-Shop-App-Server
   npm install
   npm start
   ````
  - Server will run on `https://my-shop-app-server.onrender.com`
---
## 🗺️ Route Summary

| Route            | Access    | Description                  |
| ---------------- | --------- | ---------------------------- |
| `/`              | Public    | Landing page with 7 sections |
| `/products`      | Public    | List of all products         |
| `/products/[id]` | Public    | Individual product details   |
| `/products/add`  | Protected | Add new product form         |
| `/login`         | Public    | User login page              |
| `/signup`        | Public    | User registration page       |

## 🔒 Authentication Flow

1. User navigates to `/login` or `/signup`
2. Enters credentials (email & password)
3. On successful authentication:
   - Token stored in cookies
   - User redirected to home page
   - Navbar updates to show "Logout" button
4. Protected routes check for valid token
5. Unauthenticated users redirected to login page

## 📱 Responsive Design

The application is fully responsive and optimized for:

- 📱 Mobile devices (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktops (1024px and above)

## 🎨 Design Features

- **Modern UI/UX** - Clean and intuitive interface
- **Gradient Backgrounds** - Eye-catching hero sections
- **Hover Effects** - Interactive cards and buttons
- **Smooth Transitions** - Professional animations
- **Active States** - Visual feedback for user interactions
- **Mobile Menu** - Hamburger navigation for small screens

## 🔧 API Endpoints (If using Express.js)

```javascript
// Products
GET    /api/products         // Get all products
GET    /api/products/:id     // Get single product
POST   /api/products         // Create new product (Protected)
PUT    /api/products/:id     // Update product (Protected)
DELETE /api/products/:id     // Delete product (Protected)

// Authentication
POST   /api/auth/login       // User login
POST   /api/auth/signup      // User registration
POST   /api/auth/logout      // User logout
```

## 🚀 Deployment

### Deploy Frontend to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy!

### Deploy Backend (Optional)

1. Deploy to Render, Railway, or Heroku
2. Update `NEXT_PUBLIC_API_URL` with your backend URL
3. Redeploy frontend

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Name**

- GitHub: [@farial-robama](https://github.com/farial-robama)
- Email: farialrobama15@gmail.com

## 🙏 Acknowledgments

- Next.js Documentation
- Tailwind CSS
- Unsplash for images

---
