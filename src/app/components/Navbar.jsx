'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(auth.isAuthenticated());
  }, []);

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:scale-105 transition">
            🛒 My Shop
          </Link>
          
          {/* Navigation Links */}
          <div className="flex gap-6 items-center">
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-200 transition">
              Products
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link 
                  href="/products/add" 
                  className="hover:text-blue-200 transition"
                >
                  ➕ Add Product
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition transform hover:scale-105"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}